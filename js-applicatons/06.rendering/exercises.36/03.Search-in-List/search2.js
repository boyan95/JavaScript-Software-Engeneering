import { towns as townNames } from "./towns.js";
import { html, render } from "./node_modules/lit-html/lit-html.js";

const towns = townNames.map((t) => ({ name: t, match: false }));

const main = document.getElementById("towns");
const input = document.getElementById("searchText");
const output = document.getElementById("result");

const listTemplate = (towns) => html`<ul>
  ${towns.map((t) => html`<li class=${t.match ? "active" : ""}>${t.name}</li>`)}
</ul>`;
onUpdate();
function onUpdate() {
  render(listTemplate(towns), main);
}


document.querySelector("button").addEventListener("click", onSearch);

function onSearch() {
  const match = input.value.trim().toLocaleLowerCase();
  let matches = 0;
  for (let town of towns) {
    if (match && town.name.toLocaleLowerCase().includes(match)) {
      town.match = true;
      matches++;
    } 
  }
  output.textContent = `${matches} matches found`;
  onUpdate();
}
