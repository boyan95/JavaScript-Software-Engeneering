function validate() {
 
    let usernameInput = document.getElementById("username");
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    let confirmPasswordInput = document.getElementById("confirm-password");
    let companyButton = document.getElementById("company");
    let companyInfo = document.getElementById("companyInfo");
    let companyNumber = document.getElementById("companyNumber");
    let submitButton = document.getElementById("submit");
    let validForm = document.getElementById("valid");
 
    let userNameReg = /^[A-Za-z0-9]{3,20}$/;
    let passwordReg = /^[\w]{5,15}$/;
    let emailReg = /^[^@.]+@[^@]*\.[^@]*$/;
 
    let usernameBool = false;
    let emailBool = false;
    let passwordBool = false;
    let companyBool = false;
 
    companyButton.addEventListener("change", (ev) => {
        if(companyButton.checked) {
            companyInfo.style.display = "block";
        }else {
            companyInfo.style.display = "none";
        }
    });
 
    submitButton.addEventListener("click", (ev) => {
        ev.preventDefault();
        if(!userNameReg.test(usernameInput.value)) {
            usernameInput.style.borderColor = "red";
            usernameBool = false;
        }else {
            usernameInput.style.borderColor = "";
            usernameBool = true;
        }
 
        if(!emailReg.test(emailInput.value)) {
            emailInput.style.borderColor = "red";
            emailBool = false;
        }else {
            emailInput.style.borderColor = "";
            emailBool = true;
        }
 
        if(!passwordReg.test(passwordInput.value) || !passwordReg.test(confirmPasswordInput.value) || passwordInput.value != confirmPasswordInput.value) {
            passwordInput.style.borderColor = "red";
            confirmPasswordInput.style.borderColor = "red";
            passwordBool = false;
        }else {
            passwordInput.style.borderColor = "";
            confirmPasswordInput.style.borderColor = "";
            passwordBool = true;
        }
 
        if(companyButton.checked) {
            if(companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = "red";
                companyBool = false;
            }else {
                companyNumber.style.borderColor = "";
                companyBool = true;
            }
        }else {
            companyBool = true;
        }
        if(usernameBool == true && emailBool == true && passwordBool == true && companyBool == true) {
            validForm.style.display = "block";
        }else {
            validForm.style.display = "none";
        }
    });
}