// scoping => lifetime of a variable
//{} => block
// let, const  => block scope

{
    var a = 10;
    let b = 20
}

console.log(a)

//not defined(error) vs undefined(value)

//can a block hold var or will it leak outside?


let price = 1000; //Pant

function getPrice() {
    console.log("The old price is", price)
    //1000 lines
    var price = 500;// MSD
    console.log("The new Price is", price)
}

getPrice()

// lexical scope & hoisting

// closure

function outerFun() {
    let a = 20;
    function innerFunc() {
        console.log(a)
    }
    return innerFunc
}

outerFun()()//20


//hoisting

//JIT => Just In Time compilation
//code => binary(byte code)

//phases
// 1. compilation phase => console.log() => skip
// 2. execution phase => JS, context

//example => var 
// 1. compilation phase
console.log(z)//skip
var z = 20//JS  => Do you know z ? No || What is the value? => Context => undefined
console.log(z)//skip

// 2. execution phase
console.log(z)//JS  => Do you know z ? Yes || What is the value? => Context = undefined
var z = 20//JS  => Do you know z ? Yes ||  What is the value? => Context => note down => 20
console.log(z)//JS  => Do you know z ? Yes ||  What is the value? => Context => 20



//example => let
// 1. compilation phase
// console.log(x)//skip
// let x = 20//JS  => Do you know x ? No || What is the value? => Context => don't initialize
// console.log(x)//skip


// 2. execution phase
// console.log(x)//JS  => Do you know x ? Yes || What is the value? => Context => throw error => Uncaught ReferenceError: Cannot access 'x' before initialization
// let x = 20
// console.log(x)
