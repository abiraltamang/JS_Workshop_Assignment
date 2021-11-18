//Task 1 - Perform addition, subtraction, multiplication, and division by taking input using the prompt() function and show all the results by concatenating it with a string like: sum is ... , product is ...


let num1;
let num2;

num1=prompt("Enter the 1st Number");
num1=parseInt(num1);

num2=prompt("Enter the 2nd Number");
num2=parseInt(num2);

sum=num1+num2;
sub=num1-num2;
prod=num1*num2;
div=num1/num2;

console.log("Sum is "+ sum);
console.log("Subtraction is "+ sub);
console.log("Product is "+ prod);
console.log("Division is "+ div);


