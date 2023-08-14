// 3. How to find out if the given two strings are anagrams or not?

let string_1 = "care";
let string_2 = "acer";
let hashMap = {};

for (let i = 0; i < string_1.length; i++) {
  let character = string_1[i];
  if (hashMap[character]) {
    hashMap[character] += 1;
  } else {
    hashMap[character] = 1;
  }
}

for (let i = 0; i < string_2.length; i++) {
  let character = string_2[i];
  if (hashMap[character]) {
    hashMap[character] -= 1;
    if (hashMap[character] === 0) {
      delete hashMap[character];
    }
  } else {
    console.log("The strings are not anagrams.");
    break;
  }
}

if (Object.keys(hashMap).length === 0) {
  console.log("The strings are anagrams.");
}