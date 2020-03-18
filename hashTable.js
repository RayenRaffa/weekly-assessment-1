// implement your hashTable data structure

var HashTable = function() {
  this._storage = [];
  this._count = 0;
  this._limit = 8;
}


HashTable.prototype.insert = function(key, value) {
  var index  = this.hashFunc(key, this._limit);
  var tuple  = [key, value];
  var bucket = this._storage[index];
  var keyAlreadyExists = false;
  if (bucket) {
    for (var i=0; i<bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1]     = value;
        keyAlreadyExists = true;
        // element overridden, no need to increment _count
        // decrement _count to negate line 32 'this._count++;'
        this._count--;
      }
    }
    if (!keyAlreadyExists){
      bucket.push(tuple);
    }
  } else {
    bucket = [tuple];
  }
  this._storage[index] = bucket;
  this._count++;
  if (this._count/this._limit > 0.75) {
    this.resize(this._limit*2);
  }
};


HashTable.prototype.remove = function(key) { 
  var index  = this.hashFunc(key, this._limit);
  var bucket = this._storage[index];
  var removedValue = undefined;
  if(bucket) {
    for (var i=0; i<bucket.length; i++) {
      if (bucket[i][0] === key) {
        removedValue = bucket[i][1];
        bucket.splice(i,1);
        this._storage[index] = bucket;
        this._count--;
      }
    }
    if ((this._count/this._limit < 0.25) && (this._limit > 2)) {
      this.resize(Math.floor(this._limit/2));
    }
  }
  return removedValue;
};



HashTable.prototype.retrieve = function(key) { 
  var index  = this.hashFunc(key, this._limit);
  var bucket = this._storage[index];
  for (var i=0; i<bucket.length; i++) {
    if (bucket[i][0] === key) {
      return bucket[i][1];
    }
  }
  return undefined;
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
  var newHashTable = new HashTable();
  newHashTable._limit = newLimit;
  for (var i=0; i<this._limit; i++) {
    bucket = this._storage[i];
    if (bucket) {  
      for (var j=0; j<bucket.length; j++) {
        tuple = bucket[j];
        key   = tuple[0];
        value = tuple[1];
        newHashTable.insert(key,value);
      }
    }
  }
  this._limit   = newLimit;
  this._count   = newHashTable._count;
  this._storage = newHashTable._storage;
};


HashTable.prototype.retrieveAll = function() {
  return this._storage;
};