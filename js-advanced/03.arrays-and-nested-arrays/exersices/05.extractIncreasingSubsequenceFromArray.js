function extractIncr(input) {
  let toReturn = [];
  let biggestNum = input[0];
  toReturn.push(biggestNum);

  for (index = 1; index < input.length; index++) {
    let currentNum = input[index];

    if (biggestNum <= currentNum) {
      biggestNum = currentNum;
      toReturn.push(biggestNum);
    } 
  }
  return toReturn;
}
console.log(extractIncr([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log("--------------------------------");
console.log(extractIncr([1, 2, 3, 4]));
console.log("---------------------------------");
console.log(extractIncr([20, 3, 2, 15, 6, 1]));

console.log([1, 3, 8, 4, 10, 12, 3, 2, 24].reduce((acc, curr) => {
  return acc + curr;
}))