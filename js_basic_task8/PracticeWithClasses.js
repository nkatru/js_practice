import Dog from "./Dog.js";
import Cat from "./Cat.js";

const dog = new Dog("black", "Henry", "sharp", "angry", "short");

dog.sayHello();
dog.run();
dog.isBark();
dog.doingTrick();

console.log("-------------------------------");

const cat = new Cat("white", "Zooor", "small", "calm", "long");

cat.isMeow();
cat.isLazy();
cat.run();
cat.sayHello();
