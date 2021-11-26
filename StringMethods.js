/**======================
 *    String.charAt()
 *========================**/

const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(`The character at index 4 is ${sentence.charAt(4)}`);

/**======================
 * charCodeAt/codePointAt
 *========================**/

const letter = '🔥';

console.log(letter.charCodeAt()); //Returns integer between 0 and 65535 representing the UTF-16.
console.log(letter.codePointAt()); //Returns non-negative integer that is the UTF-16 code point value.

/**======================
 * concat()
 *========================**/
console.log(sentence.concat(letter));

/**======================
 * endsWith()
 *========================**/
let checkTill = sentence.length;
console.log(sentence.endsWith('dog.', checkTill));

/**======================
 * fromCharCode/fromCodePoint
 *========================**/

console.log(String.fromCharCode(0xd83c, 0xdf04)); // surrogate pair. The range is between 0 and 65535
console.log(String.fromCodePoint(0x1f304));

/**======================
 * includes()
 *========================**/
console.log(sentence.includes('brown'));

/**======================
 *    indexOf()
 *========================**/

console.log(sentence.indexOf('t')); // indexOf(searchValue, fromIndex)

/**======================
 *    lastIndexOf()
 *========================**/

console.log(sentence.indexOf('t'));

/**======================
 *    localeCompare()
 *========================**/

console.log('check'.localeCompare('against'));
// Alphabetically the word "check" comes after "against" yielding a positive value

/**======================
 *    padEnd()
 *========================**/

console.log(sentence.padEnd(sentence.length + 2, '.'));

/**======================
 *    padStart()
 *========================**/

console.log(sentence.padStart(sentence.length + 2, '*-#$%$@'));

/**======================
 *     String.raw
 *========================**/

console.log(String.raw`D:\Development\profile\aboutme.html`);

/**======================
 *    repeat()
 *========================**/

console.log(sentence.repeat(2));

/**======================
 *    replace / replaceAll
 *========================**/
console.log(sentence.replace('The', 'A'));
// console.log(sentence.replaceAll('the', 'A'));

/**======================
 *    search()
 *========================**/
console.log(sentence.search('The'));

/**======================
 *    Slice()
 *========================**/

console.log(sentence.slice(1, 23));

/**======================
 *    split
 *========================**/

console.log(sentence.split(' '));

/**======================
 *    subString
 *========================**/

console.log(sentence.substring(10)); //substring(indexStart, indexEnd)

/**======================
 *    Lower / Upper Case
 *========================**/
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

/**======================
 *    toString()
 *========================**/
const stringObj = new String('foo'); // new String object is created

console.log(stringObj.toString()); // object is converted to string

/**======================
 *    trim() ⬇
 *========================**/

sentence.padStart(sentence.length + 2, ' ');
console.log(sentence.trim());

/**======================
 *    trimEnd() ⬇
 *========================**/

sentence.padEnd(sentence.length + 2, ' ');
console.log(sentence.trimEnd());

/**======================
 *    trimStart() ⬇
 *========================**/

console.log(sentence.padStart(sentence.length + 2, ' '));
console.log(sentence.trimStart());

/**======================
 *    valueOf()
 *========================**/
const stringObj1 = new String('string');
console.log(stringObj1.valueOf());
