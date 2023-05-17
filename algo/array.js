'use strict'



// console.log(0/4) // 0
// console.log(4/0) // infinite
// console.log(0%4) // 0
// console.log(4%0) // Nan

// 766. Toeplitz Matrix
// dignol traves
// const ToeplitzMatrix = function (matrix) {
//   const m = matrix.length
//   const n = matrix[0].length
//   for (let i = 1; i < m; i++) {    
//     for (let j = 1; j < n; j++) {
//         if(matrix[i][j] !== matrix[i-1][j-1]) return false
//     }
//   }
//   return true
// };
// const isToeplitzMatrix = ToeplitzMatrix([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]])
// console.log(isToeplitzMatrix)



// 561. Array Partition
// const arrayPairSum = function (nums) {
//   const sortedArray = nums.sort((a, b) => b - a);
//   let sum = 0
//   for (let i = 0; i < sortedArray.length; i += 2) {
//     sum += Math.min(sortedArray[i], sortedArray[i + 1])
//   }
//   return sum
// };
// const isarrayPairSum = arrayPairSum([1, 4, 3, 2])
// console.log(isarrayPairSum)


// const Fibonacci = function (n) {
//   if (n === 0) return 0
//   let result = 1, last = 0, current = 1
//   for (let i = 0; i < n - 1; i++) {
//     result = last + current
//     last = current
//     current = result
//   }
//   return result
// };
// const isFibonacci = Fibonacci(4)
// console.log(isFibonacci)


// 605. Can Place Flowers
// const canPlaceFlowers = function (flowerbed, n) {
//   if(n === 0) return true
//   let count = 0
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
//       flowerbed[i] = 1
//       count++
//       if (n === count) return true
//     }
//   }
//   return false
// };
// const iscanPlaceFlowers = canPlaceFlowers([1,0,0,0,1], 2)
// console.log(iscanPlaceFlowers)



// 832. Flipping an Image
// const flipAndInvertImage = function (image) {
//   const m = image.length, n = image[0].length
//   let reverse = image[0].length - 1
//   const mat = new Array(m).fill(0).map(() => new Array(n).fill(0))
//   for (let idx = 0; idx < m * n; idx++) {
//     const el = image[Math.floor(idx / n)][(reverse - idx) % n];
//     mat[Math.floor(idx / n)][idx % n] = el ? 0 : 1
//     if ((reverse - idx) === 0) reverse = idx + n
//   }
//   return mat;
// };
// const isflipAndInvertImage = flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])
// console.log(isflipAndInvertImage)



// 867. Transpose Matrix
// const transpose = function (matrix) {
//   const row = matrix[0].length, column = matrix.length
//   const newMatrix = new Array(row).fill(column).map(() => new Array(column).fill(0))
//   for (let i = 0; i < row * column; i++) {
//     newMatrix[i % row][Math.floor(i / row)] = matrix[Math.floor(i / row)][i % row]
//   }
//   return newMatrix
// };
// const istranspose = transpose([[1,2,3],[4,5,6],[7,8,9]])
// console.log(istranspose)


// 179. Largest Number
// const largestNumber = function (nums) {
//   let p1 = 0, p2 = 0, arr = nums.map(String)
//   const result = nums.filter(n => !n)
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       p1 = arr[i] + arr[j]
//       p2 = arr[j] + arr[i]
//       if (p1 < p2) {
//         [arr[i], arr[j]] = [arr[j], arr[i]]
//       }
//     }
//     p1++, p2++
//   }
//   return result.length === nums.length ? '0' : arr?.join('')
// };
// const islargestNumber = largestNumber([0,0,0,0,0])
// console.log(islargestNumber)


// 189. Rotate Array
// var rotate = function (nums, k) {

//   // ex: 1
//   if (nums.length === 1 || k == 0) return nums

//   const reveresNumber = (p1, p2) => {
//     while (p1 < p2) {
//       [nums[p1], nums[p2]] = [nums[p2], nums[p1]]
//       p1++, p2--
//     }
//     return nums
//   }

//   // reverse all
//   k = Math.floor(k % nums.length)
//   reveresNumber(0, nums.length - 1)

//   // reverse k part
//   reveresNumber(0, k - 1)

//   // // reverse rest part
//   reveresNumber(k, nums.length - 1)

//   return nums
// };
// const isrotate = rotate([1,2,3], 4)
// console.log(isrotate)



