function generateReport(){
    const output = document.querySelector("#output");
    const boxes = document.querySelectorAll("thead tr th input");
    const info = document.querySelectorAll("tbody tr");
    let result = [];

    for(i = 0; i < info.length; i++){
        let report = {};
        for(y = 0; y < boxes.length; y++){
            if(boxes[y].checked){
                report[boxes[y].name] = info[i].children[y].textContent;
            }
        }
        result.push(report);
    }
    output.textContent = JSON.stringify(result)
}