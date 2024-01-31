//spread => copy, clone array 

let a = ["a", "b", "c"]

let b = [...a]
console.log(a)
console.log(b)

let colors = ["red", "green", "blue"]

let addColor = [...colors]//copy by value

console.log(colors)
console.log(addColor)

addColor.push("orange")

console.log(colors)
console.log(addColor)



//clone

let arr1 = [1, 2, 3, 4]
let arr2 = arr1//same address

console.log(arr1)
console.log(arr2)

arr1.push(4)

console.log(arr1)
console.log(arr2)

//spread operator in object 

const o1 = { x: 1, y: 2 }
const o2 = { z: 3 }

const o3 = { ...o1, ...o2 }

console.log(o3)//{x: 1, y: 2, z: 3}

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1, ...array2]
console.log(combinedArray)

const originalArray = [1, 2, 3]
const copiedArray = [...originalArray]
console.log(copiedArray)
console.log(originalArray)
console.log(originalArray === copiedArray)//false

//Rest parameters => when we use spread operator as a parameter to function

let r1 = function (...a) {
    console.log(a)
}

r1(1)//[1]
r1(1, 2, 3)//[1, 2, 3]
r1(1, 2, 3, 4, 5, 6, 7)// [1, 2, 3, 4, 5, 6, 7]


function add(a, b, c) {
    console.log(a + b + c)
}

const n1 = [1, 2, 3, 4, 5]
add(...n1)

function sample(a, b, ...c) {
    console.log(a)
    console.log(b)
    console.log(c)
}

sample("jack", "john", 'peter', "mick", "anna")