import { printTextWithDelay } from "./task1.js";

function delayedPrint(text, seconds, callback) {
  setTimeout(() => {
    callback(text, seconds);
  }, seconds);
}

delayedPrint("This is first", 3, printTextWithDelay);
