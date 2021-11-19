class Restaurant {
  constructor(budgetMoney) {
    this.budgetMoney = budgetMoney;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];

    this._counterMeals = 0;
    this._recipes = {};
  }
  loadProducts(products) {
    for (let product of products) {
      let [name, quantity, price] = product.split(" ");
      if (price > this.budgetMoney) {
        this.history.push(
          `There was not enough money to load ${quantity} ${name}`
        );
      } else {
        if (!this.stockProducts[name]) {
          this.stockProducts[name] = quantity;
          this.budgetMoney -= price;
          this.history.push(`Successfully loaded ${quantity} ${name}`);
        } else if (this.stockProducts[name]) {
          this.stockProducts[name] += quantity;
          this.budgetMoney -= price;
          this.history.push(`Successfully loaded ${quantity} ${name}`);
        }
      }
    }
    return this.history.join("\n");
  }
  addToMenu(meal, neededProducts, price) {
    if (meal in this.menu) {
      return `The ${meal} is already in the our menu, try something different`;
    }
    this.menu[meal] = price;
    this._recipes[meal] = neededProducts;
    this._counterMeals++;
    if(this._counterMeals == 1){
      return `Great idea! Now with the ${meal} we have ${this._counterMeals} meal in the menu, other ideas?`;
    }
    return `Great idea! Now with the ${meal} we have ${this._counterMeals} meals in the menu, other ideas?`;
  }
  showTheMenu() {
    let result = [];
    let counter = 0;
    for (let key in this.menu) {
      counter++;
    }
    if (counter > 0) {
      for (let meal in this.menu) {
        result.push(`${meal} - $ ${this.menu[meal]}`);
      }
      return result.join("\n");
    }
    return "Our menu is not ready yet, please come later...";
  }
  makeTheOrder(meal) {
    if (meal in this.menu) {
      let neededProd = this._recipes[meal];
      let hasProduct = 0;
      for (let product of neededProd) {
        let [name, value] = product.split(" ");

        if (name in this.stockProducts && value <= this.stockProducts[name]) {
          hasProduct++;
        }
      }
      if (hasProduct == neededProd.length) {
        neededProd.forEach((el) => {
          let [name, value] = el.split(" ");
          this.stockProducts[name] -= value;
          this.budgetMoney += this.menu[meal];
        });
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal]}.`;
      } else {
        return `For the time being, we cannot complete your order (${meal}), we are very sorry..."`;
      }
    }
    return `There is not ${meal} yet in our menu, do you want to order something else?`;
    //["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"]
  }
}
let kitchen = new Restaurant(1000);
console.log(
  kitchen.loadProducts([
    "Banana 10 5",
    "Banana 20 10",
    "Strawberries 50 30",
    "Yogurt 10 10",
    "Yogurt 500 1500",
    "Honey 5 50",
  ])
);
console.log("--------------------------------");

//let kitchen2 = new Restaurant(1000);
console.log(
  kitchen.addToMenu(
    "frozenYogurt",
    ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
    9.99
  )
);
console.log(
  kitchen.addToMenu(
    "Pizza",
    [
      "Flour 0.5",
      "Oil 0.2",
      "Yeast 0.5",
      "Salt 0.1",
      "Sugar 0.1",
      "Tomato sauce 0.5",
      "Pepperoni 1",
      "Cheese 1.5",
    ],
    15.55
  )
);

console.log("--------------------------------");
//let kitchen3 = new Restaurant(1000);
console.log(kitchen.showTheMenu());
console.log("--------------------------------");

//let kitchen = new Restaurant(1000);
kitchen.loadProducts([
  "Yogurt 30 3",
  "Honey 50 4",
  "Strawberries 20 10",
  "Banana 5 1",
]);
kitchen.addToMenu(
  "frozenYogurt",
  ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
  9.99
);
console.log(kitchen.makeTheOrder("frozenYogurt"));
