function solve() {
   const button = document.querySelector("button");
   button.addEventListener("click", onClick);
 
   function onClick() {
     //   TODO:
     const input = document.getElementById("searchField");
     let inputText = input.value.toLowerCase();
 
     const tableElements = Array.from(document.querySelectorAll("tbody tr"));
 
     tableElements.forEach((el) => {
       let text = el.textContent.toLowerCase();
       if (text.includes(inputText)) {
         el.classList.add("select");
       } else {
         el.classList.remove("select");
       }
     })
     input.value = "";
   }
 }
 