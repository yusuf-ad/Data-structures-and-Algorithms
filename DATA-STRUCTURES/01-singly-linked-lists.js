// each node has a value and reference

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    }

    this.tail.next = node;
    this.tail = node;

    this.length++;

    return this;
  }

  pop() {
    // edge case
    if (!this.head) return undefined;

    var current = this.head;
    var newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    const curHead = this.head;
    this.head = curHead.next;

    this.length--;

    if (this.length === 0) this.tail = null;

    return curHead.value;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index) {
    // edge case
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      console.log(counter, this.head.value);
      current = current.next;
      counter++;
    }

    return current;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list1 = new SinglyLinkedList();
const list2 = new SinglyLinkedList();

console.log(list1.push("11"));
console.log(list1.push("12"));

list1.traverse();

// console.log(list1.shift());
// console.log(list1);

list1.unshift("hi");

console.log(list2.unshift("hello"));
console.log(list2.unshift("hello"));

console.log(list1);

console.log(list1.get(1));
