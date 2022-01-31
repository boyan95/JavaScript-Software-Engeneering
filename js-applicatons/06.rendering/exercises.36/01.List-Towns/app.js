import { html, render } from "../node_modules/lit-html/lit-html.js";

function start() {
  const townsTemplate = (town) => html`<li>${town}</li>`;
  const root = document.querySelector("#root");
  const ul = document.createElement("ul");
  root.appendChild(ul);

  const loadBtn = document.querySelector("#btnLoadTowns");

  loadBtn.addEventListener("click", onLoad);
  function onLoad(event) {
    event.preventDefault();

    if (document.querySelector("#towns").value != "") {
      const result = document
        .querySelector("#towns")
        .value.split(",").map(t => t.trim())
        .map(townsTemplate);
      render(result, ul);
    } else {
      root.replaceChildren();
    }
  }
}
start();
// Sofia, Plovdiv, Varna, Burgas
