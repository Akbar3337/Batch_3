// 1. Generate * pattern to construct a pyramid

let n = 5;
let count = 1;
for (let i = 0; i < 5; i++) {
  let star_pattern = "";
  let print_spaces = " ".repeat(4 - i);
  for (let j = 0; j < count; j++) {
    star_pattern += "*";
  }
  console.log(print_spaces + star_pattern);
  count += 2;
}