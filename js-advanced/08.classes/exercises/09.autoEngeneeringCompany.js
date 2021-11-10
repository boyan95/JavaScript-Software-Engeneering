function solve(arr) {
  let cars = {};
  for (line of arr) {
    let [carBrand, carModel, producedCars] = line.split(" | ");
    producedCars = Number(producedCars);

    if (!cars[carBrand]) {
      cars[carBrand] = {};
      cars[carBrand][carModel] = producedCars;
    } else {
      if (cars[carBrand][carModel]) {
        cars[carBrand][carModel] += producedCars;
      } else {
        cars[carBrand][carModel] = producedCars;
      }
    }
  }

  for (let [brand, data] of Object.entries(cars)) {
    console.log(brand);
    for (let [model, count] of Object.entries(data)) {
      console.log(`###${model} -> ${count}`);
    }
  }
}

solve([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
