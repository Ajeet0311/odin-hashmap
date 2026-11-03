import { HashMap } from "./hashmap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test.get("apple")); // gives red

// overwriting
test.set("apple", "green");
console.log(test.get("apple")); // gives green

console.log(test.capacity);
for (let i = 0; i < 16; i++) {
  console.log(test.arr[i]);
}

test.set("moon", "silver"); // overloads the hashmap

console.log(test.capacity);
for (let i = 0; i < 32; i++) {
  console.log(test.arr[i]);
}
