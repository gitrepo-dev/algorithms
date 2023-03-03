'use strict';


// 78. Subsets
// const Subsets = (nums) => {
//   const temp = [];
//   const recursion = (i, nums, slate) => {
//     // debugger
//     // base condition
//     if (i === nums.length) {
//       temp.push(slate.slice());
//       return
//     }

//     // recursive logic
//     2
//     for (let j = i; j < nums.length; j++) {
//       slate.push(nums[j])
//       recursion(j + 1, nums, slate)
//       slate.pop()
//     }

//   }
//   // call recursion
//   recursion(0, nums, [])
//   return temp
// }
// const IsSubsets = Subsets([1, 2, 3])
// console.log(IsSubsets)

/*
1) loop will increment by 1 use rec fn

*/


// 350. Intersection of Two Arrays II
// const IntersectionofTwoArraysII = (nums1, nums2) => {
//   const temp = [];
//   const map = {}
//   for (const key of nums1) {
//     map[key] ? map[key] += 1 : map[key] = 1
//   }
//   for (const key of nums2) {
//     if(map[key]){
//       map[key] -= 1
//       temp.push(key)
//     }
//   }
//   return temp
// }
// const isIntersectionofTwoArraysII = IntersectionofTwoArraysII([4,9,5], [9,4,9,8,4])
// console.log(isIntersectionofTwoArraysII)


// 645. Set Mismatch
// const SetMismatch = (nums) => {
//   if (nums.length === 1) return nums
//   const map = {}
//   for (let i = 0; i < nums.length; i++) {
//     if (map[nums[i]]) {
//       if(map[nums[i - 1]] === map[nums[i]]) return  [map[nums[i]] - 1, map[nums[i]]]
//       return [map[nums[i]], map[nums[i]] + 1]
//     } else {
//       map[nums[i]] = nums[i]
//     }
//   }
// }
// const IsSetMismatch = SetMismatch([1, 2, 2, 4])
// console.log(IsSetMismatch)

