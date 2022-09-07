'use strict';



// 77. Combinations
// const Combinations = (n, k) => {
//   const temp = []
//   const recursion = (start, slate, n) => {
//     debugger
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


// Rules of recursion and backtracking
/*  
1) when recursion call it not let the j++ or loop increment you have to pass +1 by rescursion
2) when base condition match then recursion will go back by 1 index but the loop j will be on the same index
3) after loop exit it recursion will another go back by one index and j will start again by value  j + i + 1
*/