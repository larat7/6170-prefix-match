var Trie = function(ch) {
  var that = Object.create(Trie.prototype);
  // array of children nodes.
  var children = [];
  // key used to represent this node. empty string for root node.
  var key = ch ? ch : "";
  // optional value stored in the node. value will only be present for words
  // that were added to the trie. null for root node.
  var value = null;

  that.key = function() {
    return key;
  }

  that.addWord = function(word, depth) {
    depth = depth || 0; // set depth to zero, if not passed in the args
    if (word.length == depth) { value = word; return; }
    var c = word[depth];
    // get child corresponding to character
    var child = children.filter(function(child) {
      return child.key() == c;
    }).pop();
    // if child does not exist, create it and add to children array
    if (!child) {
      child = Trie(c);
      children.push(child);
    }
    // add word to child
    child.addWord(word, depth+1);
  },

  that.autocomplete = function(prefix) {
    var node = that.getNode(prefix);
    if (!node) { return []; } // can't find prefix on the Trie
    return node.nWords(10);
  }

  // returns node associated with given key, null if key not present
  that.getNode = function(key) {
    if (key.length == 0) { return that; }
    var c = key[0];
    var child = children.filter(function(child) {
      return child.key() == c;
    }).pop();

    if (!child) { return null };

    return child.getNode(key.substring(1));
  }

  // returns the first n lexicographically sorted words in the tree
  // if tree has less than n words, returns all words sorted
  // that.allWords = function() {
  that.nWords = function(n) {
    var words = [];
    if (n < 1) { return words; } // base case
    if (value) { words.push(value); };

    return children.sort(function(child1, child2) {
              return +(child1.key() > child2.key()) || +(child1.key() === child2.key()) - 1;
          }).reduce(function(prev, child) {
              return prev.concat(child.nWords(n - prev.length));
            }, words);
  }

  that.allWords = function() {
    if (children.length == 0) { return [value] };
    return children.map(function(child) { return child.allWords(); }) // get words for children
                   .concat( value ? [value] : []  ) // get value for current node
                   .flatten(); // flatten array
  }

  Object.freeze(that);
  return that;
};