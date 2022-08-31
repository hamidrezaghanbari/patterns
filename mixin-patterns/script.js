// ** Mixin patterns
// ?? Add functionality to objects or classes without inheritance
// A mixin is an (pure object) that we can use in order to add reusable functionality to
// another object or class, without using inheritance. We can't use mixins on their
// own: their sole purpose is to add functionality to objects or classes without
// inheritance
// ?? Object.assign: This method lets us add properties to the target object

class Car {
  constructor(name) {
    this.name = name;
  }
}

const mixinCarFeatures = {
  goRight: () => console.log("go Right"),
  goLeft: () => console.log("go Left"),
};

// ** Each new instance of Car will have
// ** access to the the properties of mixinCarFeatures, as they're added to
// ** the Car's prototype!

Object.assign(Car.prototype, mixinCarFeatures);

const bmw = new Car("BMW");
const benz = new Car("BENZ");

// ** Perfect! Mixins make it easy for us to add custom functionality to classes or 
// ** objects without using inheritance.
