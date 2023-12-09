// You can use built-in array methods to create stack data structure but it's unefficent

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) return null;

    const deletedNode = this.first;

    if (this.size === 1) {
      this.first = null;
      this.head = null;
    } else {
      this.first = deletedNode.next;
    }

    this.size--;

    return deletedNode.value;
  }
}

const stack = new Stack();

stack.push(4);
stack.push(6);
stack.push(8);
stack.push(2);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
