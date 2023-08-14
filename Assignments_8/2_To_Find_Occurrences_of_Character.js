// 2. Find the number of occurrences of a character in a String?

let string = "karnataka";
let hashMap = {};

for (let i = 0; i < string.length; i++) {
  let character = string[i];
  if (hashMap[character]) {
    hashMap[character] += 1;
  } else {
    hashMap[character] = 1;
  }
}

console.log(hashMap);