function solve() {
  const first = document.getElementById("text").value;
  const second = document.getElementById("naming-convention").value;
  const res = document.getElementById("result");

  let result = "";

  let splitted = first.split(" ");
 

  if (second === "Pascal Case") {
    for (let word of Array.from(splitted)) {
      result += (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }
  } else if (second === "Camel Case") {
    result += splitted[0].toLowerCase();
    for (i = 1; i < splitted.length; i++) {
      let word = splitted[i];
      result += (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }
  } else {
    result = "Error!";
  }

  res.textContent = result;
}