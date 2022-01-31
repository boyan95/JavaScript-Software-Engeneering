import { cats } from "./catSeeder.js";
import { html, render } from "./node_modules/lit-html/lit-html.js";

const catTemplate = (cat) => html` <li>
  <img
    src="./images/${cat.imageLocation}.jpg"
    width="250"
    height="250"
    alt="Card image cap"
  />
  <div class="info">
    <button class="showBtn">Show status code</button>
    <div class="status" style="display: none" id=${cat.id}>
      <h4>Status Code: ${cat.statusCode}</h4>
      <p>${cat.statusMessage}</p>
    </div>
  </div>
</li>`;

const main = document.getElementById("allCats");
render(
  html`<ul>
    ${cats.map(catTemplate)}
  </ul>`,
  main
);

main.addEventListener("click", (event) => {
  
  if (event.target.tagName == "BUTTON") {
    
    const div = event.target.parentNode.querySelector(".status");
    if (div.style.display == "block") {
      event.target.textContent = 'Show status code'
      div.style.display = "none";
    } else {
      div.style.display = "block";
      event.target.textContent = 'Hide status code'
    }
  }
});
