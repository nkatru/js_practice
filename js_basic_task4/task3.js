const emails = [
  "example1@yahoo.com",
  "myemail@mail.com",
  "trueemail@gmail.com",
];
let gmailEmails = [];
let domainToFind = "@gmail.com";

gmailEmails = emails.filter((email) => email.match(domainToFind));
console.log(gmailEmails);
