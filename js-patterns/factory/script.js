// ** factory function is: function is a factory function when it returns a new object without the use of the new keyword!
const createObjectFactory = ([key, value]) => ({
  [key]: value,
});
const myCustomObject = createObjectFactory(["name", "hamid"]);
// ** The factory pattern can be useful if we're creating relatively
// ** complex and configurable objects. It could happen that the values
// ** of the keys and values are dependent on a certain environment or
// ** configuration. With the factory pattern, we can easily create new objects
// ** that contain the custom keys and values!
console.log(myCustomObject);

// ** the same thing that factory do
class PersonClass {
  constructor(key, name) {
    this[key] = name;
  }
}

const person = new PersonClass("name", "hamid");
console.log(person);
