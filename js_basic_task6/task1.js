function printIntervalRec(start, finish) {
  if (finish > start) {
    console.log(start);
    return printIntervalRec(start + 1, finish);
  } else {
    return finish;
  }
}
console.log(printIntervalRec(1, 10));
