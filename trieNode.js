var TrieNode = function(ch) {
  var that = Object.create(TrieNode.prototype);
  // array of children nodes.
  var children = [];
  // key used to represent this node. empty string for root node.
  var key = ch;
  // optional value stored in the node. value will only be present for words
  // that were added to the trie. null for root node.
  var value = null;

  that.value = function() {
    return value;
  }

  that.key = function() {
    return key;
  }

  // inserts a word into the node
  that.put = function(word, depth) {
    if (word.length == depth) { value = word; return; }
    var c = word[depth];
    // get child corresponding to character
    var child = children.filter(function(child) {
      return child.key() == c;
    }).pop();
    // if child does not exist, create it and add to children array
    if (!child) {
      child = TrieNode(c);
      children.push(child);
      // resort children array
      children.sort(function(child1, child2) {
              return +(child1.key() > child2.key()) || +(child1.key() === child2.key()) - 1;
          });
    }
    // add word to child
    child.put(word, depth+1);
  },

  // gets n words under the node that match the prefix
  that.getWithPrefix = function(prefix, n) {
    var node = that.getNode(prefix);
    if (!node) { return []; } // can't find prefix on the Trie
    return node.nWords(n);
  }

  // returns node associated with given prefix, null if prefix not present
  that.getNode = function(prefix) {
    if (prefix.length == 0) { return that; }
    var c = prefix[0];
    var child = children.filter(function(child) {
      return child.key() == c;
    }).pop();

    if (!child) { return null };

    return child.getNode(prefix.substring(1));
  }

  // returns the first n lexicographically sorted words in the tree node
  // if tree has less than n words, returns all words sorted
  that.nWords = function(n) {
    var words = [];
    if (n < 1) { return words; } // base case
    if (value) { words.push(value); };

    // since the children array is sorted this will return results
    // in lexicographical order
    return children.reduce(function(prev, child) {
              return prev.concat(child.nWords(n - prev.length));
            }, words);
  }

  Object.freeze(that);
  return that;
};