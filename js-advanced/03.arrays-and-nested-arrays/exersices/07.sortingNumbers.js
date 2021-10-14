function sortingNumber(input) {
  let sortedNumbers = input.sort((a, b) => a - b);
  let toReturn = [];
  const length = sortedNumbers.length;

  for (index = 0; index < length; index++) {
      if(index % 2 === 0 || index === 0){
          toReturn.push(sortedNumbers.shift());
      }else{
          toReturn.push(sortedNumbers.pop());
      }
  }
  return toReturn;
}
console.log(sortingNumber([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
