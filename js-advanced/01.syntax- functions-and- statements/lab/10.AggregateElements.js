function aggregateElements(input){
    let sum = 0;
    let invSum = 0;
    let concatSum = "";
    for(i = 0; i < input.length; i++){
        sum += Number(input[i]);
        invSum += 1/Number(input[i]);
        concatSum += input[i];
    }
    console.log(sum);
    console.log(invSum.toFixed(4));
    console.log(concatSum);
}
aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])