/* eslint-disable prettier/prettier */
class Person {
  constructor(name, uid) {
    this.name = name;
    this.uid = uid;
  }
}

const persons = new Map();

const createPerson = (name, uid) => {
  const existingPerson = persons.has(uid);

  if (existingPerson) return persons.get(uid);

  const person = new Person(name, uid);
  persons.set(uid, name);
  return person;
};

createPerson("mike", 1);
createPerson("john", 2);
createPerson("john", 2);
createPerson("mike", 1);

console.log(persons.size);
