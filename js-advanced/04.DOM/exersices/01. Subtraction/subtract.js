function subtract() {
    const firstNum = Number(document.getElementById("firstNumber").value);
    const secondNum = Number(document.getElementById("secondNumber").value);
    let subtraction = document.getElementById("result");

    subtraction.textContent = (firstNum -secondNum).toString();//.innerText or .textContent
    
}