//function currying is making a copy of a function and creating more methods out of it.


//using bind method for currying

let multiply = function(x,y,z){
    console.log(x*y*z);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(5);

let multiplyByFour = multiply.bind(this,4,4);
multiplyByFour(5);
// it will ignore 5 and take 4 and 4 as arguments o/p:16

let multiplyByFive = multiply.bind(this,6);
multiplyByFive(5,3);
// it will ignore 3 and take 6 and 5 as arguments o/p:30


//using closures for currying

let multi = function(x){
    return function(y){
        console.log(x * y);
    }
}

let multiTwo = multi(20);
multiTwo(10);