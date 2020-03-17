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
    this.data = new Stack();
  }

  enqueue(value) {
    this.data.push(value);
  }

  dequeue() {
    var spareData = new Stack();
    while(this.data.peek()){
      spareData.push(this.data.pop());
    }
    let element = spareData.pop();
    while(spareData.peek()) {
      this.data.push(spareData.pop());
    }
    return element;
  }

}
