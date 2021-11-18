// Task 6 - Create an object using object literal syntax and use variable name email for creating an object, create properties like: sendTo and sentFrom properties and give values to it, create send method which will log the message like "message sent."

let email={
    sendTo:"itsnp@gmail.com",
    sentFrom:"abc@gmail.com",
    status: function () {
        console.log("Message sent")        
    }
};

email.status(); //Displays message sent in console