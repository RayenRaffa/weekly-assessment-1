// implement your hashTable data structure

var HashTable = function() {
  this._storage = [];
  this._count = 0;
  this._limit = 8;
}


HashTable.prototype.insert = function(key, value) {
  if(this._count <= this._limit) {
      this._storage.push[key]=value;
      this._count++
  }  
  return 'This storage reach the limit of 8'    
};


HashTable.prototype.remove = function(key) {
  delete this._storage[key];
};



HashTable.prototype.retrieve = function(key) {
  return this._sotrage[key];
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
  this._limit=newLimit;
};


HashTable.prototype.retrieveAll = function() {
  return this._storage;
};
