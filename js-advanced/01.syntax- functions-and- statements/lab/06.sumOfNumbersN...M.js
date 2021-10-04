function sumNumbers(n, m){
    let sum = 0;

    for(first = Number(n); first <= Number(m); first++){
        sum += first;
    }
    console.log(sum)
}
sumNumbers('1', '5' )
sumNumbers('-8', '20')