function listOfNames(input){
    const sortedNames = input.sort((a, b) => a.localeCompare(b));
    sortedNames.forEach(name => console.log(`${sortedNames.indexOf(name) + 1}.${name}`));
}
listOfNames(["John", "Bob", "Christina", "Ema"]);