function currencyFormatter(separator, symbol, symbolFirst, value) {
    return (value) => dollarFormatter(separator, symbol, symbolFirst, value)
}

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71
