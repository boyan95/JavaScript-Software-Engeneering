function heroicInventory(input){
    
    const register = [];

    for(index = 0; index < input.length; index++){
        const hero = {};
        let [name, level, items] = input[index].split(" / ");
        hero.name = name;
        hero.level = Number(level);
        hero.items = items ? items.split(", ") : [];
        register.push(hero);
    }
    return JSON.stringify(register);
}
console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
))