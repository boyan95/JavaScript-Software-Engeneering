function solve() {
  const input = document.querySelector("#input");
  const selectTo = document.querySelector("#selectMenuTo");
  const output = document.querySelector("#result");
  selectTo.innerHTML += `<option selected value="hexadecimal">Hexadecimal</option>`;
  selectTo.innerHTML += `<option selected value="binary">Binary</option>`;

  document.querySelector("button").onclick = function () {
    let number = Number(input.value);
    if (selectTo.value == "binary") {
      output.value = number.toString(2);
    } else if (selectTo.value == "hexadecimal") {
      output.value = number.toString(16).toUpperCase();
    }
  };
}
