Array.prototype.flatten = function() {
  return this.reduce(function(prev, next) { return prev.concat(next); }, []);
};