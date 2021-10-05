function cookingByNumbers(number, op1, op2, op3, op4, op5){
    let num = Number(number);
    let numsList = [op1, op2, op3, op4, op5];
    for(let el of numsList){
        switch(el){
            case "chop": num /= 2; console.log(num); break;
            case "dice": num **= 0.5; console.log(num); break;
            case "spice": num += 1; console.log(num); break;
            case "bake": num *= 3; console.log(num); break;
            case "fillet": num *= 0.8; console.log(num.toFixed(1)); break;
        }
    }
    
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
console.log("----")
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')