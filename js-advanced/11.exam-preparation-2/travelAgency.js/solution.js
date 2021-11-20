window.addEventListener("load", solution);

function solution() {
  const fullNameField = document.querySelector("#fname");
  const emailField = document.querySelector("#email");
  const phoneNumberField = document.querySelector("#phone");
  const addressField = document.querySelector("#address");
  const postalCodeField = document.querySelector("#code");
  const submitButton = document.querySelector("#submitBTN");
  const editButton = document.querySelector("#editBTN");
  const continueButton = document.querySelector("#continueBTN");
  const infoPreview = document.querySelector("#infoPreview");

  submitButton.addEventListener("click", submit);

  function submit(ev) {
    if (fullNameField == "" || emailField == "") {
      return;
    }
    let liFullName = document.createElement("li");
    liFullName.innerHTML = `Full Name: ${fullNameField.value.trim()}`;
    let liEmail = document.createElement("li");
    liEmail.innerHTML = `Email: ${emailField.value.trim()}`;
    let liNumber = document.createElement("li");
    liNumber.innerHTML = `Phone Number: ${phoneNumberField.value.trim()}`;
    let liAddress = document.createElement("li");
    liAddress.innerHTML = `Address: ${addressField.value.trim()}`;
    let liPostalCode = document.createElement("li");
    liPostalCode.innerHTML = `Postal Code: ${postalCodeField.value.trim()}`;
    infoPreview.appendChild(liFullName);
    infoPreview.appendChild(liEmail);
    infoPreview.appendChild(liNumber);
    infoPreview.appendChild(liAddress);
    infoPreview.appendChild(liPostalCode);
    submitButton.disabled = true;
    editButton.disabled = false;
    continueButton.disabled = false;
    fullNameField.value = "";
    emailField.value = "";
    phoneNumberField.value = "";
    addressField.value = "";
    postalCodeField.value = "";
  }
  editButton.addEventListener("click", edit);
  function edit(ev) {
    let [name, email, phone, address, code] = Array.from(document.querySelectorAll('#infoPreview li'));
  
    fullNameField.value = name.innerHTML.slice(11);
    infoPreview.removeChild(name);
    emailField.value = email.innerHTML.slice(7);
    infoPreview.removeChild(email);
    phoneNumberField.type ='text'
    phoneNumberField.value = phone.innerHTML.slice(14);
    infoPreview.removeChild(phone);
    addressField.value = address.innerHTML.slice(9);
    infoPreview.removeChild(address);
    postalCodeField.type ='text'
    postalCodeField.value = code.innerHTML.slice(13);
    infoPreview.removeChild(code);
    submitButton.disabled = false;
    editButton.disabled = true;
    continueButton.disabled = true;
  }
  continueButton.addEventListener('click', continueFunction)
  function continueFunction(ev){
    document.querySelector('#block').innerHTML = '<h3>Thank you for your reservation!</h3>'
  }
}
