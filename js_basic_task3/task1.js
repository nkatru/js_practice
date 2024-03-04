function changeVowelLetterToAsterisk(inputValue) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let modifiedString = "";
  for (i = 0; i < inputValue.length; i++) {
    if (vowels.includes(inputValue[i])) {
      modifiedString += "*";
    } else {
      modifiedString += inputValue[i];
    }
  }
  console.log(modifiedString);
}
changeVowelLetterToAsterisk("Hello");
