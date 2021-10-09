function equalNeighbors(input) {
  let sum = 0;
  let matrix = [];
  
  for (let m = 0; m < input[0].length; m++) {
    matrix.push([]);
  }
  for (let arr = 0; arr < input.length; arr++) {
    for (let arr2 = 0; arr2 < input[arr].length; arr2++) {
      matrix[arr2].push(input[arr][arr2]);
    }
  }
  for (let m1 = 0; m1 < matrix.length; m1++) {
    for (let m2 = 0; m2 < matrix[m1].length - 1; m2++) {
      if(matrix[m1][m2] === matrix[m1][m2 + 1]){
        sum += 1;
      }
    }
  }
  for (let m1 = 0; m1 < matrix.length - 1; m1++) {
    for (let m2 = 0; m2 < matrix[m1].length; m2++) {
      if(matrix[m1][m2] === matrix[m1 + 1][m2]){
        sum += 1;
      }
    }
  }
  return sum;
}
console.log(
  equalNeighbors([
    ["2", "2", "5", "7", "4"],
    ["4", "0", "5", "3", "4"],
    ["2", "5", "5", "4", "2"],
  ])
);
console.log("------");
console.log(equalNeighbors([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]));
