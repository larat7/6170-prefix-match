var Trie = function(ch) {
  var that = Object.create(Trie.prototype);
  // the root of a Trie is a TrieNode with value equal to an empty string
  var node = TrieNode("");

  that.addWord = function(word) {
    node.put(word, 0);
  },

  that.autocomplete = function(prefix) {
    return node.getWithPrefix(prefix, 10);
  }

  Object.freeze(that);
  return that;
};