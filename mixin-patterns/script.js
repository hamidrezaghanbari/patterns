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

// ** Although we can add functionality with mixins without inheritance, mixins themselves can use inheritance!
class BMW {
  constructor(germanName) {
    this.germanName = germanName;
  }
}

const mixinBMWFeatures = {
  // ** bellow line is same as i say Object.assign(mixinBMWFeatures, mixinCarFeatures)
  // __proto__: mixinCarFeatures,
  sayYourCountry: () => console.log("made in Germany"),
  goRight: () => {
    super.goRight();
    console.log("go right faster than other cars");
  },
};

Object.assign(mixinBMWFeatures, mixinCarFeatures);
Object.assign(BMW.prototype, mixinBMWFeatures);

const powerfulBMW = new BMW("BMW!");

// TODO for more think and work about bellow lines
// ** Mixins were often used to add functionality to React components before the introduction of ES6 classes. 
// ** The React team discourages the use of mixins as it easily adds unnecessary complexity to a component,
// ** making it hard to maintain and reuse. The React team encouraged the use of higher order components instead, 
// ** which can now often be replaced by Hooks.

// !! Mixins allow us to easily add functionality to objects without inheritance by injecting functionality 
// !! into an object's prototype. Modifying an object's prototype is seen as bad practice,
// !! as it can lead to prototype pollution and a level of uncertainty regarding 
// !! the origin of our functions.