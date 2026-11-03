import { LinkedList } from "./linkedList.js";

export class HashMap {
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
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const bucket = this.hash(key);

    if (this.arr[bucket] === undefined) this.arr[bucket] = new LinkedList();

    if (this.has(key)) {
      this.arr[bucket].change(key, value);
    } else {
      this.arr[bucket].append(key, value);
      this.pairs++;
    }

    // to do:
    // add growth logic when pair count exceeds loadFactor*capacity
    if (this.pairs > Math.floor(this.loadFactor * this.capacity)) {
      this.resize();
    }
  }

  get(key) {
    const bucket = this.hash(key);

    if (this.arr[bucket] === undefined) return undefined;

    return this.arr[bucket].getValue(key);
  }

  has(key) {
    if (this.get(key) === undefined) return false;
    else return true;
  }

  remove(key) {
    const bucket = this.hash(key);

    if (this.arr[bucket] === undefined) return false;

    if (this.arr[bucket].removeNode(key)) {
      this.pairs--;
      return true;
    } else return false;
  }

  length() {
    return this.pairs;
  }

  clear() {
    this.arr = [];
    this.pairs = 0;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.capacity; i++) {
      if (this.arr[i] !== undefined) {
        keys.push(...this.arr[i].getKeys());
      }
    }

    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.capacity; i++) {
      if (this.arr[i] !== undefined) {
        values.push(...this.arr[i].getValues());
      }
    }

    return values;
  }

  entries() {
    let entries = [];
    for (let i = 0; i < this.capacity; i++) {
      if (this.arr[i] !== undefined) {
        entries.push(...this.arr[i].getEntries());
      }
    }

    return entries;
  }

  resize() {
    const oldArr = this.entries();

    this.clear();
    this.capacity *= 2;

    // reallocate every mapping new buckets
    for (let i = 0; i < oldArr.length; i++) {
      this.set(oldArr[i][0], oldArr[i][1]);
    }
  }
}
