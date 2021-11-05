function listProcessor(arr) {
  let inputObj = (function () {
    let result = [];
    return {
      add(str) {
        result.push(str);
      },
      remove(str) {
        result = result.filter((el) => el != str);
      },
      print() {
        console.log(result.join(","));
      },
    };
  })();
  for (line of arr) {
    let [key, value] = line.split(" ")
    inputObj[key](value);
  }
}

listProcessor([
  "add pesho",
  "add george",
  "add peter",
  "remove peter",
  "print",
]);
