// 1. Determine if a string/number is a palindrome?

function To_Check_Palindrome(array) {
    let start = 0;
    let end = array.length - 1;
    let isPalindrome = true;
  
    while (start < end) {
      if (array[start] !== array[end]) {
        isPalindrome = false;
        break;
      }
      start++;
      end--;
    }
  
    if (isPalindrome) {
      console.log("Given input is Palindrome");
    } 
    else {
      console.log("Not a Palindrome");
    }
}
  
let array = ['g', 'a', 'd', 'e', 'g'];
To_Check_Palindrome(array);