// class => blueprint of an object

class House {
    constructor() {
        this.type = "3bhk",
            this.color = "skyblue"
    }
}

const house1 = new House() //creating an object

console.log(house1)
//House {type: '3bhk', color: 'skyblue'}

class House1 {
    constructor(type, color) {
        this.type = type,
            this.color = color
    }
}

//create an object 

const h1 = new House1("2bhk", "blue")
const h2 = new House1("4bhk", "green")
console.log(h1, h2)
//House1 {type: '2bhk', color: 'blue'} 
//House1 {type: '4bhk', color: 'green'}



class Car {
    constructor(carname, speedlimit) {
        this.carname = carname,
            this.speedlimit = speedlimit
    }

    //define method

    welcome() {
        console.log(`Hey my car name is ${this.carname} and its speed is ${this.speedlimit}`)
    }
}

let car1 = new Car("VW", "250km/hr")
let car2 = new Car("BMW", "300km/hr")

console.log(car1, car1.carname)
//Car {carname: 'VW', speedlimit: '250km/hr'} 'VW'
car1.welcome()//Hey my car name is VW and its speed is 250km/hr
car2.welcome()//Hey my car name is BMW and its speed is 300km/hr