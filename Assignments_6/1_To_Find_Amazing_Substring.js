/* 

Q1. Amazing Subarrays

You are given a string S, and you have to find all the amazing substrings of S.
An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).

Input
Only argument given is string S.

Output
Return a single integer X mod 10003, here X is the number of Amazing Substrings in given the string.

Constraints
1 <= length(S) <= 10^6
S can have special characters 

Example
Input
    ABEC

Output
    6

Explanation
    Amazing substrings of given string are :
    1. A
    2. AB
    3. ABE
    4. ABEC
    5. E
    6. EC
    here number of substrings are 6 and 6 % 10003 = 6.

*/

function Amazing_Substrings(string) {
    let count_Substring = 0;
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
        count_Substring = (count_Substring + (string.length - i))
      }
    }
    return count_Substring;
}

let string = "AEBEC";

console.log(Amazing_Substrings(string));