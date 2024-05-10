
class Person{
    constructor(nationality,gender,name,age){
        this.nationality = nationality;
        this.gender = gender;
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(this.name+" can speak alone");
    }

}

class Parent extends Person{
 constructor(nationality,gender,name,age,numberChildren){
    super(nationality,gender,name,age)
    this.numberChildren = numberChildren;
        
    }

    speak(){
        console.log(this.name+" can speak with his children ");
    }
}

class Worker extends Parent{
    constructor(nationality,gender,name,age,numberChildren,profession){
       super(nationality,gender,name,age,numberChildren)
       this.profession = profession;
           
       }
    


   }

   let person1 = new Person('Gabonese','male','charles',26);
   let parent1 = new Parent('Ethiopian','Female','Marguerite',22,2)
   let worker1 = new Worker('Senegal','Male','Leo',26,12,'developer');

   worker1.speak();

   /*
   
   Abstract is when a class does not redefine a method defined in the class it is extended from but call the method from the parent 
   (Example : the  method speak is not defined in Worker but we can call it)
   
   */