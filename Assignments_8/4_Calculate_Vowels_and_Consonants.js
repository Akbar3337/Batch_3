// 4. How do you calculate the number of vowels and consonants in a String?

function Calculate_Vowels_Consonants(string) {
    let count_vowels = 0;
    let count_consonants = 0;
    for (let i = 0; i < string.length; i++) {
      if (
        string[i] === 'A' ||
        string[i] === 'E' ||
        string[i] === 'I' ||
        string[i] === 'O' ||
        string[i] === 'U' ||
        string[i] === 'a' ||
        string[i] === 'e' ||
        string[i] === 'i' ||
        string[i] === 'o' ||
        string[i] === 'u'
      ) {
        count_vowels += 1
      }
      else {
        count_consonants += 1
      }
    }
    return [count_vowels, count_consonants];
  }
  
let string = "Good Morning";
console.log(Calculate_Vowels_Consonants(string));