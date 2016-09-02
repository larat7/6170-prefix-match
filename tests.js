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
