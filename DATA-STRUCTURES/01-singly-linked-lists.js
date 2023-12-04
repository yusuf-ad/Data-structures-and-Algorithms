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
    } else {
      this.tail.next = node;
      this.tail = node;
    }

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

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) return Boolean(this.push(value));
    if (index === 0) return !!this.unshift(value);

    const newNode = new Node(value);

    const curNode = this.get(index);

    this.get(index - 1).next = newNode;
    newNode.next = curNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length || !index) return undefined;

    if (index === 0) return this.shift().value;
    if (index === this.length - 1) return this.pop().value;

    const prevNode = this.get(index - 1);
    const delNode = this.get(index);

    prevNode.next = delNode.next;

    this.length--;

    return delNode.value;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    console.log(this);

    let before = null;
    let after = temp.next;

    for (let i = 0; i < this.length; i++) {
      after = temp.next;
      temp.next = before;
      before = temp;
      temp = after;
    }
  }

  get(index) {
    // edge case
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, value) {
    // edge case
    if (!this.get(index)) return false;

    this.get(index).value = value;

    return true;
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

// console.log(list1.push("11"));
// console.log(list1.push("12"));

list1.push(1);
// list1.push(2);
// list1.push(3);
// list1.push(4);

// list1.remove(2);

// list1.insert(0, 49);
// list1.insert(3, 29);
// list1.traverse();
// list1.reverse();
// list1.traverse();
console.log(list1);

// // console.log(list1.shift());
// // console.log(list1);

// list1.unshift("hi");

// console.log(list2.unshift("hello"));
// console.log(list2.unshift("hello"));

// console.log(list1);

// console.log(list1.get(0));

// console.log(list1.set(1, "ali"));
// console.log(list1.get(0));

// console.log(list1.get(1));
// console.log(list1.get(2));
// console.log(list1.get(3));
