let email = "daniel.abrams@gmail.com";
let newArr = [];
let newEmail;

newArr = email.split("@", 2);
newArr.splice(1, 1, "changed.com");
newEmail = newArr.join("@");
console.log(newEmail);
