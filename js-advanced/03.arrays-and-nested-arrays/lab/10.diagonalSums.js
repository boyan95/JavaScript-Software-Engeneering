function diagonalSums(input) {
  let sum1 = 0;
  let sum2 = 0;

  for (arr = 0; arr < input.length; arr++) {
    sum1 += input[arr][arr];
  }
  for (arr = 0; arr < input.length; arr++) {
    sum2 += input[arr][input.length - 1 - arr];
  }

  console.log(sum1, sum2);
}
diagonalSums([
  [20, 40],
  [10, 60],
]);
console.log("--------");
diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
