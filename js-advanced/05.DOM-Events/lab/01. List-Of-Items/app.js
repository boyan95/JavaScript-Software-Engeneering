function addItem() {
  // find input field
  let newItemText = document.querySelector("#newItemText");
  //create new <li> element
  let newItem = document.createElement("li");
  // set the textContent of new item to be equal to the value of newItemText
  newItem.textContent = newItemText.value;
  // append a child of element with id #items
  document.querySelector("#items").appendChild(newItem);
  // clear the input field nice-to-have
  newItemText.value = "";
}
