class Node {
  constructor() {
    this.data = null;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(key, value) {
    const newNode = new Node();
    newNode.data = { key, value };

    if (this.tail === null) this.head = newNode;
    else this.tail.nextNode = newNode;

    this.tail = newNode;
  }

  getValue(key) {
    let curNode = this.head;

    while (curNode !== null) {
      if (curNode.data.key === key) return curNode.data.value;
      curNode = curNode.nextNode;
    }

    return undefined;
  }

  removeNode(key) {
    let prevNode = null;
    let curNode = this.head;

    while (curNode !== null) {
      if (curNode.data.key === key) {
        if (prevNode === null) this.head = curNode.nextNode;
        else prevNode.nextNode = curNode.nextNode;

        if (curNode === this.tail) this.tail = prevNode;

        return true;
      }
      prevNode = curNode;
      curNode = curNode.nextNode;
    }

    return false;
  }

  change(key, value) {
    let curNode = this.head;

    while (curNode !== null) {
      if (curNode.data.key === key) {
        curNode.data.value = value;
        return;
      }
      curNode = curNode.nextNode;
    }

    return;
  }

  getKeys() {
    let curNode = this.head;
    const keys = [];

    while (curNode !== null) {
      keys.push(curNode.data.key);
      curNode = curNode.nextNode;
    }

    return keys;
  }

  getValues() {
    let curNode = this.head;
    const values = [];

    while (curNode !== null) {
      values.push(curNode.data.value);
      curNode = curNode.nextNode;
    }

    return values;
  }

  getEntries() {
    let curNode = this.head;
    const entries = [];

    while (curNode !== null) {
      entries.push([curNode.data.key, curNode.data.value]);
      curNode = curNode.nextNode;
    }

    return entries;
  }
}
