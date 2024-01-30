const profile = ["Ravikiran", "Adhithyan", "Ajay"]
//                 0              1           2
console.log(profile[0])

//array destructure

const studentDetails = ["Ravi", "kiran", "ravi@gmail.com"]

const [firstName, lastName, email] = studentDetails

console.log(firstName)
console.log(email)



const [first, last, Email, age = 23] = ["Ravi", "kiran", "ravi@gmail.com", 25]

console.log(age)