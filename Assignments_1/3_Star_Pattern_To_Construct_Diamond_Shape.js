// 3. To construct Diamond Shape

/*

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
count = 7
for (let i = 1; i < 5; i++) { 
  let star_pattern = "";
  let print_spaces = " ".repeat(i);
  for (let j = 0; j < count; j++) {
    star_pattern += "*";
  }
  console.log(print_spaces + star_pattern);
  count -= 2;
}

*/


function ToPrint_Diamond_Shape(n) {
  if (n < 3 || n % 2 == 0) 
  {
      console.log("Printing Diamond Shape is not possible");
  }
  else
  {
      let count = 1;
      let spaces = Math.floor(n / 2);
      for (let i = 0; i < n; i++) 
      {
          let pattern = "*".repeat(count);
          console.log(" ".repeat(spaces) + pattern);
          if (i < Math.floor(n / 2)) 
          {
              count += 2;
              spaces -= 1;
          } 
          else 
          {
              count -= 2;
              spaces += 1;
          }
      }
  }
}

ToPrint_Diamond_Shape(5);