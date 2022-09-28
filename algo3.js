'use strict';



// 77. Combinations
// const Combinations = (n, k) => {
//   const temp = []
//   const recursion = (start, slate, n) => {
//     // base case
//     if (slate.length === k) {
//       temp.push(slate.slice())
//       return
//     }
//     // logic
//     for (let j = start; j <= n; j++) {
//       slate.push(j)
//       recursion(j + 1, slate, n)
//       slate.pop()
//     }
//   }
//   recursion(1, [], n)
//   return temp
// }
// const isCombinations = Combinations(4, 2)
// console.log(isCombinations)


// Rules of recursion with backtracking
/*  
1) when recursion call it not let the j++ or loop increment you have to pass +1 by rescursion
2) when base condition match then recursion will go back by 1 index but the loop j will be go to next index
3) after loop exit it recursion will another go back by one index and j will start again by value  (j + i + j++)
*/


// 40. Combination Sum II
// const CombinationSumII = (candidates, target) => {
//   const temp = []
//   const recursion = (start, arr, target, slate) => {
//     // base case
//     if (target === 0) {
//       temp.push(slate.slice())
//       return
//     }
//     if (target < 0) {
//       return
//     }
//     for (let j = start; j < arr.length; j++) {
//       if (j > start && arr[j] === arr[j - 1]) continue
//       slate.push(arr[j])
//       recursion(j + 1, candidates, target - arr[j], slate)
//       slate.pop()
//     }
//   }
//   recursion(0, candidates.sort((a, b) => a - b), target, [])
//   return temp
// }
// const isCombinationSumII = CombinationSumII([10,1,2,7,6,1,5], 8)
// console.log(isCombinationSumII)


// 47. Permutations II
// const PermutationsII = (nums) => {
//   const temp = [];
//   const recursion = (i, arr, slate) => {
//     // debugger
//     // base condition
//     if (i === arr.length) {
//       temp.push(slate.slice())
//       return
//     }

//     // logic
//     for (let j = i; j < arr.length; j++) {
//       if (j > i) {
//        [nums[i], nums[j]] = [nums[j], nums[i]]
//       }
//       // if (j > i && arr[j] === arr[j - 1]) continue
//       slate.push(arr[i])
//       recursion(i + 1, arr, slate);
//       slate.pop();
//     }

//   }
//   recursion(0, nums, [])
//   return temp
// }
// const isPermutationsII = PermutationsII([1, 2, 3])
// console.log(isPermutationsII)


// Rules of recursion with backtracking
/*
1) when recursion call it not let the j++ or loop increment you have to pass +1 by rescursion fn
2) when base condition match then recursion will go back by 1 index and the loop j also go back by one index
then loop run again with j++ increment
3) after loop exit it recursion will another go back by one index and j will start again by value  (j =  i/start + j++)
4) if put the break condition in loop it return the final result
*/


// 169. Majority Element
// // ex: 1
// const MajorityElement = (nums) => {
//   const map = {}
//   let max = 0, fr = 0
//   for (const key in nums) {
//     map[nums[key]] ? map[nums[key]] += 1 : map[nums[key]] = 1
//   }
//   for (let k in map) {
//     debugger
//     if (map[k] > max) {
//       max = map[k]
//       fr = k
//     } else if (map[k] === max) {
//       max = map[k]
//       fr += k
//     }
//   }
//   return Number(fr)
// }
// const isMajorityElement = MajorityElement([3, 2, 3])
// console.log(isMajorityElement)


// ex: 2 moores algo method
// const MajorityElement = (nums) => {

//   let count = 1, char = nums[0]
//   for (let i = 0; i < nums.length; i++) {
//     if (char === nums[i]) {
//       count++
//     } else {
//       count--
//     } 
//     if(count === 0) {
//       char = nums[i]
//       count +=1
//     }
//   }
//   return char
// }
// const isMajorityElement = MajorityElement([6,5,5])
// console.log(isMajorityElement)


//168. Excel Sheet Column Title
// const ExcelSheetColumnTitle = (columnNumber) => {
//   const map = {
//     1: 'A',
//     2: 'B',
//     3: 'C',
//     4: 'D',
//     5: 'E',
//     6: 'F',
//     7: 'G',
//     8: 'H',
//     9: 'I',
//     10: 'J',
//     11: 'K',
//     12: 'L',
//     13: 'M',
//     14: 'N',
//     15: 'O',
//     16: 'P',
//     17: 'Q',
//     18: 'R',
//     19: 'S',
//     20: 'T',
//     21: 'U',
//     22: 'V',
//     23: 'W',
//     24: 'X',
//     25: 'Y',
//     26: 'Z'
//   };

//   if(columnNumber > 26){


//   }

//   return map[columnNumber]
// }
// const IsExcelSheetColumnTitle = ExcelSheetColumnTitle()
// console.log(IsExcelSheetColumnTitle)

// 1024( 4*5)

// 342. Power of Four
//  not optimize example
// const PowerofFour = (n) => {
//   let multi = 4
//   if (n === 1) return true
//   while (multi <= n) {
//     if (multi === n) return true
//     multi *= 4
//   }
//   return false
// }
// const isPowerofFour = PowerofFour(32)
// console.log(isPowerofFour)