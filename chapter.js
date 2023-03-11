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
// const longestPalindrome = function (s) {
//   const hashMap = {};
//   let count = 0, odd = false
//   for (const key in s) {
//     hashMap[s[key]] ? hashMap[s[key]] += 1 : hashMap[s[key]] = 1
//   }
//   for (const key in hashMap) {
//     if (hashMap[key] % 2 === 0) count += hashMap[key]
//     else {
//       if (!odd) count += hashMap[key], odd = true
//       else count += (hashMap[key] - 1)
//     }
//   }
//   return count
// }
// const islongestPalindrome = longestPalindrome('aeeddd')
// console.log(islongestPalindrome)



// 414. Third Maximum Number
// const ThirdMaximumNumber = (nums) => {
//   let n, duplicate
//   if (nums.length === 1) return nums[0]
//   for (let i = 0; i < nums.length; i++) {
//     if (duplicate === nums[i] && i === (nums.length - 1)) return Math.max(...nums)
//     else if (duplicate === nums[i]) continue
//     duplicate = nums[i]
//     n = nums[i]
//   }
//   return n
// };
// const isThirdMaximumNumber = ThirdMaximumNumber([2,2,2,1])
// console.log(isThirdMaximumNumber)


// 434. Number of Segments in a String
// ex: 1
// const NumberofSegmentsinaString = (s) => {
//   let char = '', newArr = []
//   for (let i = 0; i < s.length; i++) {
//     if(s[i] !== ' ') char += s[i]
//     if ((s[i] === ' ' && char.length > 0) || (s.length - 1 === i && char.length > 0)) newArr.push(char), char = ""
//   }
//   return newArr.length
// };
// const isNumberofSegmentsinaString = NumberofSegmentsinaString('Hello, my name is John')
// console.log(isNumberofSegmentsinaString)


// ex: 2
// const NumberofSegmentsinaString = (s) => {
//   let count = 0
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== ' ') {
//       while (i < s.length && s[i] !== ' ') {
//         i++
//       }
//       count++
//     }
//   }
//   return count
// };
// const isNumberofSegmentsinaString = NumberofSegmentsinaString('')
// console.log(isNumberofSegmentsinaString)



/* 
  Note: can you optimize it 🤔 
  if got any duplicate object with same name then modify 
  the object which values are not present in both objects 
  then push it. 
  example: { name: 'jay' }, and { name: 'jay', address: '7 street', phone: '9865823' },
  is duplicate so new object will be { name: 'jay', address: '7 street', phone: '9865823' },
  address and phone are not present in the {name: 'jay'} object.
*/
// const arr = [
//   { name: 'jay' }, { name: 'ryan' },
//   { name: 'anna' }, { name: 'jay', address: '7 street', phone: '000-000-0000' },
// ]
// const newArr = []
// arr.forEach((data) => {
//   const obj = newArr.find(v => v.name === data.name)
//   const index = newArr.findIndex(v => v.name === data.name)
//   if (index >= 0) {
//     newArr[index] = { ...obj, ...data }
//   } else {
//     newArr.push(data)
//   }
// })
/*
output should be:
[
  { name: "jay", address: "7 street", phone: "000-000-0000"}, 
  {name: "ryan"}, {name: "anna"}
]
*/


// 448. Find All Numbers Disappeared in an Array
// https://www.youtube.com/watch?v=oEBHLcucDYg
// const findDisappearedNumbers = (nums) => {
//   const result = []

//   // mark the index position muti by -1 when you got the el in the array
//   for (let i = 0; i < nums.length; i++) {
//     const idx = Math.abs(nums[i]) - 1
//     if (nums[idx] < 0) continue
//     nums[idx] *= - 1
//   }

//   // if el is positive then push it (j + 1)
//   for (let j = 0; j < nums.length; j++) {
//     if (nums[j] > 0) result.push(j + 1)
//   }

//   return result
// };
// const isfindDisappearedNumbers = findDisappearedNumbers([1, 1])
// console.log(isfindDisappearedNumbers)




// 485. Max Consecutive Ones
// ex: 1
// const findMaxConsecutiveOnes = (nums) => {
//   let max = 0, count = 0
//   for (let i = 0; i <= nums.length; i++) {
//     if (nums[i]) count++
//     else if (max < count) max = count, count = 0
//     else count = 0
//   }
//   return max
// };
// const isfindMaxConsecutiveOnes = findMaxConsecutiveOnes([0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1])
// console.log(isfindMaxConsecutiveOnes)

// ex: 2
// const findMaxConsecutiveOnes = (nums) => {
//   let max = 0, count = 0
//   for (let i = 0; i <= nums.length; i++) {
//     if (nums[i]) {
//       count += 1
//       max = Math.max(max, count)
//     }
//     else count = 0
//   }
//   return max
// };
// const isfindMaxConsecutiveOnes = findMaxConsecutiveOnes([0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1])
// console.log(isfindMaxConsecutiveOnes)



// 496. Next Greater Element I
// ex: 1 brute force approach
// const nextGreaterElement = (nums1, nums2) => {
//   let result = [], select = false, nm = 0
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       if (nums1[i] === nums2[j]) select = true;
//       if (select) {
//         nm = nums1[i]
//         if (nm < nums2[j]) {
//           result.push(nums2[j])
//           select = false
//           break
//         }
//         else if(j === nums2.length - 1)  {
//           result.push(-1)
//           select = false
//         }
//       }
//     }
//   }
//   return result
// };
// const isnextGreaterElement = nextGreaterElement([2,4], [1,2,3,4])
// console.log(isnextGreaterElement)




// stack and queue
// https://www.youtube.com/watch?v=Du881K7Jtk8&t=718s
// const nextGreaterElement = (nums) => {

//   const newArr = [], stack = []
//   for (let i = nums.length - 1; i >= 0; i--) {

//     // if the stack is empty then loop run again
//     if (stack.length === 0) {
//       newArr.unshift(-1)
//       stack.unshift(nums[i])
//       continue
//     }

//     // if grater el present in stack then
//     if (stack[0] > nums[i]) {
//       newArr.unshift(stack[0])
//       stack.unshift(nums[i])
//       continue
//     }

//     // when smaller el in stack then ith
//     while (stack[0] <= nums[i] && stack.length !== 0) {
//       stack.shift()
//     }

//     if (stack.length === 0) newArr.unshift(-1)
//     else newArr.unshift(stack[0])
//     stack.unshift(nums[i])

//   }

//   return newArr
// };
// const isnextGreaterElement = nextGreaterElement([1, 3, 4, 1, 2])
// console.log(isnextGreaterElement)