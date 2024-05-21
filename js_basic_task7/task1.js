const child = {
  name: Andrew,
  age: 1,
  eyesColor: brown,
  isCrying() {
    console.log(`${this.name} is crying`);
  },
  isHungry() {
    console.log(`${this.name} is want to eat`);
  },
};

const bottle = {
  typeOfWater: mineral,
  color: black,
  taste: sweet,
  drink() {
    console.log(`${this.typeOfWater} water is ${this.taste}`);
  },
  checkTheColor() {
    console.log(`${this.typeOfWater} water is ${this.color}`);
  },
};

const door = {
  size: huge,
  color: brown,
  keyType: card,
  isOpen() {
    console.log(`Current door is open by ${this.keyType}`);
  },
  checkTheColor() {
    console.log(`Current door color is ${this.color}`);
  },
};
