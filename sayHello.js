class Person{
    constructor(_name){
        this.name = _name
    }

    sayHello(){
        console.log(`Hello, my name is ${this.name}` )
    }

}

let names = ["devan", "val", "deon", "izaak", "maurice", "kamaria"]
let people = [];

let person1 = new Person(names[1])
let person2 = new Person(names[4])

people.push(new Person(names[0])), new Person(names[5])
people.push(person1, person2)



for(i in names){
    people.push(new Person(names[i]))
}


for(i in names){
    console.log(names[i])
}

// make a for loop that loops through every person and makes them say "hello". 
// Use the new for loop technique

for(i in people){
    people[i].sayHello()
}