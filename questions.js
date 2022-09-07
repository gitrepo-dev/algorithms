// 'use strict'

// notes
// this keyword is implicit medthod to bind a value into obj
// in js everything is a obj

// this keyword always gets the value from its parent

// here this in the fn always get the value from its parent fn so now window is a parent for the this fn and the value is a it will return undefined in strict mode

// -----------no 1----------
// this.a = 5
// function getthis() {
//   console.log(this)
//   console.log(this.a)
// }
// getthis()
// // both same in this situation
// const getthis2 = () => {
//   console.log(this)
//   console.log(this.a)
// }
// getthis2()

// -----------no 2----------
// always get the parents but not in the arrow fn only it will behave same in the normal fn
// const user = {
//   name: 'jay',
//   getname: function (){
//      // this will target to its parent in this case user is parent
//     console.log(this, 'will target parent 1')
//   },
//   childobj: {
//     name: 'sean',
//     childname: function (){
//       // this will target to its parent in this case childobj is parent
//       console.log(this, 'will target parent 2')
//     }
//   }
// }
// user.getname()
// user.childobj.childname()


// -----------no 3----------
// in the arrow function they will alway target to parent fn which is window if you want change the behaver then you have to them inside a normal fn same for class in the class it will target to its parent for ex constructor
// const user = {
//   mname: 'jay',
//   getname: (mname) => {
//     // this will target to its parent in this case window is parent and in window has no mname it will return undefined
//     this.mname = mname
//     console.log(this.mname, 'will target parent 1')
//   },
//   childobj: {
//     mname: 'sean',
//     childname: () => {
//       // this will target to its parent in this case window is parent and in window has no mname it will return undefined
//       console.log(this.mname, 'will target parent 2')
//     }
//   }
// }
// user.getname('abc')
// user.childobj.childname()


// -----------no 4----------
// ex for arrow same for class in the class it will target to its parent for ex constructor
// const user = {
//   name: 'jay',
//   getname: () => {
//     // this will target to its parent in this case user is parent
//     console.log(this, 'will target parent 1')
//   },
//   childobj: {
//     name: 'sean',
//     childname: function () {
//       // this will target to its parent in this case childobj is parent
//       console.log(this, 'will target parent childobj')
//       const arrow = () => {
//         console.log(this, 'will target parent childobj')
//       }
//       arrow()
//     }
//   }
// }
// user.getname()
// user.childobj.childname()


// -----------no 5-----------
// const user = {
//   name: 'jay',
//   message(){
//     console.log(this.name)
//   }
// }
// it will give you blank or undefined because you are calling it as a callback not method of user obj so it settimeout will copy the all code which inside of message method then run so i will not target this as window cuz not get the message it will show you blank or undefined cuz call back not call as a method
// setTimeout(user.message, 1000)
// function sname(callback) {
//   callback() // i will give you undefined cuz callback not return anything
// }
// // undefind
// sname(user.message)


// -----------no 6-----------
// const user ={
//   name: 'jay',
//   greet(){
//     return 'greet', this.name
//   },
//   message: () =>{
//     return 'arrow', this.name
//   }
// }
// message will return blank or undefined because arrow fn always ref its parent fn so in this case window obj is as parent of message and in window obj has no any name key/var
// console.log(user.greet())
// console.log(user.message())



// -----------no 7-----------
// var length = 4
// function callback() { 
//   console.log(this.length)
// }
// callback()

// const user ={
//   length: 5,
//   method(fn){
//     fn()
//   }
// }
// // // in this case it will ref to var length 4 cuz it is calling as callback or args
// user.method(callback)


// -----------no 8-----------
// var name = 'jay'
// function callback() {
//   console.log(this.length)
// }
// const user = {
//   length: 5,
//   // arguments will err cuz it not avalible in arrow fn use normal fn insted
//   method() {
//      arguments[0]()
//   }
// }
// // //your are calling callback as args so cb will ref to its args length which is 3 "cb, 2, 3" so in this keyword length wil be 3 cuz arguments[0]() ref its args and args lenth is 3
// user.method(callback, 2, 3)


// -----------no 9-----------


// const user1 = {
//   name: 'jay',
//   fn1 : function() {
//     console.log(this, 'fn1')
//     const fn2 = () => {
//       console.log(this, 'fn2')
//       const fn3 = () => {
//         console.log(this, 'fn3')
//       }
//       fn3()
//     }
//     fn2()
//   }
// }
// user1.fn1()

// both three will give window obj
// const fn1 = () => {
//   const name = 'jay'
//   console.log(this, 'fn1')
//   const fn2 = () => {
//     console.log(this, 'fn2')
//     const fn3 = () => {
//       console.log(this, 'fn3')
//     }
//     fn3()
//   }
//   fn2()
// }
// fn1()

// same as above all three give window obj
// function fn1() {
//   const name = 'jay'
//   console.log(this, 'fn1')
//   function fn2() {
//     console.log(this, 'fn2')
//     function fn3() {
//       console.log(this, 'fn3')
//     }
//     fn3()
//   }
//   fn2()
// }
// fn1()

// -----------------no 10--------------------
// function ab(){
//   function cd () {
//     // var self = this;
//     console.log(this)
//     // console.log(self)
//   }
//   cd()
// }
// ab()


// const obj = {
//   name: "jay",
//   ab: function () {
//     var self = this
//     console.log(this.name)
//     console.log(self.name)
//     const cd = () => {
//       console.log(this.name)
//       console.log(self.name)
//     }
//     cd()
//   }
// }

// obj.ab()