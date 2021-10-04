function fruit(a, b, c){
    let typ = a;
    let weight = Number(b);
    let price = Number(c);

    let money = weight * price ;

    console.log(`I need $${(money/1000).toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${typ}.`)
}
fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)