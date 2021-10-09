/*

ЛАМБДА ФУКЦИИ ЗА ПОДРЕЖДАНЕ НА ЦИФРОВИ ИЛИ СТРИНГОВИ ARRAY

const compareNumbers = (a, b) => a - b; // от малко към голямо
const compareNumbers = (a, b) => b - a; // от голямо към малко
const compareString = (a, b) => a.localeCompare(b); // от a - z
const compareString = (a, b) => b.localeCompare(a); // от z - a
*/

/*

ДОСТИПВАНЕ НА ИНДЕКСИ ОТЗАД НАПРЕД ГРЕШКИ!!!!

 array отзад напред
let arr = [1, 2, 3, 4, 5];
let a = arr[-1] // undefined
let a = arr[5] // undefined
*/

/*

ДОСТИПВАНЕ НА ИНДЕКСИ ОТЗАД НАПРЕД ПРАВИЛНО!!!!

let arr = [1, 2, 3, 4, 5];
//let a = arr[arr.length - 1] // output 5
let a = arr[arr.length - 2] // output 4
*/

/*

FOR OF

 array for(let el of arr){}
let arr = [1, 2, 3, 4, 5];
for(let el of arr){
    console.log(el) от 1 до 5 едно под друго
}
*/

/*

...ARR

let arr = [1, 2, 3, 4, 5];
let [a, b, ...items] = arr;

console.log(a) // 1
console.log(b) // 2
console.log(items) // [3, 4, 5]
*/

/*
let arr = [1, 2, 3, 4, 5];
arr.pop() //взима последното и го премахва
arr.push(el) // взима el и го слага най отзад
arr.shift() // премахва елементут на 0лева позиция
arr.unshift(el) // поставя елемнта на 0лева позиция
*/

/*

SPLICE

let nums = [1, 3, 4, 5, 6];
nums.splice(1, 0, 2); // inserts at index 1 ПРИ ДОБАВЯНЕ НА ВТОРА ПОЗЦИЯ ТРЯБВА ДА Е 0
console.log(nums); // [ 1, 2, 3, 4, 5, 6 ]
nums.splice(4,1,19); // replaces 1 element at index 4 ПРИ ПОДМЕНЯНЕ
console.log(nums); // [ 1, 2, 3, 4, 19, 6 ]
let el = nums.splice(2,1); // removes 1 element at index 2 ПРИ ПРЕМАХВАНЕ ТРЕТАТА ПОЗИЦИЯ ТРЯБВ ДА Е ПРАЗНА, ИНАЧЕ ПОДМЕНЯМЕ, А НЕ ПРЕМАХВАМЕ
console.log(nums); // [ 1, 2, 4, 19, 6 ]
console.log(el); // [ 3 ]
*/

/*

FILL

let arr = [1, 2, 3, 4];// fill with 0 from position 2 until position 4
console.log(arr.fill(0, 2, 4)); // [1, 2, 0, 0]// fill with 5 from position 1
console.log(arr.fill(5, 1)); // [1, 5, 5, 5]console.log(arr.fill(6)); // [6, 6, 6, 6]
*/

/*

REVERSE

let arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr); // [ 4, 3, 2, 1 ]
*/

/*

JOIN

let elements = ['Fire', 'Air', 'Water'];console.log(elements.join()); // "Fire,Air,Water"
console.log(elements.join('')); // "FireAirWater"
console.log(elements.join('-')); // "Fire-Air-Water"
console.log(['Fire'].join(".")); // Fire
*/

/*

CONCAT

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const numbers = num1.concat(num2, num3);
console.log(numbers); //  [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

/*

SLICE
(end not included)!!!!!

let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
let citrus = fruits.slice(1, 3);
let fruitsCopy = fruits.slice();
// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange', 'Lemon']
*/

/*

INCLUDES - TRUE OR FALSE

// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97
let arr = ['a', 'b', 'c'];
arr.includes('a', -100); // true
arr.includes('b', -100); // true
arr.includes('c', -100); // true
arr.includes('a', -2); // false

*/
 
/*

INDEX OF
Output is -1 if element is not present!!!!!

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // 1// start from index 2
console.log(beasts.indexOf('bison', 2)); // 4console.log(beasts.indexOf('giraffe')); // -1
*/ 

/*

FOR EACH

const items = ['item1', 'item2', 'item3'];
const copy = [];
// For loop
for (let i = 0; i < items.length; i++) {
  copy.push(items[i]);
}
// ForEach
items.forEach(item => copy.push(item););

 */

/*

SOME 

RETURN TRUE OR FALSE!!!!
let array = [1, 2, 3, 4, 5];
let isEven = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};
console.log(array.some(isEven)); //true
*/

/*
EVERY true or false

const isBelowOf40 = (currentValue) > currentValue < 40;

const array = [1, 4, 6, 18, 39, 2]
console.log(array.every(isBelowOf40)); // expected output true
 */

/*

 FIND
 връща първия намерен елемент, но ако няма такъв елемент връща undefined

let array1 = [5, 12, 8, 130, 44];let found = array1.find(function(element) {
  return element > 10;
});
console.log(found); // 12

*/

/*

FILTER

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']; // Filter array items based on search criteria (query)
function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
};console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']

*/

/*

MAP
creates new array

let numbers = ["1", "4", "9"];
let roots = numbers.map(number => Number(number));
let roots = numbers.map(Number); съкратен запис
// roots is now [1, 2, 3]
// numbers is still ["1", "4", "9"]

*/

/* 

REDUCE

sum all values

let sum = [0, 1, 2, 3].reduce((acc, curr) => {
         return acc + curr;},0);
    console.log(sum); // 6

finding an average with reduce()

const numbersArr= [30, 50, 40, 10, 70]; 
const average = 
  numbersArr.reduce((total, number, index, array) => { 
		total += number; 
		if( index === array.length-1) {
 		    return total/array.length; 
		} else {  return total; } 
	}); 
console.log(average) // 40

*/

    