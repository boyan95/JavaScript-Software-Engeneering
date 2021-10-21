function solve() {
  /* # configure event listeners # */
  // select all buttons
  // fist button -> table generation
  // second button -> buy furniture
  const [input, output] = document.querySelectorAll("textarea");
  const table = document.querySelector("table.table tbody");

  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll("button"));
  generateBtn.addEventListener("click", generate);
  buyBtn.addEventListener("click", buy);

  const items = [];

  /* # table generation # */
  // read the input from Furniture List as JSON
  // parse JSON to Array
  // for every JSON element create table element
  function generate(ev) {
    const data = JSON.parse(input.value);
    for (let item of data) {
      const row = document.createElement("tr");

      row.appendChild(createCell("img", { src: item.img }));
      row.appendChild(createCell("p", {}, item.name));
      row.appendChild(createCell("p", {}, item.price));
      row.appendChild(createCell("p", {}, item.decFactor));
      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      const checkCell = document.createElement("td");
      checkCell.appendChild(checkBox);
      row.appendChild(checkCell);

      items.push({
        element: row,
        isChecked,
        item,
      });
      table.appendChild(row);

      function isChecked() {
        return checkBox.checked;
      }
    }
  }

  function createCell(nestedTag, props, content) {
    const cell = document.createElement("td");
    const nested = document.createElement(nestedTag);

    for (let prop in props) {
      nested[prop] = props[prop];
    }
    if (content) {
      nested.textContent = content;
    }
    cell.appendChild(nested);
    return cell;
  }
  /* # buy furniture # */
  //select all checkboxes
  // filter only checked checkboxes
  // repeat for every selected checkbox
  // -- select parent row
  // -- read item information
  // display output
  function buy(ev) {
    const boxes = items
      .filter((i) => i.isChecked)
      .reduce(
        (acc, {item: c}, i, a) => {
          acc.names.push(c.name);
          acc.sum += Number(c.price);
          acc.decFac += Number(c.decF) / a.length;
          return acc;
        },
        { names: [], sum: 0, decFac: 0 }
      );

    output.value = `Bought furniture: ${names.join(
      ", "
    )}\nTotal price: ${sum.toFixed(2)}\nAverage decoration factor: ${
      decFac / names.length
    }`;
  }
}
