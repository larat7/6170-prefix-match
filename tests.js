(function() {
  mocha.setup("bdd");
  var assert = chai.assert;

  describe("Trie", function() {
    // addWord behavior will be tested using the autocomplete function in
    // order to not exposed implementation details of the Trie
    describe("addWord", function() {
      var trie = Trie();
      it("should add an empty string", function() {
        trie.addWord("");
        assert.equal("", trie.autocomplete(""));
      });

      it("should add a word", function() {
        trie.addWord("wonder");
        assert.equal("wonder", trie.autocomplete("wonder"));
      });

      it("should override duplicate words", function() {
        trie.addWord("duplicate");
        trie.addWord("duplicate");
        assert.equal("duplicate", trie.autocomplete("duplicate"));
      });
    });

    describe("autocomplete", function() {
      var correctAutocomplete = function(prefix) {
        return WORDS.filter(function(word, index, words) {
                      // First remove duplicates.
                      return words.indexOf(word) === index;
                    })
                    .filter(function(word) {
                      // Now find matching words.
                      return word.indexOf(prefix) === 0;
                    })
                    .sort()
                    .slice(0, 10);
      }

      var trie = Trie();
      WORDS.forEach(function(word) {
        trie.addWord(word);
      });

      it("should return correct number of words", function() {
        assert.equal(10, trie.autocomplete("a").length);
        assert.equal(10, trie.autocomplete("ab").length);
      });

      it("should return correct words", function() {
        assert.deepEqual(correctAutocomplete("a"), trie.autocomplete("a"));
      });

      it("should return empty if prefix not present", function() {
        assert.deepEqual([], trie.autocomplete("aaaa"));
      });

      it("should return all results if less than 10 matches", function() {
        // only 4 words match the 'test' prefix
        var results = trie.autocomplete("test");
        assert.equal(4, results.length);
        assert.deepEqual(correctAutocomplete("test"), results);
      });

      it("should handle duplicates", function() {
        // 'about' is inserted twice in the trie
        assert.deepEqual(correctAutocomplete("abo"), trie.autocomplete("abo"));
      });

      it("should correctly contain prefix, if it's a word", function() {
        var results = trie.autocomplete("wonder");
        assert.include(results, "wonder");
        assert.include(results, "wonderful");
        assert.deepEqual(correctAutocomplete("wonder"), results);
      });
    });
  });

  describe("TrieNode", function() {
    describe("put", function() {
      var trieNode = TrieNode("");
      it("value should be null if no value was put", function() {
        assert.equal("", trieNode.key());
        assert.equal(null, trieNode.getNode("").value());
      });

      it("value should be present in the trie at correct key after put", function() {
        trieNode.put("about", 0);
        assert.equal("about", trieNode.getNode("about").value());
      });
    });

    describe("getWithPrefix", function() {
      var trieNode = TrieNode("");
      var n = 10;
      it("should return empty array if prefix not present", function() {
        trieNode.put("wonder", 0);
        assert.deepEqual(["wonder"], trieNode.getWithPrefix("wonder", n));
        assert.deepEqual([], trieNode.getWithPrefix("wonderf", n));
      });

      it("should return words that match prefix", function() {
        trieNode.put("wonder", 0);
        trieNode.put("wonderful", 0);
        var results = trieNode.getWithPrefix("wonder", n);
        assert.equal(2, results.length);
        assert.deepEqual(["wonder", "wonderful"], results );
      });

      it("should return limit the number of words", function() {
        trieNode.put("wonder", 0);
        trieNode.put("wonderful", 0);
        var results = trieNode.getWithPrefix("wonder", 1);
        assert.equal(1, results.length);
        assert.deepEqual(["wonder"], results );
      });
    });

    describe("nWords", function() {
      var trieNode = TrieNode("");
      WORDS.forEach(function(word) {
        trieNode.put(word, 0);
      });
      // remove duplicates from words array
      var wordsDedup = WORDS.filter(function(word, index, words) {
                      return words.indexOf(word) === index;
                    });

      it("should return correct number of words", function() {
        var n = 100;
        assert.equal(n, trieNode.nWords(n).length);
      });

      it("should return all words deduped if there are less than the requested number", function() {
        var n = 100000000;
        assert.equal(wordsDedup.length, trieNode.nWords(n).length);
      });

      it("should return words sorted", function() {
        var n = 100000000;
        assert.deepEqual(wordsDedup.sort(), trieNode.nWords(n));
      });
    });

    describe("getNode", function() {
      var trieNode = TrieNode();
      trieNode.put("something", 0);

      it("should return root node for empty prefix", function() {
        assert.deepEqual(trieNode, trieNode.getNode(""));
      });

      it("should return node with correct value and key", function() {
        assert.equal("g", trieNode.getNode("something").key());
        assert.equal("something", trieNode.getNode("something").value());
      });
    });
  });

  mocha.run();
})()