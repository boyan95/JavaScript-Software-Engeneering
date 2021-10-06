function populationTown(towns) {
  let obj = {};

  for (let data of towns) {
    let [key, value] = data.split(" <-> ");

    value = Number(value);
    if (obj[key]) {
      value += obj[key];
    }
    obj[key] = value; 
  }
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} : ${value}`);
  }
}

populationTown([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
