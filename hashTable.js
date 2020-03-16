// implement your hashTable data structure

var HashTable = function() {
  
  this._count = 0;
  this._limit = 8;
  this._storage = new Array(this._limit);
  for (let i = 0; i < this._storage.length; i++) {
    this._storage[i] = new Map();
  }
}


HashTable.prototype.insert = function(key, value) {
  var index = this.hashFunc (key, this._limit);
  this._storage[index].set(key, value);
};


HashTable.prototype.remove = function(key) {
  var index = this.hashFunc (key, this._limit);
  this._storage[index].delete(key)
};

HashTable.prototype.retrieve = function(key) {
  var index = this.hashFunc (key, this._limit);
  return this._storage[index].get(key);
};


HashTable.prototype.hashFunc = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};


HashTable.prototype.resize = function(newLimit) {
};


HashTable.prototype.retrieveAll = function() {
  return this._storage;
};
