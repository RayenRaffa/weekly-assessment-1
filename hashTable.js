// implement your hashTable data structure

var HashTable = function() {
  this._storage = [];
  this._count = 0;
  this._limit = 8;

}


HashTable.prototype.insert = function(key, value) {
  this._storage[hashFunc(key,this._limit)].push([key, value])
};


HashTable.prototype.remove = function(key) {

  for (var i = 0; i< this._storage[hashFunc(key,this._limit)]; i++){
    if (this._storage[hashFunc(key,this._limit)][0] === key){
      delete this._storage[hashFunc(key,this._limit)][0];
    }
  }
};



HashTable.prototype.retrieve = function(key) {
  if(this._storage[hashFunc(key,this._limit)]) {
    for(var i = 0; i < this._storage[hashFunc(key,this._limit)]; i++) {
      if (this._storage[hashFunc(key, this._limit)][0] === key) {
        return "your element is in the " + i + "element of " + this._storage[hashFunc(key, this._limit)] + " of the hashtable"
      }
    }
  }
  return "the element does not exist"

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
  var i = 0;
  for (var j = 0; j < this._storage.length; j++){
    if (this._storage[j]){
      i++
    }
  }
  if( (i*100)/this._limit >= 75){
    this._limit = this._limit * 2
    var newstorage = this._storage.flat();
    this._storage = [];
    for (var i = 0; i < newstorage.length;i++){
      this.insert(newstorage[i][0],newstorage[i][1] )
    }

  }
  else if( (i*100)/this._limit <= 25){
    this._limit = this._limit / 2
    var newstorage = this._storage.flat();
    this._storage = [];
    for (var i = 0; i < newstorage.length; i++){
      this.insert(newstorage[i][0],newstorage[i][1] )
    }

  }

};


HashTable.prototype.retrieveAll = function() {
  return this._storage;
};
