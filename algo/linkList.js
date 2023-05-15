
function ListNode(val) {
  return {
    val: val,
    next: null
  }
}
const list1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: null
          }
        }
      }
    }
  }
}
// const list2 = {
//   val: 1,
//   next: list1.next.next
// }
// list2.next.val = 9
// console.log(list1)
// console.log(list2)

// 21. Merge Two Sorted Lists
// const mergeTwoLists = function (list1, list2) {  
//   const newList = new ListNode(0)
//   let currentNode = newList, newNode

//   while (list1 !== null && list2 !== null) {
//     if (list1.val < list2.val) {
//       newNode = {
//         val: list1.val,
//         next: null
//       }
//       currentNode.next = newNode
//       list1 = list1.next
//     } else {
//       newNode = {
//         val: list2.val,
//         next: null
//       }
//       currentNode.next = newNode
//       list2 = list2.next
//     }
//     currentNode = currentNode.next
//   }

//   if(list1 !== null) {
//     currentNode.next = list1
//   }
//   if(list2 !== null) {
//     currentNode.next = list2
//   }

//   return newList.next
// };
// const ismergeTwoLists = mergeTwoLists(list1, list2);
// console.log(ismergeTwoLists)

// const head = {
//   val: 1,
//   next: {
//     val: 1,
//     next: {
//       val: 2,
//       next: null
//     }
//   }
// }

// const deleteDuplicates = function (head) {
//   let currentNode = head

//   return true
// };
// const isdeleteDuplicates = deleteDuplicates(head);
// console.log(isdeleteDuplicates)


// 83. Remove Duplicates from Sorted List
// const deleteDuplicates = (head) => {
//   const newList = new ListNode(0)
//   const hashMap = {}
//   let sortedList = newList, newNode
//   while (head !== null) {
//     if (!hashMap[head.val]) {
//       newNode = {
//         val: head.val,
//         next: null
//       }
//       sortedList.next = newNode
//       sortedList = sortedList.next      
//       hashMap[head.val] = 1
//     }
//     head = head.next
//   }
//   return newList.next
// };
// const isdeleteDuplicates = deleteDuplicates(list)
// console.log(isdeleteDuplicates)


// const getIntersectionNode = (headA, headB) => {
//   // https://www.youtube.com/watch?v=c7dOI-hDa2Q  
//   if (headA === null || headB === null) return null;
//   let p1 = headA, p2 = headB;
//   while (p1 !== p2) {
//     p1 = p1.next
//     p2 = p2.next
//     if (p1 === p2) return p1
//     if (p1 === null) p1 = headB
//     if (p2 === null) p2 = headA
//   }
//   return p1
// };
// const isgetIntersectionNode = getIntersectionNode(list1, list2)
// console.log(isgetIntersectionNode)


// 141. Linked List Cycle
// https://www.youtube.com/watch?v=OQtvTZxA7-k
// const hasCycle = (head) => {
//   let slowptr = head, fastptr = head
//   while (slowptr !== null && fastptr !== null && fastptr.next !== null) {
//     slowptr = slowptr.next
//     fastptr = fastptr.next.next
//     if (slowptr === fastptr) return true
//   }
//   return false
// };
// const ishasCycle = hasCycle(list)
// console.log(ishasCycle)


// 203. Remove Linked List Elements
// const removeElements = (head, val) => {
//   const newList = new ListNode(0)
//   if (head === null) return null
//   let currentList = newList, newNode
//   while (head !== null) {
//     if (head.val !== val) {
//       newNode = {
//         val: head.val,
//         next: null
//       }
//       currentList.next = newNode
//       currentList = newNode
//     }
//     head = head.next
//   }
//   return newList.next
// };
// const isremoveElements = removeElements(list1, 7)
// console.log(isremoveElements)


// 206. Reverse Linked List
// const reverseList = (head) => {
//   if (head === null) return null
//   let newHead, newNode, currentHead
//   while (head !== null) {
//     newNode = {
//       val: head.val,
//       next: null
//     }
//     if (!newHead) {
//       currentHead = null
//     } else {
//       currentHead = newHead
//     }
//     newHead = newNode
//     newNode.next = currentHead
//     head = head.next
//   }
//   return newHead
// };
// const isreverseList = reverseList(list1)
// console.log(isreverseList)


// 234. Palindrome Linked List
// const isPalindrome = (head) => {

//   if (head === null) return true


//   const reverseList = (head) => {
//     if (head === null) return null
//     let newHead, newNode, currentHead
//     while (head !== null) {
//       newNode = {
//         val: head.val,
//         next: null
//       }
//       if (!newHead) {
//         currentHead = null
//       } else {
//         currentHead = newHead
//       }
//       newHead = newNode
//       newNode.next = currentHead
//       head = head.next
//     }
//     return newHead
//   };


//   // find mid
//   let fast = head, slow = head
//   while (fast !== null && fast.next !== null) {
//     slow = slow.next
//     fast = fast.next.next
//   }

//   // reverse
//   let isreverseList = reverseList(slow)

//   // check
//   while (isreverseList !== null) {
//     if (isreverseList.val !== head.val) return false
//     isreverseList = isreverseList.next
//     head = head.next
//   }

//   return true
// };
// const isisPalindrome = isPalindrome(list1)
// console.log(isisPalindrome)



// 876. Middle of the Linked List
// const middleNode = function (head) {
//   let slow = head, fast = head
//   while (slow.next !== null && fast !== null && fast.next !== null ) {
//     slow = slow.next
//     fast = fast.next.next
//   }
//   return show
// };
// const ismiddleNode = middleNode(list1)
// console.log(ismiddleNode)
