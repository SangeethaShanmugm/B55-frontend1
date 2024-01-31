// this => access property of an object

let firstName = "Ajay"
let lastName = "kumar"


let sayHi = {
    firstName: "Arun",
    lastName: "kumar",
    welcome: function () {
        console.log(`say hi to ${this.firstName} ${this.lastName}`)
        return `say hi to ${firstName} ${lastName}`
    }
}

console.log(sayHi.welcome())