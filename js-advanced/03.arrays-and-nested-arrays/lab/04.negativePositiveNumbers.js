function positiveNegativeNumbers(input){
    let newArr = [];
    for(i = 0; i < input.length; i++){
        if(input[i]< 0){
            newArr.unshift(input[i]);
        }else{
            newArr.push(input[i]);
        }
    }
    console.log(newArr.join("\n"))

}
positiveNegativeNumbers([7, -2, 8, 9])
positiveNegativeNumbers([3, -2, 0, -1])