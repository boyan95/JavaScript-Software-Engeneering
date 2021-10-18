function solve() {
  //TODO
  const text = document.getElementById("input").value;
  let splitted = text.split(".").filter((el) => el != "");
  let output = document.getElementById("output");

  for (let i = 0; i < splitted.length; i += 3) {
    let arr = [];
    for (let y = 0; y < 3; y++) {
      if (splitted[i + y]) {
        arr.push(splitted[i + y]);
      }
    }
    let paragraph = arr.join(".") + ".";
    output.innerHTML += `<p>${paragraph}</p>`;
  }
}