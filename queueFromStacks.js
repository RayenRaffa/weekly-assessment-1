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
  constructor(){
    this.storage = {}
    this.rare = 0
    this.front = 0
// from stack to queue   
  }
  enqueue(value){
    this.storage[this.rare]=value;
    this.rare++;

  }
  dequeue(){
    var result = this.storage[this.front];
    if ( this.rare > this.front) {
     delete this.storage[this.front];
      this.front++;
      return result;
    }
      return -1;
  }
  size(){
    return this.rare-this.front ;
  }
  print(){
    return this.storage ;
  }

}
