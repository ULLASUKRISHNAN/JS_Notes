//  Array list-like objects.

/**======================
 *    concat()
 *========================**/

let arr = [1, 2, 3, 4];
let arr1 = [5, 6, 7, 8];

console.log(arr.concat(arr1));

/**======================
 *    copyWithin()
 *========================**/

console.log(arr.copyWithin(0, 2, 3));
// copyWithin(target, start, end)

/**======================
 *    entries()
 *========================**/

const a = ['a', 'b', 'c'];

for (const [index, element] of a.entries())
  console.log('index: ' + index, 'value: ' + element);

/**======================
 *    every()
 *========================**/

console.log(arr.every((val) => val > 2));

/**======================
 *    fill()
 *========================**/

console.log(arr.fill(1, 0, 1));

/**======================
 *    filter()
 *========================**/

console.log(arr.filter((val) => val > 2));

/**======================
 *    find()
 *========================**/

console.log(arr.find((val) => val > 2));
// first value matching the condition is returned

/**======================
 *    findIndex()
 *========================**/

console.log(arr.findIndex((val) => val > 3));

/**======================
 *    findIndex()
 *========================**/
const unFlatArr = [0, 1, 2, [[[3, 4]]]];

console.log(unFlatArr.flat(2));
//sub-array elements concatenated into it recursively up to the specified depth.

/**======================
 *    flatMap()
 *========================**/
arr1.map((x) => [x * 2]);

console.log(arr1.flatMap((x) => [x * 2]));
// First maps and then flattens the returned

/**======================
 *    forEach()
 *========================**/
let ratings = [1, 2, 3];
let sum = 0;

let sumFunction = function (a, b) {
  return a + b;
};

ratings.forEach(function (rating) {
  sum = sumFunction(sum, rating);
});
console.log(`The sum is ${sum}`);
//forEach expects a synchronous function.

/**======================
 *    Array.from()
 *========================**/

console.log(Array.from('abcd'));
console.log(Array.from([1, 2, 3], (x) => x + x));
//Array.from(arrayLike, mapFn)

/**======================
 *    includes()
 *========================**/

console.log('Does the arr includes 2 ? ' + arr.includes(2));

/**======================
 *    indexOf()
 *========================**/

console.log('The index of 2 in arr is ' + arr.indexOf(2));

/**======================
 *    Array.isArray()
 *========================**/

console.log('Is the given arr is Array ? ' + Array.isArray(arr));

/**======================
 *    join()
 *========================**/

const list = ['Fire', 'Air', 'Water'];

console.log(list.join('-'));
//join(separator)

/**======================
 *    keys()
 *========================**/

const iterator = arr.keys();

for (const key of iterator) {
  console.log(key);
}

/**======================
 *    lastIndexOf()
 *========================**/
// lastIndexOf(searchElement, fromIndex)
console.log('The last index of 2 in arr is ' + arr.lastIndexOf('2'));

/**======================
 *    map()
 *========================**/

const map1 = arr.map((x) => x * 2);
console.log(map1);
//! WHEN NOT TO USE MAP()

// you're not using the array it returns;
// you're not returning a value from the callback
// use forEach or for...of instead.

/**======================
 *     Array.of() vs Array constructor
 *========================**/
console.log(Array.of(2)); // [2]
console.log(Array(2)); //2 empty items

/**======================
 *    pop()
 *========================**/

console.log(list.pop());
// This will modify the original array
// undefined if the array is empty.

/**======================
 *    push()
 *========================**/

const count = list.push('apple');
console.log(count);
//  returns the new length of the array.

/**======================
 *    reduce()
 *========================**/
//reduce(callbackFn, initialValue)
let total = [0, 1, 2, 3].reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

/**======================
 *    reverse()
 *========================**/

console.log('reversed:', arr.reverse());

/**======================
 *    shift()
 *========================**/

console.log(arr.shift());
// return the removed value and the original array is modfied

/**======================
 *    slice()
 *========================**/

console.log(list.slice(1));
// slice(start, end);

/**======================
 *    some()
 *========================**/

console.log(arr.some((val) => val > 2));
//some(callbackFn)

/**======================
 *    sort()
 *========================**/

// sort((firstEl, secondEl) => { ... } )

console.log(arr.sort((a, b) => b - a));

/**======================
 *    splice()
 *========================**/
// used to y remove or replace existing elements in array
//splice(start, deleteCount, item1, item2, itemN)

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);

/**======================
 *    toLocaleString()
 *========================**/

console.log(arr.toLocaleString());
//string representing the elements of the array.
// this takes some locale as arguments

/**======================
 **      toString()
 *========================**/
console.log(arr.toString());

/**======================
 *    unshift()
 *========================**/

console.log(arr.unshift());
//The elements to add to the front of the arr.

/**======================
 *    values()
 *========================**/

console.log(arr.values());
//returns array iterator object

arr = ['a', 'b', 'c', 'd', 'e'];
let values = arr.values();
for (let letter of values) {
  console.log(letter);
}
