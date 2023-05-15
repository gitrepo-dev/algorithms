'use strict'


// 796. Rotate String
// const RotateString = function (s, goal) {
//   let newStr = s
//   for (let i = 0; i < s.length; i++) {
//     if (newStr === goal) return true
//     newStr =  newStr.substring(1) + newStr.substring(0, 1)
//   }
//   return false
// };
// const isRotateString = RotateString('abcde', 'abced')
// console.log(isRotateString)


// 819. Most Common Word
// const mostCommonWord = function (paragraph, banned) {
//   const hashMap = {}, bannedWord = new Set(); //
//   let mostCommon = ''
//   const para = paragraph.toLowerCase().split(/\W+/)

//   for (const word of banned) {
//     bannedWord.add(word.toLowerCase())
//   }

//   for (const i of para) {
//     if (!bannedWord.has(i)) {
//       hashMap[i] ? hashMap[i] += 1 : hashMap[i] = 1
//       if ((hashMap[i] > hashMap[mostCommon]) || mostCommon === '') {
//         mostCommon = i
//       }
//     }
//   }
//   return mostCommon
// };
// const ismostCommonWord = mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"])
// console.log(ismostCommonWord)


// // 821. Shortest Distance to a Character
// const mostCommonWord = function (s, c) {
//   const indexs = [], output = []
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === c) {
//       indexs.push(i);
//     }
//   }
//   let min = s.length
//   for (let j = 0; j < s.length; j++) {
//     for (let k = 0; k < indexs.length; k++) {
//       output[j] = Math.min(Math.abs(indexs[k] - j), min)
//       min = Math.min(Math.abs(indexs[k] - j), min)
//     }
//     min = s.length
//   }

//   return output
// };
// const ismostCommonWord = mostCommonWord("aaab", 'b')
// console.log(ismostCommonWord)



// 824. Goat Latin
// const toGoatLatin = function (sentence) {
//   const vowel = { a: 'a', e: 'e', i: 'i', o: 'o', u: 'u', A: 'A', E: 'E', I: 'I', O: 'O', U: 'U' };
//   const s = sentence.split(' ');
//   for (let i = 0; i < s.length; i++) {
//     let char = ''
//     for (let j = 0; j < i + 1; j++) {
//       char += 'a'
//     }
//     if (vowel[s[i][0]]) {
//       s[i] = s[i] + 'ma' + char
//     } else {
//       console.log(s[i].substring(1), s[i].substring(0, 1))
//       s[i] = s[i].substring(1) + s[i].substring(0, 1) + 'ma' + char
//     }
//     char = ''
//   }
//   return s.join(' ')
// };
// const istoGoatLatin = toGoatLatin('yDumm')
// console.log(istoGoatLatin)



// 830. Positions of Large Groups
// const largeGroupPositions = function (s) {
//   const output = []
//   if (s.length < 3) return output
//   let count = 1, p1 = 0, p2 = 1

//   for (let i = 0; i < s.length; i++) {
//     if (p2 === s.length) break
//     if (s[p1] === s[p2]) {
//       count++, p2++
//     }
//     if (count >= 3 && s[p1] !== s[p2]) {
//       output.push([p1, (p2 - 1)])
//     }
//     if (s[p1] !== s[p2]) {
//       p1 = p2, p2 += 1, count = 1
//     }
//   }
//   return output
// };
// const islargeGroupPositions = largeGroupPositions('aaa')
// console.log(islargeGroupPositions)


// 844. Backspace String Compare
// const backspaceCompare = function (s, t) {
//   let charS = '', charT = ''
//   for (let i = 0; i < s.length; i++) {
//     const cs = s.substring(i, i + 1)
//     if (cs !== '#') {
//       charS += cs
//     }
//     if (cs === '#') {
//       charS = charS.slice(0, charS.length - 1)
//     }
//   }
//   for (let i = 0; i < t.length; i++) {
//     const cs = t.substring(i, i + 1)
//     if (cs !== '#') {
//       charT += cs
//     }
//     if (cs === '#') {
//       charT = charT.slice(0, charT.length - 1)
//     }
//   }
//   return charS === charT
// };
// const isbackspaceCompare = backspaceCompare('xywrrmp', 'xywrrmu#p')
// console.log(isbackspaceCompare)


// 860. Lemonade Change
// on the same time you have to pay change if not you have change then return false
// const lemonadeChange = function (bills) {
//   const hashMap = { 5: 0, 10: 0, 20: 0 }
//   for (let i = 0; i < bills.length; i++) {
//     if (bills[i] === 5) {
//       hashMap[bills[i]] += 1
//     } else if (bills[i] === 10) {
//       if (hashMap[5] >= 1) {
//         hashMap[bills[i]] += 1
//         hashMap[5] -= 1
//       }
//       else return false
//     } else {
//       if (hashMap[5] >= 1 && hashMap[10] >= 1) {
//         hashMap[10] -= 1
//         hashMap[5] -= 1
//         hashMap[bills[i]] += 1
//       } else if (hashMap[5] >= 3) {
//         hashMap[5] -= 1 * 3
//         hashMap[bills[i]] += 1
//       }
//       else return false
//     }
//   }
//   return true
// };
// const islemonadeChange = lemonadeChange([5, 5, 5, 5, 20, 20, 5, 5, 5, 5])
// console.log(islemonadeChange)

