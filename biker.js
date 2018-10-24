class Person {
    constructor(_name, _head, _torso, _lLeg, _rLeg, _lArm, 
_rArm, _lFoot, _rFoot, _lHand, _rHand, _Profession) {
        console.log("this is a body")
        this.name = _name
        this.head = _head
        this.torso = _torso
        this.lLeg = _lLeg
        this.rLeg = _rLeg
        this.lArm = _lArm
        this.rArm = _rArm
        this.lFoot = _lFoot
        this.rFoot = _rFoot
        this.lHand = _lHand
        this.rHand = _rHand
        this.Profession = _Profession
    }
    startBike() {
        console.log(`got the ${this.lHand} about to ride`)

    }
    lookForKeys() {
        if (this.lHand === "keys" || this.rHand === "keys") {
            this.startBike()

        } else {
            console.log("hotwire bike and start it anyway")
            this.startBike()
        }

    }

}


let proTag = new Person("T.D. Jakes", "helmet", "leather jacket",
"Dragon Ball Z tattoo", "Knee Pad", 
"watch", "tattoo", "Air Jordon 11 Bred", "Air Jordon 11 Bred", 
"keys", "Cell Phone", "Preacher")

console.log(proTag.name)
proTag.lookForKeys()