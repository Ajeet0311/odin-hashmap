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

  removeNode(key){
    let prevNode = null;
    let curNode = this.head;

    while(curNode !== null){
        if (curNode.key === key){
            if (prevNode === null) this.head = curNode.nextNode;
            else prevNode.nextNode = curNode.nextNode;

            return true;
        }
        prevNode = curNode;
        curNode = curNode.nextNode;
    }

    return false;
  }
}
