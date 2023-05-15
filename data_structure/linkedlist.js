// 'use strict'


// class linkedList{
//     constructor(data){
       
//         this.head = {
//             value: data || null,
//             next: null
//         }
//         this.tail = this.head
//         this.length = 1
//     }
    
//     // add new node/el in the last
//     appendPush(data){
//         const newNode = {
//             value: data,
//             next: null
//         }
//         // accessing the newNode next
//         this.tail.next = newNode;        
//         this.tail = newNode;
//         // len of node
//         this.length++
//     }

//     // add node/el in the start
//     prependShift(data){
//         const newNode = {
//             value: data,
//             next: null
//         }
     
//        newNode.next = this.head
//        this.head = newNode

//         // len of node
//         this.length++
//     }


//     // find the node
//     findNode(i){        
//         let counter = 0, foundNode = undefined, currentNode = this.head
//         while (counter != i) {
//             currentNode = currentNode.next
//             counter++
//         }
//         if(currentNode) return currentNode
//         return foundNode
//     }

//     // insert node/ele in given index
//     insertSplice(idx, data){
//         const newNode = {
//             value: data,
//             next: null
//         }
//         const leaderNode = this.findNode(idx)        
//         const nextNode = leaderNode.next
//         leaderNode.next = newNode
//         newNode.next = nextNode
//     }

//     // remove node/el
//     removePop(idx){
//         // debugger               
//         let leaderNode, restNode;
//         if(idx === 0){
//             leaderNode = this.findNode(idx)                
//             restNode = leaderNode.next
//             this.head = restNode
//         }  else{      
//             leaderNode = this.findNode(idx - 1)                
//             restNode = leaderNode.next
//             const nextNode = restNode.next
//             leaderNode.next = nextNode
//         }
//         // len of node
//         this.length--
//     }
    

// }
// const list = new linkedList(10);
// list.appendPush(20)
// list.appendPush(40)
// list.insertSplice(1, 30)
// list.removePop(1)
// console.log(list.head)
// list.findNode(2)
// console.log(list)
// console.log(list.remove())


// const a = {
//     value: 10,
//     next: null
// }

// // changing in a
// let b = a
// const n1 = {
//     value: 20,
//     next: null
// }
// b.next = n1

// // changing n1 value
// b = n1
// console.log(a, b)
// const n2 = {
//     value: 30,
//     next: null
// }
// b.next = n2

// // changing n2 value
// b = n2
// const n3 = {
//     value: 40,
//     next: null
// }
// b.next = n3
