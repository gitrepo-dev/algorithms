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
//   debugger
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



// 39. Combination Sum
// const CombinationSum = (candidates, target) => {
//   const temp = [];
//   const recursion = (start, nums, target, slate) => {
//     debugger
//     if (target === 0) {
//       temp.push(slate.slice())
//       return;
//     }
//     if (target < 0) {
//       return
//     }

//     for (let i = start; i < nums.length; i++) {
//       // add in slate [arr]
//       slate.push(nums[i]);
//       // call recursion
//       recursion(i, nums, target - nums[i], slate)
//       // to run backtraking
//       slate.pop()
//     }
//   }
//   recursion(0, candidates, target, [])
//   return temp
// }
// const isCombinationSum = CombinationSum([1, 2, 3], 3)
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
//   fn(0, nums, arr)
//   return arr
// }
// const isRecursionBacktracking = recursionBacktracking([1, 2, 3])
// console.log(isRecursionBacktracking)


// Multiply Strings
// const MultiplyStrings = (num1, num2) => {
//   let carry = 0, pro = 0, result = new Array(num1.length + num2.length), addIndex = 0, k, pf = 0
//   for (let i = num2.length; i > 0; i--) {
//     debugger
//     k = result.length - (1 + pf)
//     for (let j = num1.length; j > 0; j--) {
//       addIndex++
//       pro = +num1[i - 1] * +num2[j - 1] + (result[k] ?? 0)
//       result[result.length - addIndex] = pro
//       pf++
//     }
//     addIndex = addIndex - 1
//   }
//   return result.join('')
// }
// const IsMultiplyStrings = MultiplyStrings("12", "12")
// console.log(IsMultiplyStrings)




// Count and Say
// const CountandSay = (n) => {
//   let str = '1';
//   for (let i = 1; i < n; i++) {
//     let strArray = str.split('')
//     str = ''
//     let count = 1
//     for (let j = 0; j < strArray.length; j++) {
//       if (strArray[j] !== strArray[j + 1]) {
//         str += count + strArray[j];
//         count = 1
//       } else {
//         count++
//       }
//     }
//   }
//   return str
// }
// const IsCountandSay = CountandSay(4)
// console.log(IsCountandSay)


// search index algo
// const findIndex = (nums, find) => {
//   let i = 0
//   while (i < nums.length) {
//     if(nums[i] === find) return i
//     i++
//   }
//   return -1
// }
// const isFindIndex = findIndex([1,3,5,4], 4)
// console.log(isFindIndex)


// First Missing Positive
// const firstMissingPositive = (nums) => {
//   let one = false
//   // step 1: replace from 1 if el is "1 < ele < n" [1,2,3,4,7] => [1,2,3,4,1]
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) one = true
//     if (1 > nums[i] || nums.length < nums[i]) nums[i] = 1
//   }
//   if (!one) return 1

//   // step 2: map and add -1 on its indexes [1,2,3,4,1] => [-1,-1,-1,-1,1]
//   for (let i = 0; i < nums.length; i++) {
//     let idx = Math.abs(nums[i])
//     nums[idx - 1] = -Math.abs(nums[idx - 1])
//   }

//   // step 3: find first positive number positive, inx of first positive num + 1, 4 + 1 = 5
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) return i + 1
//   }

//   return nums.length + 1
// }
// const isFirstMissingPositive = firstMissingPositive([1,2,3,4,7])
// console.log(isFirstMissingPositive)




// 69. Sqrt(x)
// const Sqrt = (x) => {
//   let start = 1, end = x, ans, mid
//   if (x === 0 || x === 1) return x
//   while (start <= end) {
//     mid = parseInt((start + end) / 2)
//     ans = mid * mid
//     if (ans === x) return mid
//     else if (ans < x) {
//       start = mid + 1
//       ans = mid
//     } else {
//       end = mid - 1
//       ans = end
//     }
//   }
//   return ans
// }
// const isSquare = Sqrt(16)
// console.log(isSquare)


// 70. Climbing Stairs
// const ClimbingStairs = (x) => {
//   let ans, s1, s2
//   if (x <= 1) return 1
//   const recursion = (x) => {
//     debugger
//     if (x === 0) return
//     for (let i = 0; i < x; i++) {
//       s1 = x - 1
//       s2 = x - 2
//       ans = s1 + s2
//       recursion(x - 1)
//     }
//   }
//   recursion(x)
//   if(ans < 0) return 1
//   return ans
// }
// const isClimbingStairs = ClimbingStairs(5)
// console.log(isClimbingStairs)

//
// const ClimbingStairs = (x) => {
//   let recursion = (stairsRemaining, saveResult) => {
//     if(stairsRemaining < 0) return 0
//     if(stairsRemaining === 0) return 1
//     if(saveResult[stairsRemaining]) return saveResult[stairsRemaining]
//     saveResult[stairsRemaining] = recursion(stairsRemaining - 1, saveResult) + recursion(stairsRemaining - 2, saveResult)
//     return saveResult[stairsRemaining]
//   }
//   return recursion(n, {})
// }
// const isClimbingStairs = ClimbingStairs(5)
// console.log(isClimbingStairs)


// roman to integer
// const romantointeger = (s) => {
//   const map = {
//     'I': 1,
//     'V': 5,
//     'X': 10,
//     'L': 50,
//     'C': 100,
//     'D': 500,
//     'M': 1000
//   }
//   let result = 0
//   for (let i = 0; i < s.length; i++) {
//     const crr = map[s[i]]
//     const next = map[s[i + 1]]
//     if (crr < next) result += next - crr, i++
//     else result += crr
//   }
//   return result
// }
// const isromantointeger = romantointeger('MCMXCIV')
// console.log(isromantointeger)


// 48. Rotate Image
// const RotateImage = (matrix) => {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix.length - 1; j++) {
//       debugger

//       [matrix[j], matrix[matrix.length - 1 + j]] = [matrix[matrix.length - 1 + j], matrix[j]]
//       console.log(matrix)
//     }
//   }
//   return matrix
// }
// const isRotateImage = RotateImage([[1,2,3],[4,5,6],[7,8,9]])


// 88. Merge Sorted Array ex: 1
// const MergeSortedArray = (nums1, m, nums2, n) => {
//   let first = m - 1, second = n - 1
//   for (let i = m + n - 1; i >= 0; i--) {
//     if (second < 0) break
//     if (nums1[first] > nums2[second]) {
//       nums1[i] = nums1[first]
//       first--
//     } else {
//       nums1[i] = nums2[second]
//       second--
//     }
//   }
//   return nums1
// }
// const isMergeSortedArray = MergeSortedArray([0], 0, [1], 1)
// console.log(isMergeSortedArray)


// Reverse Integer
// const reverseInteger = (x) => {
//  let ans = 0
//  while (x !== 0) {
//   debugger
//   let digits = x % 10
//   ans = (ans * 10) + digits
//   x = parseInt(x / 10)
//  }
//  if (ans < (Math.pow(2, 31) * -1) || ans > Math.pow(2, 31) - 1) return 0;
//  return ans
// }
// const isReverseInteger = reverseInteger(-123)
// console.log(isReverseInteger)


// 121. Best Time to Buy and Sell Stock
// ex 1 with o of n squr 2 time complexity
// const BestTimetoBuyandSellStock = (prices) => {
//   let profit = 0, diff
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = 1 + i; j < prices.length; j++) {
//       diff = prices[j] - prices[i]
//       if (profit < diff) profit = diff
//      }
//   }
//   return profit
// }
// const isBestTimetoBuyandSellStock = BestTimetoBuyandSellStock([7,6,4,3,1])
// console.log(isBestTimetoBuyandSellStock)

// 121. ex: 2
// const BestTimetoBuyandSellStock = (prices) => {
//   let min = 0, profit = 0
//   for (let i = 0; i < prices.length; i++) {
//     if (min > prices[i] || min === 0 && i === 0) {
//       min = prices[i];
//     }
//     if (profit < prices[i] - min) {
//       profit = prices[i] - min
//     }
//   }
//   return profit
// }
// const isBestTimetoBuyandSellStock = BestTimetoBuyandSellStock([7,1,5,3,6,4])
// console.log(isBestTimetoBuyandSellStock)


// 290. Word Pattern
// const WordPattern = (pattern, s) => {
//   let key = {}, val = {}, arr = s.split(' ')
//   if (pattern.length !== arr.length) return false
//   for (let i = 0; i < pattern.length; i++) {
//     if ((key[pattern[i]] || val[arr[i]])) {
//       if (key[pattern[i]] !== s[i] && val[arr[i]] !== pattern[i]) return false
//     }
//     key[pattern[i]] = arr[i], val[arr[i]] = pattern[i];
//   }
//   return true
// }
// const isWordPattern = WordPattern("abba", "dog dog dog dog")
// console.log(isWordPattern)


// 217. Contains Duplicate
// const ContainsDuplicate = (nums) => {
//   const hasMap = {}
//   for (let i = 0; i < nums.length; i++) {
//     if(hasMap[nums[i]] || hasMap[nums[i]] === 0 && nums[i] === 0) return true
//     else hasMap[nums[i]] = nums[i]
//   }
//   return false
// }
// const isContainsDuplicate = ContainsDuplicate([0,4,5,0,3,6])
// console.log(isContainsDuplicate)


// 219. Contains Duplicate II
// const ContainsDuplicateII = (nums, k) => {
//   const hasMap = new Map()
//   for (let i = 0; i < nums.length; i++) {
//     if (hasMap.has(nums[i]) && i - hasMap.get(nums[i]) <= k) return true
//     else hasMap.set(nums[i], i)
//   }
//   return false
// }
// const isContainsDuplicateII = ContainsDuplicateII([1,2,3,1,2,3], 2)
// console.log(isContainsDuplicateII)


// 205. Isomorphic Strings
// const IsomorphicStrings = (s, t) => {
//   const key = {}, val = {}
//   if (s.length !== t.length) return false
//   for (let i = 0; i < s.length; i++) {
//     // at least key or value should be exists
//     if ((key[s[i]] || val[t[i]])) {
//       // match the val to val and key to key if not same then return false
//       if ((key[s[i]] !== t[i] && val[t[i]] !== s[i])) return false
//     } else {
//       // add key to val and val to key
//       key[s[i]] = t[i], val[t[i]] = s[i]
//     }
//   }
//   return true
// }
// const isIsomorphicStrings = IsomorphicStrings('egg', 'add')
// console.log(isIsomorphicStrings)


// ex: 1
// 345. Reverse Vowels of a String
// const ReverseVowelsofaString = (s) => {
//   let p1 = 0, p2 = s.length - 1, str = s.split('')
//   for (let i = 0; i < s.length; i++) {
//     if(p1 === p2 || p1 > p2) return str.join('')
//     if ((str[p1] === 'a' || str[p1] === 'e' || str[p1] === 'i' || str[p1] === 'o' || str[p1] === 'u' || str[p1] === 'A' || str[p1] === 'E' || str[p1] === 'I' || str[p1] === 'O' || str[p1] === 'U') && (str[p2] === "a" || str[p2] === "e" || str[p2] === "i" || str[p2] === "o" || str[p2] === "u" || str[p2] === "A" || str[p2] === "E" || str[p2] === "I" || str[p2] === "O" || str[p2] === "U")) {
//       [str[p1], str[p2]] = [str[p2], str[p1]]
//       p1++, p2--
//     } if (s[p1] !== "a" && s[p1] !== "e" && s[p1] !== "i" && s[p1] !== "o" && s[p1] !== "u" && s[p1] !== "A" && s[p1] !== "E" && s[p1] !== "I" && s[p1] !== "O" && s[p1] !== "U") {
//       p1++
//     } if (s[p2] !== "a" && s[p2] !== "e" && s[p2] !== "i" && s[p2] !== "o" && s[p2] !== "u" && s[p2] !== "A" && s[p2] !== "E" && s[p2] !== "I" && s[p2] !== "O" && s[p2] !== "U") {
//       p2--
//     }

//   }
//   return str.join('')
// }
// const isReverseVowelsofaString = ReverseVowelsofaString("leetcode")
// console.log(isReverseVowelsofaString)

// ex: 2
// const ReverseVowelsofaString = (s) => {
//   const map = {};
//   let start = 0, end = (s.length - 1), str = s.split('')
//   for (const char of 'aeiouAEIOU') {
//     map[char] = true
//   }
//   while (start < end) {
//     if (map[s[start]] && map[s[end]]) {
//       [str[start], str[end]] = [str[end], str[start]]
//       start++, end--
//     }
//     if (!map[s[start]]) {
//       start++
//     }
//     if (!map[s[end]]) {
//       end--
//     }
//   }
//   return str.join('')
// }
// const isReverseVowelsofaString = ReverseVowelsofaString("hello")
// console.log(isReverseVowelsofaString)




// 350. Intersection of Two Arrays II
// const IntersectionofTwoArraysII = (nums1, nums2) => {
//   return true
// }
// const IsIntersectionofTwoArraysII = IntersectionofTwoArraysII([1,2,2,1], [2,2])
// console.log(IsIntersectionofTwoArraysII)



// 45. Jump Game
// const JumpGameii = (nums) => {
//   let jump = 0, current = 0, far = 0
//   for (let i = 0; i < nums.length - 1; i++) {
//     far = Math.max(far, nums[i] + i)
//     if (i === current) {
//       current = far
//       jump++
//     }
//   }
//   return jump
// }
// const isJumpGameii = JumpGameii([2,3,1,1,4])
// console.log(isJumpGameii)

// 55. Jump Game
// const JumpGame = (nums) => {
//   let reach = 0
//   for (let i = 0; i <= reach; i++) {
//     reach = Math.max(reach, i + nums[i])
//     if (reach >= nums.length - 1) return true
//   }
//   return false
// }
// const isJumpGame = JumpGame([2,3,1,1,4])
// console.log(isJumpGame)


// 46. Permutations
// const permutations = (nums) => {
//   const temp = []
//   const backtraking = (i, nums) => {


//     // base condition
//     if (i === nums.length) {
//       temp.push(nums.slice())
//       return
//     }

//     // logic
//     for (let j = i; j < nums.length; j++) {
//       [nums[i], nums[j]] = [nums[j], nums[i]]
//       // backtraking
//       backtraking(i + 1, nums);
//       // when backtrack run and loop will run and exit loop 
//       [nums[i], nums[j]] = [nums[j], nums[i]]
//     }
//   }
//   backtraking(0, nums)
//   return temp
// }
// const isPermutations = permutations([1, 2, 3])
// console.log(isPermutations)


// [1,2,3]

// [
//   [1,2,3], -done
//   [1,3,2],
//   [2,1,3], - done
//   [2,3,1],
//   [3,1,2], - done
//   [3,2,1]
// ]

const LetterCombinations = (digits) => {
  const map = { 2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz' }
  const temp = [];
  if(digits.length === 0) return temp;
  const recursion = (i, digits, slate) => {
    debugger
    // base condition
    if (i === digits.length) {
      temp.push(slate.join(''))
      return
    }
    // get char from hashMap
    let chars = map[digits[i]]
    // recurson login loop
    for (const key of chars) {
      slate.push(key)
      recursion(i + 1, digits, slate)
      slate.pop()
    }
  }
  recursion(0, digits, [])
  return temp
}
const isLetterCombinations = LetterCombinations('23')
console.log(isLetterCombinations)