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
    let s = new Stack()
    this.data = s;
  }
  removeHead() {
    this.data.data.pop(0,1);
  }
  addTail(value) {
    this.data.data.push(value);
  }
  removeTail() {
    this.data.data.splice(this.data.length-2,1);
  }
  addHead(value) {
    this.data.data.unshift(value);
  }
  getSize() {
    return this.data.data.length;
  }
}
