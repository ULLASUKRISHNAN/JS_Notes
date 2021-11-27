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
