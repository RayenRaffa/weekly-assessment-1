// implement your hashTable data structure

var HashTable = function() {
  this._storage = [];
  this._count = 0;
  this._limit = 8;
}


HashTable.prototype.insert = function(key, value) {
  var index = hashFunc(key,this._limit);
  if(this._storage[index].length === 0) {
    this._storage[index].push([key, value]);
    this._count++;
  }
  else {
    for(var i = 0; i < this._storage[index].length; i++) {
      if(this._storage[index][i][0] === key) {
        this._storage[index][i][1] = value;
        this._count++;
      }
    }
  }
};


HashTable.prototype.remove = function(key) {
  var index = hashFunc(key,this._limit);
  
     if (this._storage[index].length === 1) {
        if (this._storage[index][0] === key) {
          for (var i = index; i < this._storage.length; i++) {
            this._storage[i] = this._storage[i + 1]; 
          }
          this._count--;
        }
      }
      else {
        for(var i = 0; i < this._storage[index].length; i++) {
          if (this._storage[index][i][0] === key) {
            for (var j = i; j < this._storage[index][i].length; j++) {
              this._storage[index][i][j] = this._storage[index][i][j + 1]; 
            }
            this._count--;
          }
        }
      }       
};



HashTable.prototype.retrieve = function(key) {
  var index = hashFunc(key,this._limit);

  for (var i = 0; i < this._storage[index].length; i++) {
    if(this._storage[index][i][0] === key) {
      return this._storage[index][i][1];
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
  if (this._count === (75 * this._limit)/100) {
    this._limit = this._limit * 2;
  }
  else if (this._count === (25 * this._limit)/100) {
    this._limit = this._limit / 2;
  }
};


HashTable.prototype.retrieveAll = function() {
  return this._storage;
};
