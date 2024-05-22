import Animal from "./Animal.js";

export default class Cat extends Animal {
  isMeow() {
    console.log(`${this.type} is meowing all day`);
  }
  isLazy() {
    console.log(`${this.name} just laying on the coach`);
  }
  constructor(color, name, teeth, behavior, tail) {
    super(color, name, "Cat");
    this.teeth = teeth;
    this.behavior = behavior;
    this.tail = tail;
  }
}
