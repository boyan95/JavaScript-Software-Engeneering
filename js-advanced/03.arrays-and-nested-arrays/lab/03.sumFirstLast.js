function sumFirstLast(input){
    let sum = Number(input.pop()) + Number(input.shift());
    return sum;

}
sumFirstLast(['20', '30', '40'])
sumFirstLast(['5', '10'])