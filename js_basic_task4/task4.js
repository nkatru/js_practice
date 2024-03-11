const names = ["John", "Fernando", "Alexandra", "Anatolii", "Arina", "Elon"];
let nameToFind;

for (let nme of names) {
  if (nme.length > 6) {
    console.log(nme);
    break;
  }
}
