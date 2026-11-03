import { linkedList } from "./linkedList.js";

class hashmap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.arr = [];
    this.pairs = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i))%this.capacity;
    }

    return hashCode;
  }

  set(key, value){
    const bucket = this.hash(key);

    if (this.arr[bucket] === undefined) this.arr[bucket] = new linkedList;

    this.arr[bucket].append(key, value);
    this.pairs++;

    // to do:
    // add growth logic when pair count exceeds loadFactor*capacity
  }
}
