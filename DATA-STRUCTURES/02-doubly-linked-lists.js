class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
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
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const oldTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;

    return oldTail;
  }

  shift() {
    if (!this.length) return undefined;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.null = this.head;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.tail = newNode;
      this.head = this.tail;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    const middleIndex = Math.floor(this.length / 2);
    let counter;
    let current;

    if (index <= middleIndex) {
      counter = 0;
      current = this.head;

      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;

      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }

    return current;
  }

  set(index, value) {
    const node = this.get(index);

    if (node) {
      node.value = value;
    } else {
      return false;
    }

    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return Boolean(this.push(value));

    const newNode = new Node(value);

    const prevNode = this.get(index - 1);
    const nextNode = this.get(index);

    prevNode.next = newNode;
    newNode.prev = prevNode;

    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;

    return true;
  }

  traverse() {
    let curNode = this.head;
    while (curNode) {
      console.log(curNode.value);
      curNode = curNode.next;
    }
  }
}

const list1 = new DoublyLinkedList();

list1.push(4);
list1.push(6);
list1.push(8);

list1.set(1, 21);

// list1.push(2);
// console.log(list1);
// list1.shift();
// list1.shift();
// list1.shift();
// list1.shift();
// console.log(list1.pop());

// list1.unshift(4);
// list1.unshift(6);
// list1.unshift(8);
// list1.unshift(2);
// list1.shift();
list1.traverse();
console.log(list1);

console.log(list1.get(0));
