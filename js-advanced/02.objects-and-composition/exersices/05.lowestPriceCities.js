function lowestPrices(input) {
  const catalogue = {};

  input.forEach((element) => {
    let [townName, productName, productPrice] = element.split(" | ");
    productPrice = Number(productPrice);

    if (!catalogue[productName]) {
      catalogue[productName] = {};
    }
    catalogue[productName][townName] = productPrice;
  });

  // Object.entries() връща array от tuples[], които са лесни за обходане по индексите
  for (const product in catalogue) {
    const sorted = Object.entries(catalogue[product]).sort(
      (a, b) => a[1] - b[1]
    );
        console.log(sorted)
    console.log(`${product} -> ${sorted[0][1]} (${sorted[0][0]})`);
  }
}

lowestPrices([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
