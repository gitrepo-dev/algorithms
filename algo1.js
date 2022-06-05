
'use strict'

// const isPaildromNumber = (num) => {
//     const numStr = num.toString()
//     for (let i = 0; i < numStr.length; i++) {
//         if(numStr.at(i) !== numStr.at(- (1 + i))){
//             return false
//         }
//     }
//     return true
//   }
//   const isPaildrom = isPaildromNumber(10)
//   console.log(isPaildrom)




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
// const isLongestCharacter = findLongestCharacter(["dog","racecar","car"])
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




// merge shorted array
// const twoShortedArrary = (...args) => {
//     let newArr = [];
//     let maxLen = args.length
//     let compareInr = 1
//     let inr = 0
//     for (let j = 0; j < maxLen; j++) {
//         debugger
//         if (compareInr < args.length) {
//             compareInr++
//             if (args[0].length < args[compareInr - 1].length) {
//                 maxLen = args[compareInr - 1].length
//             }
//         }
//         if(j === args.length){
//             maxLen += args[compareInr - 1].length
//             inr++
//         }
//         console.log(args[j][inr])
//         // console.log(args[j][0])
//         // if (list1[i] > list2[i]) {
//         //     newArray.push(list2[i], list1[i])
//         // } else if (!list1[i]) {
//         //     newArray.push(list2[i])
//         // } else if (!list2[i]) {
//         //     newArray.push(list1[i])
//         // } else {
//         //     newArray.push(list1[i], list2[i])
//         // }
//     }
//     // console.log(args[])
//     // const newArray = []
//     // for (let i = 0; i < list1.length; i++) {
//     //     if (list1[i] > list2[i]) {
//     //         newArray.push(list2[i], list1[i])
//     //     } else if (!list1[i]) {
//     //         newArray.push(list2[i])
//     //     } else if (!list2[i]) {
//     //         newArray.push(list1[i])
//     //     } else {
//     //         newArray.push(list1[i], list2[i])
//     //     }
//     // }
//     return "Sd";
// }
// const istwoShortedArrary = twoShortedArrary([1, 2, 4], [1, 3, 4], [7, 8, 9, 10])
// console.log(istwoShortedArrary)



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
// const removeDuplicatesEle = (nums, val) => {
//     for (let i = nums.length - 1; i >= 0; i--) {
//         if (nums[i] === val) {
//             nums.splice([i], 1)
//         }
//     }
//     return nums
// }
// const isremoveDuplicatesEle = removeDuplicatesEle([0,1,2,2,3,0,4,2], 2)
// console.log(isremoveDuplicatesEle)


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
// const isImplementStrStr = implementStrStr('aaaaa', 'bba')
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
const lastWordLength = (s) => {
    let k = 0
    if(!s) return k
    for (let i = s.length - 1; i >= 0; i--) {
        if(s[i] !== " ") k++
        if(s[i] === " " && k > 0) return k
    }
    return k
}
const isLastWordLength = lastWordLength('   fly me   to   the moon  ')
console.log(isLastWordLength)