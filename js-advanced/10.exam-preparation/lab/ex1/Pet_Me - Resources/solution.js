function solve() {
  // # Contact owner
  // Create confirmation div
  // Configure event listener for new button
  // Replacing existing button with conformation div

  // # Adopt a pet
  // Read and validate input
  // Create new button for checking
  // Configure event listener for new button
  // Replace confirmation div with new button
  // Change text content of Owner span
  // Move element to other list

  // # Checking of adopted pet
  // Remove element from DOM

  // get references to elements of interest
  // configure event listeners
  let fields = document.querySelectorAll("#container input");
  let addButton = document.querySelector("#container button");
  let petList = document.querySelector("#adoption ul");
  let adoptionList = document.querySelector("#adopted ul");
  addButton.addEventListener("click", addPet);

  let input = {
    name: fields[0],
    age: fields[1],
    kind: fields[2],
    currentOwner: fields[3],
  };
  // # Add new pet
  // Read input fields
  // Validate values
  // Create new list item
  // Configure event listener for newly created element
  function addPet(event) {
    event.preventDefault();
    if (
      input.name.value == "" ||
      input.age.value == "" ||
      input.kind.value == "" ||
      input.currentOwner.value == "" ||
      isNaN(input.age.value)
    ) {
      return;
    }
    let btn = document.createElement("button");
    let li = document.createElement("li");
    let p = document.createElement("p");
    let sp = document.createElement("span");
    p.innerHTML = `<strong>${input.name.value.trim()}</strong> is a <strong>${input.age.value.trim()}</strong> year old <strong>${input.kind.value.trim()}</strong>`;
    sp.innerHTML = `<span>Owner: ${input.currentOwner.value}</strong>`;
    btn.innerHTML = `<button>Contact with owner</button>`;

    li.appendChild(p);
    li.appendChild(sp);
    li.appendChild(btn);
    petList.appendChild(li);
    for (let el in input) {
      input[el].value = "";
    }
    btn.addEventListener("click", confirm);
    let b = document.createElement("button");
    let d = document.createElement("div");
    let i = document.createElement("input");

    function confirm(e) {
      i.setAttribute("type", "text");
      i.setAttribute("placeholder", "Enter your names");
      b.innerHTML = "Yes! I take it!";
      d.appendChild(i);
      d.appendChild(b);
      btn.remove();
      li.appendChild(d);
    }
    // # Contact owner
    // Create confirmation div
    // Configure event listener for new button
    // Replacing existing button with conformation div
    let checkedBtn = document.createElement("button");
    b.addEventListener("click", transfer);
    function transfer(ev) {
      newOwnerName = i.value.trim();
      if ((i.value = "")) {
        return;
      }
      sp.innerHTML = `New Owner: ${newOwnerName}`;
      checkedBtn.innerHTML = "Checked";
      d.appendChild(checkedBtn);
      adoptionList.appendChild(li);
      i.remove();
      b.remove();
    }

    checkedBtn.addEventListener("click", petAdopted);
    function petAdopted(ev) {
      adoptionList.remove(li);
    }
  }
}


