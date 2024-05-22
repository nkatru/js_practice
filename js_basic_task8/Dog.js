import Animal from "./Animal.js";

export default class Dog extends Animal {
  constructor(color, name, teeth, behavior, tail) {
    super(color, name, "Dog");
    this.teeth = teeth;
    this.behavior = behavior;
    this.tail = tail;
  }

  isBark() {
    console.log(`${this.type} is barking!`);
  }
  doingTrick() {
    console.log(`${this.name} doing cool tricks!`);
  }
}
