'use strict'

// 541. Reverse String II
// const reverseString = (s, k) => {
// let start = 0;
//   let answer = '';
//   while (start < s.length) {
//       let next = start + (2 * k);
//       add and skip both
//       answer += [...s.substr(start, k)].reverse().join('') + s.substr(start + k, k);
//       start = next;
//   }
//   return answer;


// }
// const isreverseString = reverseString('abcdefg', 2)
// console.log(isreverseString)


// 168. Excel Sheet Column Title
// const ExcelSheetColumnTitle = (columnNumber) => {
//   const hashMap = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26 }
//   let char = '', 
//   for (const key in hashMap) {

//     // if (hashMap[key] === columnNumber) char += key
//     // if()    
//   }
//   return char
// }
// const isExcelSheetColumnTitle = ExcelSheetColumnTitle(26)
// console.log(isExcelSheetColumnTitle)


/* 
 "Guys can you optimize it" 
  This question like paildrom but in this case you have to compare with two string instead of one.
  paildrom example: "aba" a equal to last a and b is equal to itself
  Magicaldrome example: "aabbaa" aa equal to last aa and bb is equal to itself  
*/
// const isMagicaldrome = (str, skip) => {
//   let start = 0, end = str.length - 1, increment = 1
//   for (let i = 0; i < str.length / 2; i++) {
//     if(str.substring(start, start + 2) !== str.substring((end - 1) - start, (end + 1) - (i * skip))) return false
//     start = (increment * skip)
//     increment++
//   }
//   return true
// }
// const isisMagicaldrome = isMagicaldrome('aabbaa', 2)
// console.log(isisMagicaldrome)


// 367. Valid Perfect Square
// solved by binary search
// const PerfectSquare = function (num) {
//   let start = 1, end = num / 2, mid
//   if (num === 1) return true
//   while (start <= end) {
//     mid = Math.floor(start + (end - start) / 2)
//     if (mid === num / mid && num % mid === 0) return true
//     else if (mid < num / mid) {
//       start = mid + 1
//     } else end = mid - 1
//   }
//   return false
// };
// const isPerfectSquare = PerfectSquare(14)
// console.log(isPerfectSquare)


// 383. Ransom Note
// stack and queue
// const canConstruct = function (ransomNote, magazine) {
//   const map = {}
//   for (const key in magazine) {
//     map[magazine[key]] ? map[magazine[key]] += 1 : map[magazine[key]] = 1
//   }
//   for (const key in ransomNote) {
//     if (!map[ransomNote[key]]) {
//       return false
//     } else if (map[ransomNote[key]]) {
//       map[ransomNote[key]] -= 1
//     }
//   }
//   return true
// };
// const iscanConstruct = canConstruct('aa', 'baa')
// console.log(iscanConstruct)

// 387. First Unique Character in a String
// const firstUniqChar = function (s) {
//   const map = {}
//   for (const key in s) {
//     map[s[key]] ? map[s[key]] += 1 : map[s[key]] = 1
//   }
//   for (const key in map) {
//     if (map[key] === 1) return s.indexOf(key)
//   }
//   return -1
// };
// const isfirstUniqChar = firstUniqChar("aabb")
// console.log(isfirstUniqChar)


// 389. Find the Difference
// const findTheDifference = function (s, t) {
//   const n = s.length
//   let c = t.charCodeAt(n)
//   console.log(c)
//   for (let i = 0; i < n; i++) {
//     c ^= s.charCodeAt(i)
//     c ^= t.charCodeAt(i)
//   };
//   return String.fromCharCode(c)
// }
// const isfindTheDifference = findTheDifference("abcd", 'abcde')
// console.log(isfindTheDifference)



// 392. Is Subsequence
// const isSubsequence = function (s, t) {
//   if(s === "") return true
//   let p1 = 0
//   for (let i = 0; i < t.length; i++) {    
//     if (t.charAt(i) === s.charAt(p1)) p1++;
//     if(p1>=s.length) return true
//   }
//   return false
// }
// const isisSubsequence = isSubsequence("", 'ahbgdc')
// console.log(isisSubsequence)



// 409. Longest Palindrome
const longestPalindrome = function (s) {
  const hashMap = {};  
  let count = 0
  for (const key in s) {
    hashMap[s[key]] ? hashMap[s[key]] += 1 : hashMap[s[key]] = 1
  }
  for (const key in hashMap) {
    if(hashMap[key] > 1)count += hashMap[key]
  }
  console.log(hashMap)
  return count
}
const islongestPalindrome = longestPalindrome('aee')
console.log(islongestPalindrome)