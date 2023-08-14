// 5. How do you get the matching elements(repeated array value) in an integer array? Also, find the frequency of the repeated element?

let array = [2, 5, 6, 5, 4, 2, 1];
let hashMap = {};

array.forEach((value) => {
  if (hashMap[value]) {
    hashMap[value] += 1;
  } 
  else {
    hashMap[value] = 1;
  }
});

console.log(hashMap);