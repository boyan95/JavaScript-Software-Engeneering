function rotateArray(array, number) {
  for (index = 1; index <= number; index++) {
    let lastElement = array.pop();
    array.unshift(lastElement);
  }
  console.log(array.join(" "));
}
rotateArray(["1", "2", "3", "4"], 2);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
