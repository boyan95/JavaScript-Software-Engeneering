function validate() {
  const inputEmail = document.querySelector("#email");
  const pattern = /(^[a-z]+@[a-z]+\.[a-z]+$)/g;
  inputEmail.addEventListener("change", () => {
    if (!pattern.test(inputEmail.value)) {
      inputEmail.classList.add("error");
    }else{
        inputEmail.classList.remove("error");
    }
  });
}
