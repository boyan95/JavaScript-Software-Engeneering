function solution() {
  let storage = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };
  const recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, carbohydrate: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };
  function restock(microelement, quantity) {
    storage[microelement] += quantity;
    return "Success";
  }
  function prepare(recipe, quantity) {
    const remainingStorage = {};

    for (const element in recipes[recipe]) {
      let remaining = storage[element] - recipes[recipe][element] * quantity;
      if (remaining < 0) {
        return `Error: not enough ${element} in stock`;
      } else {
        remainingStorage[element] = remaining;
      }
    }
    Object.assign(storage, remainingStorage);
    return "Success";
  }
  function report() {
    return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
  }

  function control(input) {
    let [command, element, quantity] = input.split(" ");
    quantity = Number(quantity);
    switch (command) {
      case "restock":
        return restock(element, quantity);
      case "prepare":
        return prepare(element, quantity);
      case "report":
        return report();
    }
  }
  return control;
}

let manager = solution();
console.log(manager("prepare turkey 1")); // Success
console.log(manager("restock protein 10")); // Error: not enough carbohydrate in stock
console.log(manager("prepare turkey 1")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); // Error: not enough carbohydrate in stock
console.log(manager("prepare turkey 1")); // Error: not enough carbohydrate in stock // Error: not enough carbohydrate in stock
console.log(manager("restock fat 10")); // Error: not enough carbohydrate in stock console.log (manager ("prepare turkey 1")); // Error: not enough carbohydrate in stock
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10")); // Error: not enough carbohydrate in stock
console.log(manager("prepare turkey 1"));
console.log(manager("report"));
