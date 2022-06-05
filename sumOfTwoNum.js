/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// const nums = [2, 4, 8, 7, 5, 4]

// const twoSum = function (arr, sumOfVal=0) {
//     for (i = 0; i < arr.length; i++) {
//         for (j = i + 1; j < arr.length; j++) {
//             const addedVal  = arr[i] + arr[j]
//             if(addedVal === sumOfVal){
//                 return [i, j]
//             }
//         }
//     }
//     return "Not Found"
// };
// const result = twoSum(nums, 10)

//  console.log("Result => ", result)



// const twoSum = function (arr, sumOfVal) {
//     debugger

//     let i = 0
//     let addedVal = 0
//     let startVal = 0
//     let nextVal = 0
//     for (i; i < arr.length; i++) {
        
//         if (addedVal !== sumOfVal) {
//             startVal = arr[0]
//             nextVal = arr[i + 1]
//             addedVal = nextVal === undefined ? addedVal + 0 : startVal + nextVal
//             if (arr.length === i + 1) {
//                 arr.splice(0, 1)
//                 twoSum(arr, sumOfVal)
//             }
//         } else {
//             console.log([arr.indexOf(startVal), arr.indexOf(nextVal)])
//             return [nums.indexOf(startVal), nums.indexOf(nextVal)]
//         }
//     }
//     // }
// };
// twoSum(nums, 13)