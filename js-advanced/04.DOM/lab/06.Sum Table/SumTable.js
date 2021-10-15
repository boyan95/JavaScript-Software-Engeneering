function sumTable() {
    const items = document.querySelectorAll("table tr");
    let total = 0;

    for(let index = 1; index < items.length-1; index++){
        total += Number(items[index].lastElementChild.textContent);
    }

    document.getElementById("sum").textContent = total;
}