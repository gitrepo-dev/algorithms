'use strict'


// const arrayOfobj = [{ name: 'jay' }, {
//   name: [
//     {
//       name: 'rajesh'
//     },
//     {
//       name: 'john'
//     },
//     {
//       name: [
//         {
//           name: [
//             { name: "hi" }
//           ]
//         }
//       ]
//     }
//   ]
// }, { name: 'ann' }, { name: 'lisa' }, { name: [{ name: 'devide' }] }]


// const mapped = (array) => {
//   const temp = []
//   const recursion = (start, array) => {
//     for (let i = start; i < array.length; i++) {
//       const istrue = Array.isArray(array[i].name)
//       if (istrue) {
//         recursion(0, array[i].name)
//       } else {
//         temp.push(array[i])
//       }
//     }
//   }
//   recursion(0, array, [])
//   return temp
// }
// const isMapped = mapped(arrayOfobj)
// console.log(isMapped)


// 78. Subsets
// const subsets = function (nums) {
//   const temp = [];
//   const recursion = (start, nums, slate) => {
//     temp.push(slate.slice())
//     for (let i = start; i < nums.length; i++) {
//       slate.push(nums[i])
//       recursion(i + 1, nums, slate)
//       slate.pop()
//     }
//   }
//   recursion(0, nums, [])
//   return temp
// };
// const issubsets = subsets([1, 2, 3])
// console.log(issubsets, 'issubsets')


// 39. Combination Sum
// const combinationSum = function (candidates, target) {
//   const result = []
//   const recursion = (start, arr, slate, target) => {
//     if (target === 0) {
//       result.push(slate.slice())
//       return
//     }
//     if (target < 0) {
//       return
//     }
//     for (let i = start; i < arr.length; i++) {
//       slate.push(arr[i])
//       recursion(i, arr, slate, target - arr[i])
//       slate.pop()
//     }
//   }
//   recursion(0, candidates, [], target)
//   return result
// };
// const iscombinationSum = combinationSum([2, 3, 6, 7], 7)
// console.log(iscombinationSum, 'iscombinationSum')


// 40. Combination Sum II
// const combinationSum2 = function (candidates, target) {
//   const result = []
//   const recursion = (start, arr, slate, target) => {
//     if (target === 0) {
//       result.push(slate.slice())
//       return
//     }
//     if (target < 0) {
//       return
//     }
//     for (let i = start; i < arr.length; i++) {
//       if (i > start && arr[i] === arr[i - 1]) continue
//       slate.push(arr[i])
//       recursion(i + 1, arr, slate, target - arr[i])
//       slate.pop()
//     }
//   }
//   recursion(0, candidates.sort((a, b) => a - b), [], target)
//   return result
// };
// const iscombinationSum2 = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
// console.log(iscombinationSum2, 'iscombinationSum2')


// 46. Permutations
// const permuteUnique = function (nums) {
//   const result = []
//   const recursion = (arr, slate) => {
//     if (slate.length === nums.length) {
//       result.push(slate.slice())
//       return
//     }

//     for (let i = 0; i < arr.length; i++) {
//       if (!slate.includes(arr[i])) {
//         slate.push(arr[i]);
//         recursion(arr, slate);
//         slate.pop();
//       }
//     }    
//   }
//   recursion(nums, [])
//   return result
// };
// const ispermuteUnique = permuteUnique([1, 2, 3])
// console.log(ispermuteUnique, 'ispermuteUnique')


