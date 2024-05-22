export default class Animal {
  sayHello() {
    console.log(`Hello from ${this.type}!`);
  }
  run() {
    console.log(`Look! The ${this.name} is running!`);
  }
  constructor(color, name, type) {
    this.color = color;
    this.name = name;
    this.type = type;
  }
}
