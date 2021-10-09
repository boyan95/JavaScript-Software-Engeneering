function biggestElement(input){
    let m =[]
    let matrix = m.concat(...input);
    
    return matrix.sort((a,b) => a-b)[matrix.length -1];
}
console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
   ))
   console.log("-----")
   console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ))