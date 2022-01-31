import { towns as townNames } from "./towns.js";
import { html, render } from "./node_modules/lit-html/lit-html.js";

const towns = townNames.map((t) => ({ name: t, match: false }));
const main = document.getElementById("towns");
const inputField = document.getElementById("searchText");
const result = document.getElementById("result");
document.querySelector("button").addEventListener("click", onSearch);

const listTemplate = (towns) => html` <ul>
  ${towns.map((t) => html`<li class=${t.match ? "active" : ""}>${t.name}</li>`)}
</ul>`;

onUpdate();
function onUpdate() {
  render(listTemplate(towns), main);
}

function onSearch() {
  const match = inputField.value.trim().toLocaleLowerCase();
  let matches = 0;
  for (let town of towns) {
    if (match && town.name.toLocaleLowerCase().includes(match)) {
      town.match = true;
      matches++;
    } else {
      town.match = false;
    }
  }

  result.textContent = `${matches} matches found`;
  onUpdate();
}
