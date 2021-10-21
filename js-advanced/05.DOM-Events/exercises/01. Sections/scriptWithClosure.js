function create(words) {
    const content = document.querySelector("#content");
  
    for (i = 0; i < words.length; i++) {
      // create <div>
      const newDiv = document.createElement("div");
      // create <p>
      const para = document.createElement("p");
      // set <p> content
      para.textContent = words[i];
      //configure <p> to be hidden(display: none)
      para.style.display = "none";
      // add <p> to <div>
      newDiv.appendChild(para);
      // set the eventListener on new created div before we append the div to his parent
      newDiv.addEventListener("click", onClick.bind(para));
      // add <div> to page
      content.appendChild(newDiv);
      // configure <div> eventListener
    
    }
    function onClick(){
        this.style.display = ""
    }
  }
  