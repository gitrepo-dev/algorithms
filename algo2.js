'use strict'



// ex:1 Median of Two Sorted Arrays this example is with extra space
// const MedianTwoSortedArrays = (nums1, nums2) => {
//   const newArray = [...nums1, ...nums2].sort(function (a, b) {  return a - b;  });
//   let median, totalElement = (nums1.length) + (nums2.length)

//   if(totalElement % 2 !== 0 && totalElement > 1) {  
//     median = newArray[Math.floor(totalElement / 2)]
//   }else if(totalElement % 2 === 0) {
//     median = (newArray[Math.floor(totalElement / 2) - 1] +  newArray[Math.floor(totalElement / 2)]) / 2
//   }else{
//     median = newArray[0]
//   }
//   return median
// }
// const isMedianTwoSortedArrays = MedianTwoSortedArrays([3], [1,2])
// console.log(isMedianTwoSortedArrays)


// Reverse Integer
// const reverseInteger = (x) => {
//  let ans = 0
//  while (x !== 0) {
//   let digits = x % 10
//   ans = (ans * 10) + digits
//   x = parseInt(x / 10)
//  }
//  if (ans < (Math.pow(2, 31) * -1) || ans > Math.pow(2, 31) - 1) return 0;
//  return ans
// }
// const isReverseInteger = reverseInteger(-123)
// console.log(isReverseInteger)


// String to Integer (atoi) not resolved cuz of lack of understating the question
// const StringtoInteger = (s) => {
//   let neg = false, ans = 0
//   for (let i = 0; i < s.length; i++) {
//     if(/[a-zA-Z]/.test(s[0]) || s[i] === '+' && s[i+1] === '-' || s[i] === '-' && s[i+1] === '+') return 0
//     if (s[i] === '.') return ans 
//     if ((s[i] * 1) || s[i] === '0')  ans = (ans * 10) + (s[i] * 1)
//     if (s[i] === '-') neg = true
//   }

//   if (neg && ans >= (Math.pow(2, 31))) return Math.pow(2, 31) * -1
//   if (!neg && ans >= Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1
//   if(neg) return ans * -1

//   return ans
// }
// const isStringtoInteger = StringtoInteger("12548")
// console.log(isStringtoInteger)



// 11. Container With Most Water
// const ContainerWithMostWater = (height) => {
//   let l = 0, r = height.length - 1, max = 0
//   while (l < r) {
//     const lh = height[l], rh = height[r]
//     const min_h = Math.min(lh, rh)
//     max = Math.max(max, min_h * (r - l))
//     if (lh < rh) l++
//     else r--
//   }
//   return max
// }
// const isContainerWithMostWater = ContainerWithMostWater([1,1])
// console.log(isContainerWithMostWater)


// ex:1 two some but not sutable cuz time complexity is height 0(n2)
// const twoSum = (nums) => {
//   const temp = []
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//      if(nums[i] + nums[j] === 0) {
//       temp.push(nums[i], nums[j])
//      }
//     }
//   }
//   return [...new Set(temp)]
// }
// const isTwoSum = twoSum([-1, 0, 1, 2, -1, -4])
// console.log(isTwoSum)


// ex: 2 with 0(n) but extra memory space
// const twoSum = (nums) => {
//   let first = 0, last = nums.length - 1, temp = [], newArray = nums.sort((a, b) => a - b)
//   for (let i = 0; i < newArray.length; i++) {
//     if (newArray[first] + newArray[last] === 7) {
//       temp.push(newArray[first], newArray[last])
//       first++
//       last--
//     } else if (newArray[first] + newArray[last] < 7) first++
//     else last--
//   }
//   return temp
// }
// const isTwoSum = twoSum([1, 2, 3, 4, 5])
// console.log(isTwoSum)




// Letter Combinations of a Phone Number
// const LetterCombinations = (digits) => {
//   const map = { 2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz' }
//   const temp = [];
//   if(digits.length === 0) return temp;
//   const recursion = (i, digits, slate) => {
//     // base condition
//     if (i === digits.length) {
//       temp.push(slate.join(''))
//       return
//     }
//     // get char from hashMap
//     let chars = map[digits[i]]
//     // recurson login loop
//     for (const key of chars) {
//       slate.push(key)
//       recursion(i + 1, digits, slate)
//       slate.pop()
//     }
//   }
//   recursion(0, digits, [])
//   return temp
// }
// const isLetterCombinations = LetterCombinations('23')
// console.log(isLetterCombinations)




// divide two integer
//  ex: 1 with high time complexity
// const DivideTwoIntegers = (dividend, divisor) => {
//   // debugger
//   let ans = 0
//   let sign = 1
//   if (dividend * divisor < 0) sign = -1
//   if (dividend < 0) dividend = dividend * -1
//   if (divisor < 0) divisor = divisor * -1

//   while (dividend >= divisor) {
//     dividend = dividend - divisor
//     ans++
//   }
//   if (sign * ans >= (Math.pow(2, 31) - 1)) return Math.pow(2, 31) - 1
//   if (sign * ans <= (Math.pow(2, 31) * - 1)) return Math.pow(2, 31) * - 1
//   return sign * ans
// }
// const isDivideTwoIntegers = DivideTwoIntegers(10,
//   3)
// console.log(isDivideTwoIntegers)

// divide two integer
//  ex: 2 in binary form
// const DivideTwoIntegers = (dividend, divisor) => {
//   let isNagative = false, absdividend, absdivisor, ans = 0, temp, quotient
//   // check if value is small or negative
//   if (dividend > 0 && divisor < 0 || dividend > 0 && divisor < 0) {
//     isNagative = true
//   }
//   absdividend = Math.abs(dividend)
//   absdivisor = Math.abs(divisor)

//   while (absdividend >= absdivisor) {
    
//     temp = absdivisor
//     quotient = 1
//     while (temp <= absdividend) {
//       temp <<= 1
//       quotient <<= 1
//     }
//     ans += quotient >> 1
//     absdividend -= temp >> 1
//   }
//   console.log(ans)
//   debugger

//   if (isNagative) return ~ans + 1
//   else if (ans >= (Math.pow(2, 31) - 1)) return ans + 1
//   return ans
// }
// const isDivideTwoIntegers = DivideTwoIntegers(10,
//   3)
// console.log(isDivideTwoIntegers)


// const DivideTwoIntegers = (dividend, divisor) => {
//   let ans = 0, quotient = Math.abs(divisor)
//   while (dividend >= quotient) {
//     debugger
//       quotient <<= 1
//       ans++
//   }
//   return ~ans + 1
// }
// const isDivideTwoIntegers = DivideTwoIntegers(10,
//   3)
// console.log(isDivideTwoIntegers)


// Longest Valid Parentheses
// const LongestValidParentheses = (s) => {
//   const stack = []
//   const index = [-1]
//   let max = 0
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '(') {
//       stack.push(s[i])
//       index.push(i)
//     } else {
//       if(stack.at(-1) === '('){
//         stack.pop()
//         index.pop()
//         max = Math.max(max, i - index.at(-1))
//       }else{
//         index.push(i)
//       }
//     }
//   }
//   return max
// }
// const isLongestValidParentheses = LongestValidParentheses("()(()")
// console.log(isLongestValidParentheses)




// ex: Search in Rotated Sorted Array
// const SearchinRotatedSortedArray = (nums, target) => {
//   let start = 0, end = nums.length - 1, mid
//   while (start <= end) {
//     mid = parseInt((start + end) / 2)
//     if (nums[mid] === target) return mid
//     if (nums[start] <= nums[mid]) {
//       if (nums[start] <= target && target <= nums[mid]) end = mid - 1
//       else start = mid + 1
//     } else {
//       if (nums[mid] <= target && target <= nums[end]) start = mid + 1
//       else end = mid - 1
//     }
//   }
//   return -1
// }
// const isSearchinRotatedSortedArray = SearchinRotatedSortedArray([1,3], 1)
// console.log(isSearchinRotatedSortedArray)




// ex: 2 but not in core
// const SearchinRotatedSortedArray = (nums, target) => {
//   return nums.indexOf(target)
// }
// const isSearchinRotatedSortedArray = SearchinRotatedSortedArray([1,3], 1)
// console.log(isSearchinRotatedSortedArray)




// // Find First and Last Position of Element in Sorted Array
// const positioninRotatedSortedArray = (nums, target) => {

//   // for the left side
//   const leftSideoccur = (nums, target) => {
//     let start = 0, end = nums.length - 1, mid, ans = -1
//     while (start <= end) {
//       mid = parseInt((start + end) / 2)
//       if (nums[mid] === target) {
//         ans = mid
//         end = mid - 1
//       }
//       else if (nums[mid] < target) {
//         start = mid + 1
//       } else {
//         end = mid - 1
//       }
//     }
//     return ans
//   }

//   // for the right rightSideoccur
//   const rightSideoccur = (nums, target) => {
//     let start = 0, end = nums.length - 1, mid, ans = -1
//     while (start <= end) {
//       mid = parseInt((start + end) / 2)
//       if (nums[mid] === target) {
//         ans = mid
//         start = mid + 1
//       }
//       else if (nums[mid] < target) {
//         start = mid + 1
//       } else {
//         end = mid - 1
//       }
//     }
//     return ans
//   }

//   const firstPos = leftSideoccur(nums, target)
//   const lastPos = rightSideoccur(nums, target)
//   return [firstPos, lastPos]
// }
// const isPositioninRotatedSortedArray = positioninRotatedSortedArray([5, 7, 7, 8, 8, 9, 10], 7)
// console.log(isPositioninRotatedSortedArray)




// const LetterCombinations = (digits) => {
//   const map = { 2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz' }
//   const temp = [];
//   if(digits.length === 0) return temp;
//   const recursion = (i, digits, slate) => {
//     // base condition
//     if (i === digits.length) {
//       temp.push(slate.join(''))
//       return
//     }
//     // get char from hashMap
//     let chars = map[digits[i]]
//     // recurson login loop
//     for (const key of chars) {
//       slate.push(key)
//       recursion(i + 1, digits, slate)
//       slate.pop()
//     }
//   }
//   recursion(0, digits, [])
//   return temp
// }
// const isLetterCombinations = LetterCombinations('23')
// console.log(isLetterCombinations)




// Combination Sum
// const CombinationSum = (candidates, target) => {
//   let start = 0, arr = [], sum = 0, secarr = []
//   for (let i = 0; i < candidates.length; i++) {
//     debugger

//     while (sum < target) {
//       sum = sum + candidates[i]
//       if(sum === target) arr.push(secarr), start  = start + 1
//       secarr.push(candidates[i])
//     }
//     sum = 0,  secarr = []
//   }
//   return arr
// }
// const isCombinationSum = CombinationSum([2, 3, 6, 7], 7)
// console.log(isCombinationSum)




// recursion & backtracking
// const recursionBacktracking = (nums) => {
//   let arr = []
//   // fn
//   const fn = (i, nums, arr) => {
//     debugger
//     // base condition
//     if (i === nums.length) {
//       return
//     }

//     // logic and fn call
//     for (const x of nums) {
//       arr.push(arr, [nums[i - 1], [x]])
//       fn(i + 1, nums)
//     }
//   }
//   fn(0, nums.arr)
//   return arr
// }
// const isRecursionBacktracking = recursionBacktracking([1, 2, 3])
// console.log(isRecursionBacktracking)
