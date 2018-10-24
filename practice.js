//Objects are a collection of properties used to store data and methods.
//These can be used for a variety of things

//step 1 define the class

class Student {
    // set up the constuctor

    constructor(_name, _projectGrade, _testGrade) {
        console.log("Student is being created")

        //define the objects properties using the attributes from the constructor

        this.name = _name
        this.projectGrade = _projectGrade
        this.testGrade = _testGrade


    }
    //deifine methods
    getAverage() {
        return (this.projectGrade + this.testGrade) / 2
    }
    printDetails() {
        console.log(`My name is ${this.name} and I am a Web Development Student. 
        My project grade is ${this.projectGrade} and my test grade is ${this.testGrade}.`)
    }

}
//create new instance of the objects

let student1 = new Student("Ivana", 85, 90)
let student2 = new Student("Montrease", 100, 70)
let student3 = new Student("Vincent", 90, 88)


// add properties
student1.age = 25

// add methods

student1.talk = function(){
    return(`I am ${this.age}, and I want to be a developer!`)
}

//delete
delete student1.age

