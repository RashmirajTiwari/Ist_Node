const product=(a,b)=>a*b;
console.log(product(1,2));

const student={
    Name:"Rashmiraj",
    Age:25,
    greet(){
        console.log("Hi my name is "+this.Name+" and my age is "+this.Age)
    }
}
student.greet();

var fruits=['Apple','','Lemon','','Banana'];

console.log(fruits.map((fruit)=>{
    if(fruit===''){
        return 'empty string'
    }else{
        return fruit
    }
}))

const hobbies=['Cooking','sports'];
hobbies.push('programming');
console.log(hobbies);

//Destructuring

const [hobby1,hobby2]=hobbies;
console.log(hobby1,hobby2)

const {Name,Age}=student;
console.log(Name,Age)

const result=({Name})=>Name;
console.log(result(student))