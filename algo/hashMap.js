'use strict'

// 500. Keyboard Row
// const findWords = function (words) {
//   const hashMap = {
//     q: 1, w: 1, e: 1, r: 1, t: 1, y: 1, u: 1, i: 1, o: 1, p: 1,
//     a: 2, s: 2, d: 2, f: 2, g: 2, h: 2, j: 2, k: 2, l: 2,
//     z: 3, x: 3, c: 3, v: 3, b: 3, n: 3, m: 3
//   };

//   const set = new Set()
//   let output = []

//   for (let i = 0; i < words.length; i++) {
//     for (let j = 0; j < words[i].length; j++) {
//       set.add(hashMap[words[i][j].toLowerCase()])
//     }
//     if (set.size === 1) {
//       output.push(words[i])
//     }
//     set.clear()
//   }

//   return output
// };
// const isfindWords = findWords(["adsdf","sfd"])
// console.log(isfindWords)



// 599. Minimum Index Sum of Two Lists
// ex: 1
// const findRestaurant = function (list1, list2) {
//   const hashMap = {}, result = []
//   let minNumber
//   for (let i = 0; i < list1.length; i++) {
//     for (let j = 0; j < list2.length; j++) {
//       if (list1[i] === list2[j]) {
//         hashMap[list1[i]] = i + j
//         if (minNumber === undefined) minNumber = i + j
//         if (minNumber > i + j) minNumber = i + j
//       }
//     }
//   }


//   for (const key in hashMap) {
//     if (minNumber === hashMap[key]) {
//       result.push(key)
//     }
//   }

//   return result
// };
// const isfindRestaurant = findRestaurant(["happy","sad","good"], ["sad","happy","good"])
// console.log(isfindRestaurant)


// 187. Repeated DNA Sequences
// const findRepeatedDnaSequences = function (s) {
//   const hashMap = new Map(), result = []
//   for (let i = 0; i < s.length - 9; i++) {
//     const str = s.substring(i, i + 10)
//     if (hashMap.has(str)) {
//       hashMap.set(str, hashMap.get(str) + 1)
//     } else {
//       hashMap.set(str, 1)
//     }
//   }

//   for (const key of hashMap) {
//     if(key[1] > 1){
//       result.push(key[0])
//     }
//   }

//   return result
// };
// const isfindRepeatedDnaSequences = findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')
// console.log(isfindRepeatedDnaSequences)