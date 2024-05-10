

class Person{
    constructor(nationality,gender,name,age){
        this.nationality = nationality;
        this.gender = gender;
        this.name = name;
        this.age = age;
    }

}

class Parent extends Person{
 constructor(nationality,gender,name,age,numberChildren){
    super(nationality,gender,name,age)
    this.numberChildren = numberChildren;
        
    }
}

class Worker extends Parent{
    constructor(nationality,gender,name,age,numberChildren,profession){
       super(nationality,gender,name,age,numberChildren)
       this.profession = profession;
           
       }
   }

