var Trie = function() {
  // This is an awful way to create an object!
  // You should use the Object.create + Object.freeze technique we described in class.
  return {
    "addWord": function(word) {
      // This is a bad implementation, so we're going to do nothing in this function.
    },

    "autocomplete": function(prefix) {
      // This is a terrible O(n^2) (n = dictionary length)
      // algorithm that runs every time a letter is typed.
      return WORDS
        .filter(function(word, index, words) {
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
  }
};