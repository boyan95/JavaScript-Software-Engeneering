function calc() {
    // TODO: sum = num1 + num2
   // read values of two input fields
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    // sum values and set result as value in output field
    const sum = document.getElementById('sum').value = num1 + num2;
    
}