function validityChecker(x1, y1, x2, y2){
    const comparisons = {};
    // ((x2 -x1)**2 + (y2 - y1)** 2)** 0.5
    let first =((0 - x1) ** 2 + (0 - y1)**2)** 0.5;
    comparisons["first"] = first;
    let second =((x2 -0) ** 2 + (y2 - 0)**2)** 0.5;
    comparisons["second"] = second;
    let third =((x2 - x1) ** 2 + (y2 - y1)**2)** 0.5;
    comparisons["third"] = third;
    console.log(comparisons);

    for(let [key, value] in Object.entries(comparisons)){
        if(Number.isInteger(Number(value))){
            console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
        }else{
            console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
        }
    }

}
validityChecker(3, 0, 0, 4)
validityChecker(2, 1, 1, 4)

