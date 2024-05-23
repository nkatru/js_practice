export function printTextWithDelay(textToPrint, time) {
  if (time <= 0) {
    throw Error(`Time can't be equal 0 or negative.`);
  }
  const seconds = time * 1000;
  setTimeout(function () {
    console.log(textToPrint);
  }, seconds);
}
printTextWithDelay("This is second", 5);
