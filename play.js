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