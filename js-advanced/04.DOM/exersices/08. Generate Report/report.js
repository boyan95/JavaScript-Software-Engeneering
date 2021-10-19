function generateReport() {
    let output = document.querySelector('#output')
    let boxes = document.querySelectorAll('thead tr th input')
    let info = document.querySelectorAll('tbody tr')
    let result = []

    // we go through each of the twenty names
    for (let i = 0; i < info.length; i++) {
        // create an empty object
        let report = {}
        //we go through each of the seven columns
        for (let j = 0; j < boxes.length; j++) {
            //check if this column is checked
            if (boxes[j].checked) {
                //We take the column name as the key, 
                //and as the value we take the text value of the child with index j from the person with index i
                report[boxes[j].name] = info[i].children[j].textContent
            }
        }
        // push the current report to the result array
        result.push(report)
    }
    // convert to JSON and set it to output textContent
    output.textContent = JSON.stringify(result)
}