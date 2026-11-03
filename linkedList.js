class Node {
  constructor() {
    this.data = null;
    this.nextNode = null;
  }
}

export class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(key, value){

    const newNode = new Node;
    newNode.data = {key, value};

    if (this.tail === null) this.head = newNode;
    else this.tail.nextNode = newNode;

    this.tail = newNode;
  }

  getValue(key){
    let curNode = this.head;

    while (curNode !== null){
        if (curNode.key === key) return curNode.value;
        curNode = curNode.nextNode;
    }

    return undefined;
  }
}
