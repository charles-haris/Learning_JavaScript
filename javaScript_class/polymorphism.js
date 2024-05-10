
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
    
    speak(){
        console.log(this.name+" can speak with his children  and his colleague");
    }

   }

   let person1 = new Person('Gabonese','male','charles',26);
   let parent1 = new Parent('Ethiopian','Female','Marguerite',22,2)
   let worker1 = new Worker('Senegal','Male','Leo',26,12,'developer');

   person1.speak();
   parent1.speak();
   worker1.speak();

   /*
   
   polymorphism is when a class redefine a method defined in the class it is extended from 
   (Example : the  method speak is defined in Person and redefined in Parent and redefined once again in Worker)
   
   */