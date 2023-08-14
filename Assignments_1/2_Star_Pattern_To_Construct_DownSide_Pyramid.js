// 2. To construct upside down pyramid

let n = 5;
let count = 9;
for (let i = 0; i < 5; i++) { 
  let star_pattern = "";
  let print_spaces = " ".repeat(i);
  for (let j = 0; j < count; j++) {
    star_pattern += "*";
  }
  console.log(print_spaces + star_pattern);
  count -= 2;
}