const age = 20
const batch = "B55WD"
const mark = 90


const student = {
    name: "Adhithyan",
    age: age,
    batch: batch
}

console.log(student)

//object shorthand  => key & value name should be same


const student1 = {
    name: "Adhithyan",
    age,
    batch,
    score: mark
}

console.log(student1)


// function destructuring 


function printDetails(student1) {
    return student1.name + " has got " + student1.score + " he belongs to " + student1.batch

}

console.log(printDetails(student1))
//Adhithyan has got 90 he belongs to B55WD


function printDetails1(student1) {
    const { name, score, batch } = student1
    return name + " has got " + score + " he belongs to " + batch
}

console.log(printDetails1(student1))


//destructuring in argument itself
function printDetails2({ name, score, batch }) {
    return name + " has got " + score + " he belongs to " + batch
}

console.log(printDetails2(student1))

//template literals => ES6
// `` => backtick   +  ${}=> interpolation => substitute the value

function printDetails3({ name, score, batch }) {
    return `${name} has got ${score} he belongs to ${batch}`
}

console.log(printDetails3(student1))


//arrow function + destructuring + template literals => ES6 

const printDetails4 = ({ name, score, batch }) => `${name} has got ${score} he belongs to ${batch}`

console.log(printDetails4(student1))
