function mathOperations(num1, num2, operation){
    let first = Number(num1);
    let second = Number(num2);
    switch(operation){
        case "+": console.log(first + second); break;
        case "/": console.log(first / second); break;
        case "*": console.log(first * second); break;
        case "-": console.log(first - second); break;
        case "%": console.log(first % second); break;
        case "**": console.log(first ** second); break;
    }
}
mathOperations(5, 6, '+')
mathOperations(3, 5.5, '*')