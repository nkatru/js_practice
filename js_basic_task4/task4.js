const names = ["John", "Fernando", "Alexandra", "Anatolii", "Arina", "Elon"];
let nameToFind;

nameToFind = names.find((value) => {
  return value.length > 5;
});
console.log(nameToFind);
