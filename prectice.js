

// const testFn = (nums1, m, nums2, n) => {
//  let start = 0, end = 1, i = (m + n) - 1
//   for (i; i > 0; i--) {
//     if()
//    }
//   }
//   return nums1
// }
// // const outputtestFn = testFn([0, 0, 3, 0, 0, 0, 0, 0, 0], 3, [-1, 1, 1, 1, 2, 3], 6)
// const outputtestFn = testFn([1, 2, 3, 2, 5, 6], 3, [2, 5, 6], 3)
// // const outputtestFn = testFn([0], 0, [1], 1)
// // const outputtestFn = testFn([1], 1, [], 0)
// // const outputtestFn = testFn([-1,-1,0,0,0,0], 4, [-1,0], 2)
// console.log(outputtestFn)

// [1, 2, 2, 3, 5, 6]
// m should be no.of merged
// n exactly how many will merged


// console.log('And')
// console.log(4 & 4)
// console.log(4 & 3)

// console.log('OR')
// console.log(6 === 6 | 5 === 2)
// console.log(6 === 3 | 5 === 2)
// console.log(6 === 6 | 5 === 5)

// console.log('XOR')
// console.log(6 ^ 5)
// console.log(6 ^ 6)

// console.log('Tilde')
// console.log(~5)

// console.log('Right shift')
// console.log(10 >> 1)

// console.log('Left shift')
// console.log(10 << 1)



/* Bitwise operators are less cost than arithmetic
operators to calculation in some cases */

// console.log(10 % 2 === 0) // even
// console.log(15 % 2 === 0) // odd

// console.log(10 & 1) // even
// console.log(15 & 1) // odd

// console.log(10 >> 1) // n/2 = 5
// console.log(10 << 1) // n*2 = 20



// merge two sorted array

// const sortedArray = (arr1, arr2) => {
//   const len = arr1.length > arr2.length ? arr1.length : arr2.length;
//   let p1 = 0, p2 = 0, newArr = []
//   for (let i = 0; i < len; i++) {
//     if (arr1[i] === arr2[i]) {
//       newArr.push(arr1[p1], arr2[p2]);
//       p1++
//       p2++
//     } else if (arr1[p1] > arr2[p2]) {
//       newArr.push(arr2[p2]);
//       p2++
//     } else {
//       if (arr1[p1]) {
//         newArr.push(arr1[p1]);
//         p1++
//       } else {
//         newArr.push(arr2[p2]);
//         p2++
//       }
//     }
//   }
//   return newArr
// }
// const issortedArray = sortedArray([1, 1, 2, 3, 5], [1, 1, 2])
// console.log(issortedArray)


// remove duplicate from arr

// const duplicateItemRemove = (arr) => {
//   const hashMap = {};
//   const newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     hashMap[arr[i]]  ? hashMap[arr[i]] += 1 : hashMap[arr[i]] =1
//   }

//   for (const key in hashMap) {
//     newArr.push(parseInt(key))
//   }
//   return newArr
// }
// const isduplicateItemRemove = duplicateItemRemove([1,1,2,3,4,5,5,8,7,7,9])
// console.log(isduplicateItemRemove)