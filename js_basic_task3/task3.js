function listOfEvenNumbers(value1, value2) {
  let start = Math.min(value1, value2)
  let end = Math.max(value1, value2)
  for (i = start; i <= end; i++) {
    if (i % 2 === 0) console.log(i)
  }
}
listOfEvenNumbers(2,90)

