/**======================
 *    assign()
 *========================**/
// It returns the modified target object.
// original object gets modified
'use strict';
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);

//❕❕  Object.assign(target, ...sources)

/**======================
 **      Object.create()
 *========================**/

//Object.create(proto, propertiesObject);
//specify property descriptors to be added to the newly-created object  => propertiesObject

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);
// A new me object is created same as person

/**======================
 *    Object.entries()
 *========================**/

const object1 = {
  a: 'somestring',
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
// returns an array of a given object's

/**======================
 *    Object.freeze()
 *========================**/

const obj1 = {};

Object.freeze(obj1);
// A frozen object can no longer be changed;

/**======================
 *    Object.fromEntries()
 *========================**/

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42],
]);
console.log(entries);
const obj = Object.fromEntries(entries);

console.log(obj);
// return the object with key value pair
//Object.fromEntries(iterable);

/**======================
 *    Object.is()
 *========================**/
console.log(Object.is(25, 25));
//Object.is(value1, value2); compares value1 and value 2

/**======================
 *    Object.isSealed()
 *========================**/

Object.isSealed(obj);
// checks if the object is a sealed

/**======================
 *    Object.keys()
 *========================**/

console.log(Object.keys(object1));
// return the keys

/**======================
 *    Object.seal()
 *========================**/
//properties cannot delete when sealed
//  preventing new properties from being added

Object.seal(object1);

/**======================
 *    Object.values()
 *========================**/
console.log(Object.values(object1));

//return the values of the object
