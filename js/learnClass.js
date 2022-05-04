class Person1{
    
    name= "Neera";
    get age(){
        return 1;
    }
    printNameAge() {
        console.log(this.name+ ' ' + this.age)
    }

}
let per = new Person1();
console.log(per.age)
per.printNameAge()
export default Person1;