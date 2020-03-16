// implement your hashTable data structure

var HashTable = function() {
  this._storage = [];
  this._count = 0;
  this._limit = 8;
  for(let i = 0; i <= this._limit; i++){
    this._storage[i] = [];
  }
}


HashTable.prototype.insert = function(key, value) {
  let index = this.hashFunc(key, this._limit)
  let toStore = [key, value]
  this._storage[index].push(toStore)
  this._count++;
};


HashTable.prototype.remove = function(key) {
  let toStore = [];
  let index = this.hashFunc(key, this._limit);
  for(let i = 0; i < this._storage[index].length; i++) {
    if(this._storage[index][i][0] === key) {
      this._storage[index][i] = toStore;
    }
  }
  this._count--;
};



HashTable.prototype.retrieve = function(key) {
  let index = this.hashFunc(key, this._limit);
  for(let i = 0; i < this._storage[index].length; i++) {
    if(this._storage[index][i][0] === key) {
      return this._storage[index][i];
    }
  }
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
  if(this._count < this._limit/4 && newLimit > this._count) {
    this._storage.splice(newLimit+1, this._storage.length-1)
  }else if(this._count > this._limit/4 * 3 && newLimit > this._count) {
    for(let i = this._limit+1; i <= newLimit; i++) {
      this._storage[i] = [];
    }
  }
};


HashTable.prototype.retrieveAll = function() {
  return this._storage;
};
