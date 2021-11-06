function argumentInfo(...arr) {
  let arrObj = {};
  arr.forEach((element) => {
    console.log(`${typeof element}: ${element}`);

    if (!(typeof element in arrObj)) {
      arrObj[typeof element] = 0;
    }
    arrObj[typeof element] += 1;
  });
  for (let [key, value] of Object.entries(arrObj).sort((a,b) => b[1] - a[1])) {
    console.log(`${key} = ${value}`);
  }
}
argumentInfo({ name: "bob" }, 3.333, 9.999);
