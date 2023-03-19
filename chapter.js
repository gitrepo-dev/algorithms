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



// 504. Base 7
// const convertToBase7 = function (num) {
//   let reminder = "", division = Math.abs(num), neg = false, ans
//   if (num < 0) neg = true
//   if (num === 0) return "0"
//   while (division) {
//     reminder += parseInt(division % 7)
//     division = parseInt(division / 7)
//   }
//   if (neg) return `-${reminder.split("").reverse().join("")}`
//   else return reminder.split("").reverse().join("")
// };
// const isconvertToBase7 = convertToBase7(100)
// console.log(isconvertToBase7)


// 506. Relative Ranks
// brute force approach
// const RelativeRanks = function (score) {
//   const hashMap = { 0: 'Gold Medal', 1: 'Silver Medal', 2: 'Bronze Medal' }
//   const result = new Array(score.length)
//   let copedArr = [...score]
//   for (let i = 0; i < score.length; i++) {
//     const max = Math.max(...copedArr)
//     const idx = score.indexOf(max)
//     result[idx] = hashMap[i] ? hashMap[i] : `${i + 1}`
//     copedArr = [...copedArr.filter(d => d !== max)]
//   }
//   return result
// };
// const isRelativeRanks = RelativeRanks([5, 4, 3, 2, 1])
// console.log(isRelativeRanks)

// remain to do
// const RelativeRanks = function (score) {
//   const hashMap = { 0: 'Gold Medal', 1: 'Silver Medal', 2: 'Bronze Medal' }
//   let rank = {}, result = []
//   const copedArr = [...score].sort((a, b) => a - b)
//   for (let i = 0; i < score.length; i++) {
//     rank[i] = hashMap[i] ? hashMap[i] : `${i + 1}`
//   }

//   for (const key in rank) {
//     result[key] = rank[key]
//   }
//   return result
// };
// const isRelativeRanks = RelativeRanks([5, 4, 3, 2, 1])
// console.log(isRelativeRanks)


// 520. Detect Capital
// also a solution // (word==word.upper() or word==word.lower())or(word[1:].lower()==word[1:]))
// const detectCapitalUse = function (word) {
//   const hashMap = { A: 'A', B: 'B', C: 'C', D: 'D', E: 'E', F: 'F', G: 'G', H: 'H', I: 'I', J: 'J', K: 'K', L: 'L', M: 'M', N: 'N', O: 'O', P: 'P', Q: 'Q', R: 'R', S: 'S', T: 'T', U: 'U', V: 'V', W: 'W', X: 'X', Y: 'Y', Z: 'Z' }
//   let charCount = 0, char = ''
//   if (word.length === 0) return true
//   for (const i of word) {
//     if (hashMap[i]) charCount++, char = i
//   }
//   if (charCount === word.length) return true
//   if (charCount === 1 && word[0] === char) return true
//   if (charCount === 0) return true
//   return false
// };
// const isdetectCapitalUse = detectCapitalUse('usA')
// console.log(isdetectCapitalUse)



// 557. Reverse Words in a String III
// const ReverseWordsinaStringIII = (s) => {
//   const newArr = s.split(" ")
//   let word = ""
//   for (let i = 0; i < newArr.length; i++) {
//     let str = newArr[i].split('')
//     for (let j = 0; j < str.length / 2; j++) {
//       [str[j], str[str.length - (1 + j)]] = [str[str.length - (1 + j)], str[j]]
//     }
//     if (newArr.length > 1 && (newArr.length - 1) !== i) str.push(' ')
//     console.log(str)
//     word += str.join(' ')
//   }
//   return word
// };
// const isReverseWordsinaStringIII = ReverseWordsinaStringIII("vector<string>")
// console.log(isReverseWordsinaStringIII)

// function reverseString(s){
//   let arr = s.split('');
//   let length = ~~(arr.length/2);
//   for(let i = 0; i< length; i++){
//       [arr[i],arr[s.length-1-i]] = [arr[arr.length-1-i],arr[i]];
//   }
//   return arr.join('');
// }
// var reverseWords = function(s) {
//   let arr = s.split(' ');
//   for(let i = 0; i<arr.length; i++){
//       arr[i] = reverseString(arr[i]);
//   }
//   return arr.join(' ')
// };


// 561. Array Partition
// const ArrayPartition = (nums) => {
//   let i = 0
//   for (let i = 0; i < nums.length; i++) {
//     while (i !== 2) {
//       nums[i]
//       i++
//     }
//   }

// };
// const isArrayPartition = ArrayPartition([1,4,3,2])
// console.log(isArrayPartition)




// console.log(0/4) // 0
// console.log(4/0) // infinite
// console.log(0%4) // 0
// console.log(4%0) // Nan

// 566. Reshape the Matrix
// const matrixReshape = (mat, r, c) => {
//   // If transformation doesn't occur, return mat...
//   if (mat.length * mat[0].length != r * c) {
//     return mat;
//   }
//   // Otherwise create a output matrix and fill the cells...
//   const output = new Array(r).fill(0).map(() => new Array(c).fill(0))
//   console.log(output)
//   // Traverse the matrix through the loop... 
//   for (let idx = 0; idx < r * c; idx++) {
//     console.log(Math.floor(idx / c), (idx % c), 'output =>', output[Math.floor(idx / c)][idx % c])
//     console.log(Math.floor(idx / mat[0].length), (idx % mat[0].length), 'mat =>', mat[Math.floor(idx / mat[0].length)][idx % mat[0].length])
//     output[Math.floor(idx / c)][idx % c] = mat[Math.floor(idx / mat[0].length)][idx % mat[0].length];
//   }
//   return output;      // Return the output matrix...
// };
// const ismatrixReshape = matrixReshape([[1, 2], [3, 4]], 2, 2)
// console.log(ismatrixReshape)

// const arr = [[1, 2, 3, 4]]
// console.log(arr[0][0])
// console.log(arr[0][1])
// console.log(arr[0][2])
// console.log(arr[0][3])



// 507. Perfect Number
// https://www.youtube.com/watch?v=tznrea_Skqg&t=1393s
// use 25 to test false and nested if conndition
// const checkPerfectNumber = function (num) {
//   let add = 0
//   for (let i = 0; i < Math.sqrt(num); i++) {
//     // debugger
//     if (num % i === 0) {
//       add += i
//       // additing constant also
//       if (i * i !== num) add += num / i      
//     }
//   }
//   return add - num === num
// };
// const ischeckPerfectNumber = checkPerfectNumber(28)
// console.log(ischeckPerfectNumber)





// 575. Distribute Candies
// also can solve by the hash map
// const distributeCandies = function (candyType) {
//   let candiesType = 0, jar = []
//   for (let i = 0; i < candyType.length; i++) {
//     let present = jar.find(c => c === candyType[i])
//     if (present === undefined) {
//       candiesType++;
//       jar.push(candyType[i])
//     }
//   }
//   if (candiesType < candyType.length / 2) return candiesType
//   else return candyType.length / 2
// };
// const isdistributeCandies = distributeCandies([100000,0,100000,0,100000,0,100000,0,100000,0,100000,0])
// console.log(isdistributeCandies)




// 594. Longest Harmonious Subsequence
// const findLHS = function (candyType) {
//   return true
// };
// const isfindLHS = findLHS([1, 3, 2, 2, 5, 2, 3, 7])
// console.log(isfindLHS)


// matrix
// const matrix = function (r1, c1, r2, c2, eleTofill) {

//   /* 
//     if col of A is equal to row of B then can be a new matrix 
//     new matrix params will be row of A and column of B (r1*c2)

//     example => [[1,2], [3,4], [5,6]] in this example number of A el in a any of array is col [1,2], or [3,4] so on
//     so col are only 2 because in array there are only two ele.
//     and row will be count of array so there are 3 array [1,2], [3,4], [5,6]

//     rule of filling el in matrix col wise first fill the first all col of first row and so on.
//   */


//   // mat A (r1 * c1)
//   const mat1 = new Array(r1).fill(0).map(() => new Array(c1).fill(0))
//   // mat B (r2 * c2)
//   const mat2 = new Array(r2).fill(0).map(() => new Array(c2).fill(0))
//   // new mat (r1 * c2)
//   const newMat = new Array(r1).fill(0).map(() => new Array(c2).fill(0))

//   // mathod 1
//   for (let i = 0; i < eleTofill.length; i++) {
//     for (let j = 0; j < eleTofill[0].length; j++) {
//       newMat[i][j] = eleTofill[i][j]
//     }
//   }

//   // method 2
//   const c = eleTofill[0].length
//   for (let i = 0; i < eleTofill.length * eleTofill[0].length; i++) {
//     newMat[Math.floor(i / c)][i % c] = eleTofill[Math.floor(i / c)][i % c]
//   }

//   return newMat

// };
// const ismatrix = matrix(4, 3, 3, 4, [[2, 4, 7, 1], [4, 6, 9, 3], [4, 8, 8, 6], [9, 2, 2, 8]])
// console.log(ismatrix)

