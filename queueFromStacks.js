////////////////////////////////////////////////////////////
// This is an implementation of a Stack using ECMAScript 6
////////////////////////////////////////////////////////////
class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

////////////////////////////////////////////////////////////
// Implement a Queue using Stacks using EcmaScript 6 Syntax
////////////////////////////////////////////////////////////

class Queue {
  constructor() {
    this.storage=[];
    size=0;
  }
  queue (value) {
    this.storage.unshift(value);
    size++;
  }
  enqueue () {
    size--;
    return this.storage.shift()
    
  }
  remove (target) {
    if(this.storage[size] === target) {
      delete this.storage[size];
      size--;
      return this.storage;
    }
    return 'target not exist'
  }

}
