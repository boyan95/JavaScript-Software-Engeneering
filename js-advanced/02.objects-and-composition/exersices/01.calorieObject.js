function calorieObject(input) {
  const calorieObj = {};

  for (index = 0; index < input.length; index++) {
    calorieObj[input[index]] = Number(input[++index]);
  }
  console.log(calorieObj);
}
calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
calorieObject(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
