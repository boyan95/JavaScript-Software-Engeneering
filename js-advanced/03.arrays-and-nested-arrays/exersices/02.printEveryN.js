function printEveryN(input, number){
    let toReturn = [];

    for(let index = 0; index < input.length; index+=number){
        toReturn.push(input[index]);
    }
    return toReturn;
}
console.log(printEveryN(['dsa',
'asd', 
'test', 
'tset'], 
2
))
console.log(printEveryN(['5', 
'20', 
'31', 
'4', 
'20'], 
2
))