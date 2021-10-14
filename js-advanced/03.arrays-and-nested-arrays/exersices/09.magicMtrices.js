function magicMatrices(input) {
  let matrices = [];

  for (arr = 0; arr < input.length; arr++) {
    let sumRows = 0;
    let sumCols = 0;
    for (index = 0; index < input[arr].length; index++) {
        sumRows += input[arr][index];
        sumCols += input[index][arr];
    }
    matrices.push(sumRows);
    matrices.push(sumCols);
  }
  let equal = ((currentValue) => currentValue === matrices[0]);
  console.log(matrices.every(equal));
}
magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   
   )
