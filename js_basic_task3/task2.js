function changeSymbolToAsterisk(inputValue, symbol) {
  let modifiedString = "";
  for (i = 0; i < inputValue.length; i++) {
    if (symbol.includes(inputValue[i])) {
      modifiedString += "*";
    } else {
      modifiedString += inputValue[i];
    }
  }
  console.log(modifiedString);
}
changeSymbolToAsterisk("Testestetsrtetstetste", "e");
