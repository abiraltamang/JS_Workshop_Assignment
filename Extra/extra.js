// Task 1 - Create a variable to store the name of the city you live in and test it on the console.

var myCity="Kathmandu";
console.log("I live in "+myCity+" city.")


// Task 2 - Create a variable named isProgrammingEngaging and supply any boolean value you prefer to supply.

let isProgrammingEngaging=true;

if (isProgrammingEngaging ==true){
    console.log("You are learning it !")
}


// Task 3 - Let's suppose I want to store my age, what would be the appropriate data type to store age, and initialize that variable with the appropriate value. In the end, don't forget to see it on the console and finally analyze the result.

let myAge;
myAge=21;
console.log("You are "+myAge+", Welcome to adulthood ! Remember, there will be  failure  as well as success, and there will be heartache as well as love.");


// Task 4 - I want to store a value that represents nothingness into a variable, let's say the variable name is totalUsers, what would be the preferred value to store there? 

let totalUsers=null;
console.log(totalUsers);

// Task 5 - what might be the solution in case if I wanted to store a phone number into  a variable, which data type would suit this scenario

let phoneNumber = 9812345678;   //integer data types is suitable for this 


// Task 6 - Scenario: I wanted to store data related to a specific object. For that create an object which would store some information related to the laptop you use.

let myLaptop={
    brand       :"Dell",
    processor   :"i5-6th generation",
    ram         :4,
    screenSize :15.6,
    touch       :false

};

// Task 7: Create an object where the object keys store values of different data types and use typeof operator to check the data type of the value that you stored into it.

let myCar={
    color       :"red",
    brand       :"Tesla",
    compression :21.5,
    noOfDoors   :3,
    satisfactory:true,
    topSpeed    :undefined,  
};
console.log(typeof myCar.color);
console.log(typeof myCar.noOfDoors);
console.log(typeof myCar.topSpeed);



// Task 8: use typeof operator to check the value returned by the prompt() function4

let userInput=prompt("Type something");
console.log(typeof userInput);


// Task 9: Create a constant that holds a value called red in BG_COLOR constant.
const BG_COLOR ="red";





// Task 10: try to declare the constant without assigning the value to it and see the result, also try to re-assign the value to the same constant and see the result.

// const xyz; //it provides syntaxerror : Missing initializer in const declaration

const xyz=567; //initializing xyz at time of declaration to avoid Syntaxerror
console.log(xyz);
// xyz=342; // We can't re-assign value to the same constant


    
