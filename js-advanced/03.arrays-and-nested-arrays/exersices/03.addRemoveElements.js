function addRemoveElements(commands){
    let toPrint =[];
    
    for(index = 0; index <= commands.length; index++){
        if (commands[index] === "add"){
            toPrint.push(index + 1);
        }else if(commands[index] === "remove"){
            toPrint.pop();
        }
    }
    if(toPrint.length > 0){
        console.log(toPrint.join("\n"));
    }else{
        console.log("Empty");
    }
}
addRemoveElements(['add', 
'add', 
'add', 
'add']
)
console.log("-------------------")
addRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']
)
console.log("-------------------")
addRemoveElements(['remove', 
'remove', 
'remove']
)