function processOddPosition(input) {
  let toReturn = [];
// начин 1
  for (let index = 1; index <= input.length; index += 2) {
    toReturn.push(input[index] * 2);
  }
// начин 2
  let oddNumbers = input.filter((v, i) => i % 2 === 1);
  let doubledOddNumbers = oddNumbers.map((x) => x * 2);

  toReturn.reverse();
  return toReturn;
}
console.log(processOddPosition([3, 0, 10, 4, 7, 3]));
console.log(processOddPosition([10, 15, 20, 25]));
