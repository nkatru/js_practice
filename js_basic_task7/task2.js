const dog = new Object();
dog.name = 'Deer';
dog.color = 'white';
dog.age = 'old';
dog.info = function(){
    return (`My dogs name is ${this.name}. It is ${this.color} and ${this.age}.`)
}
console.log(dog);
console.log(dog.info());

const city = new Object();
city.name = 'Israel';
city.population = 1324356;
city.tempOutside = 35;
city.checkTheTemp = function() {
    return (`The temperature in ${this.name} was ${this.tempOutside} degrees today. It is really hot.`)
}

console.log(city);
console.log(city.checkTheTemp());
