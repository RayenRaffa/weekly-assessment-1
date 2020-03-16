/ implement your hashTable data structure

var HashTable = function() {
  this._storage = [];
  this._count = 0;
  this._limit = 8;
  for (let i = 0; i < this.storage.length; i++) {
    this.storage[i] = new Map();
  
}


HashTable.prototype.insert = function(key, value) {
  var index = hash(key, this._limit);
    this.storage[ this._count].set(key, value);
  
};


HashTable.prototype.remove = function(key) {
  var index = hash(key, this._limit);
    var temp = this.search(key);
    this.storage[ this._count].delete(key);
    return temp;
  
};



HashTable.prototype.retrieve = function(key) {
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

  
