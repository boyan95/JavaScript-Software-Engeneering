function biggerHalf(input) {
  const compareNumbers = input.sort((a, b) => a - b);
  return compareNumbers.slice(Math.floor(compareNumbers.length / 2));
}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
console.log("----");
console.log(biggerHalf([4, 7, 2, 5]));
