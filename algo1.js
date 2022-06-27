
'use strict'


// find paildrom number
// const isPaildromNumber = (num) => {
//     const numStr = num.toString()
//     for (let i = 0; i < numStr.length / 2; i++) {
//         if(numStr.at(i) !== numStr.at(- (1 + i))){
//             return false
//         }
//     }
//     return true
//   }
//   const isPaildrom = isPaildromNumber(1111)
//   console.log(isPaildrom)



//  find missing number in given range
// const isRangeNumber = () => {
//   const arrOfNum = [9, 6, 4, 2, 3, 5, 7, 0, 1];
//   let total = 0;
//   const expected = (arrOfNum.length * (arrOfNum.length + 1) / 2)
//   for (const num of arrOfNum) {
//     total += num
//   }
//   return expected - total
// }
// const isRange = isRangeNumber()
// console.log(isRange)




// ex: 1
// const bubbleSort = () => {
//   const arrOfNum = [9, 6, 4, 2, 3, 5, 7, 0, 1];
//   for (let i = 0; i < arrOfNum.length; i++) {
//     for (let j = i + 1; j < arrOfNum.length; j++) {
//       if (arrOfNum[i] > arrOfNum[j]) {
//         const temp = arrOfNum[i]
//         arrOfNum[i] = arrOfNum[j]
//         arrOfNum[j] = temp
//       }
//     }
//   }
//   return arrOfNum
// }
// const isSort = bubbleSort()
// console.log(isSort)




// ex: 2
// const bubbleSort = () => {
//   const arrOfNum = [6, 4, 2, 3, 9, 5, 7, 0, 1];
//   for (let i = arrOfNum.length; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (arrOfNum[j] > arrOfNum[j + 1]) {
//         [arrOfNum[j], arrOfNum[j + 1]] = [arrOfNum[j + 1], arrOfNum[j]]
//       }
//     }
//   }
//   return arrOfNum
// }
// const isSort = bubbleSort()
// console.log(isSort)




// ex: 1
// find longest charecter
// const findLongestCharacter = (strs) => {

//   const arrOfStr = strs.toString().replaceAll(',', '').split("")
//   const map = {}
//   let max = 1
//   let char = '';

//   for (let i = 0; i < arrOfStr.length; i++) {
//     debugger
//     map[arrOfStr[i]] ? map[arrOfStr[i]] += 1 : map[arrOfStr[i]] = 1
//   }

//   for (let k in map) {
//     if (map[k] > max) {
//       max = map[k]
//       char = k
//     } else if (map[k] === max) {
//       max = map[k]
//       char += k
//     }
//   }
//   return char
// }
// const isLongestCharacter = findLongestCharacter(["dod"])
// console.log(isLongestCharacter)



// ex: 2
// const findLongestPrefix = (strs) => {
//   if(!strs[0]) return ""
//   for (let i = 0; i < strs[0].length; i++) {
//     for (let j = 1; j < strs.length; j++) {
//       if(strs[0][i] !== strs[j][i]){
//         return strs[0].slice(0, i)
//       }
//     }
//   }
//   return strs[0]
// }
// const isLongestPrefix = findLongestPrefix(["a"])
// console.log(isLongestPrefix)



// valid paranthesis
// const validParentheses = (strs) => {
//   const newArray = []
//   for (let i = 0; i < strs.length; i++) {
//       newArray.push(strs[i])
//     const len = newArray.length === 1 ? newArray.length - 1 : newArray.length - 2
//     if (newArray[len] === '(' && strs[i] === ')' || newArray[len] === '[' && strs[i] === ']' || newArray[len] === '{' && strs[i] === '}') {
//       newArray.pop(strs[i])
//       newArray.pop(newArray[len])
//     }
//   }
//   if (newArray.length === 0) return true
//   return false
// }
// const isValidParentheses = validParentheses('((()))[]{}')
// console.log(isValidParentheses)



// Remove Duplicates from Sorted Array
// const removeDuplicatesShortedArrary = (nums) => {
//     for (let i = nums.length - 1; i > 0; i--) {
//         if (nums[i] === nums[i - 1]) {
//             nums.splice([i], 1)
//         }
//     }
//     return nums
// }
// const isRemoveShortedArrary = removeDuplicatesShortedArrary([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
// console.log(isRemoveShortedArrary)



// Remove Element which match by given value
// const removeEle = (nums, val) => {
//     for (let i = nums.length - 1; i >= 0; i--) {
//         if (nums[i] === val) {
//             nums.splice([i], 1)
//         }
//     }
//     return nums
// }
// const isremoveEle = removeEle([0,1,2,2,3,0,4,2], 2)
// console.log(isremoveEle)



// ex : 1
// const implementStrStr = (haystack, needle) => {
//     if (needle.length === 0 || haystack === needle) return 0
//     for (let i = 0; i < haystack.length; i++) {
//         let k = i
//         let j = 0
//         while (haystack[k] === needle[j]) {
//             k++
//             j++
//         }
//         if (needle.length === j) return i
//     }
//     return -1
// }
// const isImplementStrStr = implementStrStr('aabba', 'bba')
// console.log(isImplementStrStr)

// ex : 2
// const implementStrStr = (haystack, needle) => {
//     if (needle.length === 0 || haystack === needle) return 0
//     for (let i = 0; i <= haystack.length; i++) {
//         if(needle === haystack.substring(i, i + needle.length)) return i
//     }
//     return -1
// }
// const isImplementStrStr = implementStrStr('hello', 'll')
// console.log(isImplementStrStr)



// Search Insert Position
// const searchInsertPosition = (nums, target) => {
//     for (let i = 0; i <= nums.length; i++) {
//         if(nums[i] >= target) return i
//         if(i === nums.length) return i
//     }
// }
// const isSearchInsertPosition = searchInsertPosition([1,3,5,6], 7)
// console.log(isSearchInsertPosition)



// Length of Last Word
// ex: 1
// const lastWordLength = (s) => {
//     return s.trim().split(" ").at(-1).length
// }
// const isLastWordLength = lastWordLength('luffy is still joyboy')
// console.log(isLastWordLength)



// ex: 2
// const lastWordLength = (s) => {
//     let k = 0
//     if(!s) return k
//     for (let i = s.length - 1; i >= 0; i--) {
//         if(s[i] !== " ") k++
//         if(s[i] === " " && k > 0) return k
//     }
//     return k
// }
// const isLastWordLength = lastWordLength('   fly me   to   the moon  ')
// console.log(isLastWordLength)



// Plus One
// const plusOne = (digits) => {
//     if (digits.length < 0) return 0
//     let reminder
//     for (let i = digits.length; i >= 0; i--) {
//         if (digits[i - 1] === 9) {
//             digits[i - 1] = 0
//             reminder = 1
//         } else if (reminder !== 0 && i === 0) {
//             digits[i] = reminder;
//             digits[digits.length] = 0
//            // digits[i - 1] = digits[i - 1] + reminder
//         } else{
//             digits[i - 1] = digits[i - 1] + 1
//             return digits
//         }
//     }
//     return digits
// }
// const isPlusOne = plusOne([9, 8, 9])
// console.log(isPlusOne)



// const mergeTwoSortedArray = (nums1, m, nums2, n) => {
//     let last = m + n - 1
//     for (let i = m + n; i > 0; i--) {
//         debugger
//         if(nums1[last] < nums2[n - 1]){
//             nums1[i - 1] = nums2[n - 1]
//             n -= 1
//             last -=1
//         }else if(nums1[last] > nums2[last]){
//             nums1[i - 1] = nums1[last]
//         }
//     }
//     return nums1
// }
// const ismergeTwoSortedArray = mergeTwoSortedArray([1,2,3,0,0,0], 3, [2,5,6], 3)
// console.log(ismergeTwoSortedArray)



// example : 1
// valid palindromeString
// const palindromeString = (s) => {
//     const regex = /^[A-Za-z0-9]+$/
//     let acc = ''
//     for (let i = 0; i < s.length; i++) {
//         if (s[i].match(regex)) {
//             acc += s[i]
//         }
//     }
//     for (let j = 0; j < acc.length / 2; j++) {
//         if (acc[j].toLowerCase() != acc[acc.length - (j + 1)].toLowerCase()) {
//             return false
//         }
//     }
//     return true
// }
// const isPalindromeString = palindromeString('A man, a plan, a canal: Panama')
// console.log(isPalindromeString)



// example : 2
// const palindromeString = (s) => {
//     const str  = s.replace(/[\W_]+/g,"").toLowerCase()
//     for (let j = 0; j < str.length / 2; j++) {
//         if (str[j] != str[str.length - (j + 1)]) {
//             return false
//         }
//     }
//     return true
// }
// const isPalindromeString = palindromeString('A man, a plan, a canal: Panama')
// console.log(isPalindromeString)



// find single in array
// const singleNumber = (nums) => {
//   let map = {}
//   for (let i = 0; i < nums.length; i++) {
//     map[nums[i]] ? delete map[nums[i]] : map[nums[i]] = 1
//   }
//   return Number(Object.keys(map))
// }
// const isSingleNumber = singleNumber([2,2,1])
// console.log(isSingleNumber)


//  power of some
// const powerOfsome = (s, t) => {
//   let mult = 2
//   let i
//   if(n === 1) return true
//   while (mult <= n) {
//     if (mult === n) return true
//     mult *= 2
//     i++
//   }
//   return false
// }
// const isPowerOfsome = powerOfsome(8)
// console.log(isPowerOfsome)



// anagram word
// const anagram = (s, t) => {
//   let map = {}
//   if (s.length !== t.length) return false
//   for (let i = 0; i < s.length; i++) {
//     if (!map[s[i]]) map[s[i]] = 0
//     if (!map[t[i]]) map[t[i]] = 0
//     map[s[i]]++
//     map[t[i]]--
//   }

//   for (let ch in map) {
//     if (map[ch] !== 0) return false
//   }
//   return true
// }
// const isAnagram = anagram('rat', 'car')
// console.log(isAnagram)



// add digits util return single number
// const addDigit = (num) => {
//   if(num === 0) return 0
//   if(num % 9 === 0) return 9
//   return num % 9
// }
// const isAddDigit = addDigit(38)
// console.log(isAddDigit)


// ugly number
// const uglyNumber = (n) => {
//   if (n === 0) return false
//   if (n === 1) return true
//   while (n !== 1) {
//     if (n % 2 === 0) n /= 2
//     else if (n % 3 === 0) n /= 3
//     else if (n % 5 === 0) n /= 5
//     else return false
//   }
//   return true
// }
// const isUglyNumber = uglyNumber(6)
// console.log(isUglyNumber)



// Missing Number in range
// const missingNumber = (nums) => {
//   const expected = (nums.length * (nums.length + 1) / 2)
//   const total = nums.reduce((acc, idx) => { return acc + idx })
//   return expected - total
// }
// const ismissingNumber = missingNumber([3, 0, 1])
// console.log(ismissingNumber)



// Move Zeroes
// const moveZeros = (nums) => {
//   let idx = 0
//   for (let i = 0; i < nums.length; i++) {
//     debugger
//     if(nums[idx] === 0) {
//       nums.push(0)
//       nums.splice(idx, 1)
//     }
//     else idx++
//   }
//   return nums
// }
// const ismoveZeros = moveZeros([0])
// console.log(ismoveZeros)



// Nim Game
// const nimGame = (n) => {
//   if(n % 4 === 0) return true
//   else return false
// }
// const isnimGame = nimGame(7)
// console.log(isnimGame)



// ex 1
// power of three
// const powerOfThree = (n) => {
//   let multi = 3
//   if(n === 1) return true
//   while(multi <= n){
//     if(n === multi) return true
//     multi *= 3
//   }
//   return false
// }
// const isPowerOfThree = powerOfThree(9)
// console.log(isPowerOfThree)



//  ex : 2
// const powerOfThree = (n) => {
//   return n > 0 && 1162261467 % n  === 0;
// }
// const isPowerOfThree = powerOfThree(3)
// console.log(isPowerOfThree)



// Reverse String
// const reverseString = (s) => {
//   for (let i = 0; i < s.length / 2; i++) {
//     [s[i], s[s.length - (i + 1)]] = [s[s.length - (i + 1)], s[i]] 
//   }
//  return s
// }
// const isreverseString = reverseString(["H","a","n","n","a","h"])
// console.log(isreverseString)



// Intersection of Two Arrays
// const intersectionofTwoArrays = (nums1, nums2) => {
//   let hashMap = {}
//   const maxLength = nums1.length > nums2.length ? nums1.length : nums2.length 
//   for (let i = 0; i < maxLength; i++) {
//     for (let j = 0; j < maxLength; j++) {
//       if (nums2[i] === nums1[j]) {
//         hashMap[nums2[i]] = nums2[i]
//       }
//     }
//   }
//   return Object.values(hashMap)
// }
// const isintersectionofTwoArrays = intersectionofTwoArrays([5,0,0,6,1,6,2,2,4], [4,7,9,7,6,7])
// console.log(isintersectionofTwoArrays)


// example: 2
// const intersectionofTwoArrays = (nums1, nums2) => {
//   const newArray = nums1.filter(num => nums2.includes(num))
//   return [... new Set(newArray)]
// }
// const isintersectionofTwoArrays = intersectionofTwoArrays([5, 0, 0, 6, 1, 6, 2, 2, 4], [4, 7, 9, 7, 6, 7])
// console.log(isintersectionofTwoArrays)



// return only name with last name kumar
// const LastName = (arr) => {
//   return arr.filter(name => name.split(' ')[1] === 'kumar').map(name => name.split(' ')[1])
// }
// const isLastName = LastName(['jay kumar', 'jatin kumar', 'varun choudhary'])
// console.log(isLastName)



// example 2 return only last name match with kumar
// const LastName = (arr) => {
//   const resutls = []
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i].split(" ")[1] === 'kumar') {
//       resutls.push(arr[i].split(" ")[1])
//     }
//   }
//   return resutls
// }
// const isLastName = LastName(['jay kumar', 'jatin kumar', 'varun choudhary'])
// console.log(isLastName)



// ex:1 Intersection of Two Arrays union
// const intersectionofTwoArrays = (nums1, nums2) => {
//   return nums1.filter(num => nums2.includes(num))
// }
// const isintersectionofTwoArrays = intersectionofTwoArrays([1,2,2,1], [2,2])
// console.log(isintersectionofTwoArrays)


// ex:2 Intersection of Two Arrays union (not solved)
// const intersectionofTwoArrays = (nums1, nums2) => {
//   let newArr = []
//   let i = 0
//   let p1 = 0
//   let min = nums1.length < nums2.length ? nums1 : nums2
//   let max = nums1.length > nums2.length ? nums1 : nums2
//   if(min.length === max.length) min = nums1, max = nums2
//   while (min.length !== 0 || newArr.length !== min.length) {
//     // debugger
//     if (max[i] === min[p1]) {
//       newArr.push(min[p1])
//       max.splice(i, 1)
//       min.splice(p1, 1)
//       i = 0
//     } else if (max.length == i) p1++, i =0
//     else i++
//   }
//   return newArr
// }
// const isintersectionofTwoArrays = intersectionofTwoArrays([1,1], [2,1])
// console.log(isintersectionofTwoArrays)