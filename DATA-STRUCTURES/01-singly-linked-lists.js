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
console.log(list1.push("13"));
console.log(list1.push("14"));

list1.traverse();

console.log(list1.pop());
console.log(list1.pop());
console.log(list1.pop());
console.log(list1.pop());
console.log(list1.pop());
console.log(list1);
