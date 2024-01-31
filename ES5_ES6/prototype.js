
//constructor function

function Student(name, batch) {
    this.name = name,
        this.batch = batch
}
//creat object 

const s1 = new Student("jack", "b55")

console.log(s1.name)//jack

//add property
//syntax  => constructorFunctionName.prototype.prototype/Key ="value"
Student.prototype.gender = "male"
Student.prototype.name = "peter"
Student.prototype.age = 20

Student.prototype.welcome = function () {
    console.log(`hello I am ${this.name}`)
}

console.log(Student.prototype)
console.log(s1.gender)
console.log(s1.name)

const s2 = new Student("john", "b55")
console.log(s2.gender)
console.log(s2.name)