class Product{
    //one underscore before a variable make it protected in javaScript
    //two underscores before a variable make it protected in python
    


    constructor(id,name,type,size){
        this._product_id = id;
        this._product_name = name;
        this.product_type = type;
        this.product_size = size;

        console.log('insatnce created');
    }

    run(){
        return 'Welcome in my program';
    }

    getId(){
        return this._product_id;
    }

    getName(){
        return this._product_name;
    }
    getType(){
        return this.product_type;
    }
    getSize(){
        return this.product_size;
    }

    setId(id){
        return this._product_id = id;
    }

    setName(name){
        return this._product_name = name;
    }
    setType(type){
        return this.product_type = type;
    }
    setSize(size){
        return this.product_size = size;
    }


}

function call(){
    console.log('I am a function');
}

//the difference between the function and the method is that functions are independant of class or instance 
//of class when we call them but a method depends on the instance of a class to be called


let product1 = new Product(23,'tomatoes','legume','small');
console.log(product1.run());
console.log(product1._product_name);


