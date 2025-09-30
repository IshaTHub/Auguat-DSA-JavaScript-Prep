//call() 

//function borrowing 

let name1 = {
    firstName: "prarthna",
    lastName: "verma"
}

let name2 = {
    firstName: "palak",
    lastName : "saxena"
}

let printFullName = function (town, state){
    console.log(this.firstName + " " + this.lastName + ", " + town + ", " + state);
}

//first argument is reference to which object we want to bind this keyword
//second argument is the parameter of the function
printFullName.call(name2, "agra", "up");

//apply()
//first argument is reference to which object we want to bind this keyword
//second argument is list of arguments that has to be passed to the function
printFullName.apply(name2, ["agra", "up"]);
printFullName.apply(name1, ["shimla", "hp"]);


//bind()
// it makes copy of printFullName function and stores it in printMyName variable
let printMyName = printFullName.bind(name1, "shimla", "hp");
printMyName();
