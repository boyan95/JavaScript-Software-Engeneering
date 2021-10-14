function sortAnArrayBy2Criteria(input) {
    let arr = input.sort((a,b) => {
        if(a.length > b.length){
            return 1;
        }else if(a.length == b.length){
            return a.localeCompare(b);
        }else{
            return -1;
        }
    })
    console.log(arr.join("\n"))
}
sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
console.log("----------------------");
sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
console.log("----------------------");
sortAnArrayBy2Criteria(["test", "Deny", "omen", "Default"]);
