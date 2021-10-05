function sameNumber(num){
    let numAsString = String(num);
    let sum = 0;
    let isSame = 0;

    for(i = 0; i < numAsString.length; i++){
        sum += Number(numAsString[i]);
        if(numAsString[0] === numAsString[i]){
            isSame += 1
        }else{
            isSame += 0
        }
    }
    if(isSame < numAsString.length){
        console.log("false")
    }else{
        console.log("true")
    }
    console.log(sum)
}
sameNumber(2222222)
sameNumber(1234)