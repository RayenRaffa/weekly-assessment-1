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
  constructor () {
    this.data=[]
    this.tail=0;
    this.head=0;
    this.size=0
  }

  enqueue (value) {
    this.tail=value
    this.size++
    if (this.size>0) {
      var x=this.tail
      this.
    }
    
  }

  dequeue (value) {
    if (this.size >0) {
      

    }

  }



}
