// слагаме eventListener отвън, зашото така спестяваме място и пишем по малко код, което означава, че по малко грешки могър да бъдат направени
// това се нарича event propagation
document.getElementById('item').addEventListener("click", removeElement);

function removeElement(ev){
  // aks before delete
  // const answer = confirm("Are you sure?")
  //if(answer == true){
    //newItem.remove(); OR
    // const parent = ev.target.parentNode;
  // parent.remove();
  //}
  if(ev.target.tagName === "A"){
    newItem.remove();
  }
  // const parent = ev.target.parentNode;
  // parent.remove();
}

function addItem() {
    // find input field
  let newItemText = document.querySelector("#newItemText");

  //create new <li> element
  let newItem = document.createElement("li");
  
  // set the textContent of new item to be equal to the value of newItemText
  newItem.textContent = newItemText.value;

  // create Delete button
  const button = document.createElement("a");
  button.href ="#";
  button.textContent = "[Delete]"
  //button.addEventListener("click", removeElement)

  newItem.appendChild(button);
  
  // append a child of element with id #items
  document.querySelector("#items").appendChild(newItem);
  
  // clear the input field nice-to-have
  newItemText.value = "";

  /*function removeElement(ev){
      // aks before delete
      // const answer = confirm("Are you sure?")
      //if(answer == true){
        //newItem.remove(); OR
        // const parent = ev.target.parentNode;
      // parent.remove();
      //}
      newItem.remove();
      // const parent = ev.target.parentNode;
      // parent.remove();
     
  }
   */
}
