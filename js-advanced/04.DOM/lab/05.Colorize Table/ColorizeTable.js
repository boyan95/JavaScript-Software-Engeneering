function colorize() {
    // TODO
    //find the searched items
    const rows = document.querySelectorAll("table tr");
  
    for (let i = 1; i < rows.length; i += 2) {
        rows[i].style.background = "teal";
    }
  }
  