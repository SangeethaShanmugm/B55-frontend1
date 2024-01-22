// pending, fulfilled, rejected
const num = 1

// let promise = new Promise((resolve, reject) => {
//     if (num == 10) {
//         resolve("Equal")
//     } else {
//         reject("Not Equal")
//     }
// })
// console.log(promise)



//promise chaining 

function count(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(value * 2)
        }, 2000)
    })
}
console.log(count(5))

count(5).then((res) => {
    console.log(res)
    return count(res)//return a promise => 10
}).then((res1) => {
    console.log(res1)
    return count(res1)//20
}).then((res2) => {
    console.log(res2)
    return count(res2)//40
}).catch((err) => console.log(err))


// callback(()=>{})


function sum(a) {
    return a * 2
}
console.log(sum(5))
console.log(sum(6))
console.log(sum(9))