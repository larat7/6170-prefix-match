(function() {
  mocha.setup("bdd");
  var assert = chai.assert;

  describe("Trie", function() {
    describe("autocomplete", function() {
      it("should do X", function() {
        assert.equal(2, 2);
      });

      it("should do Y", function() {
        assert.equal(3, 1 + 2);
      });
    });
  });

  mocha.run();
})()

// initialization
// test empty tree initialization
// test tree with char initialization
//
// addWord
// test adding empty word
// test adding single letter word
// test adding a non-existing word
// test adding an existing word
//
// subwords -> wonder wonderful
// duplicate words
