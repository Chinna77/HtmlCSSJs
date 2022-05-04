import Person1 from './learnClass'
let person = {
  firstName: "Neera",
  secondName: "Chinna",
  age: 1,
  fullname : function(){
      this.firstName+' '+ this.secondName
  }
};


console.log(person.age)
for(let key in person){
    console.log(person[key])
}

let nee = new Person1();
nee.printNameAge()

