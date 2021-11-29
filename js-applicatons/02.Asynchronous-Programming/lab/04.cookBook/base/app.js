window.addEventListener("DOMContentLoaded", start);


async function start() {
  const main = document.querySelector("main");

  const recipes = await getAllRecipes();
  main.replaceChildren();

  recipes.map(createElement).forEach((e) => main.appendChild(e));
}

function createElement(recipe) {
  const element = document.createElement("article");
  element.className = "preview";
  element.innerHTML = `<div class="title">
    <h2>${recipe.name}</h2>
</div>
<div class="small">
    <img src=${recipe.img}>
</div>`;
  element.addEventListener("click", () => {
      element.querySelector('h2').textContent = 'Loading...'
    togglePreview(recipe._id, element);
  });

  return element;
}

async function togglePreview(id, preview) {
  const recipe = await getCurrentRecipe(id);
  const element = document.createElement("article");
  element.innerHTML = `<h2>${recipe.name}</h2>
    <div class="band">
        <div class="thumb">
            <img src=${recipe.img}>
        </div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
            ${recipe.ingredients.map((i) => `<li>${i}</li>`).join("")}
            </ul>
        </div>
    </div>
    <div class="description">
        <h3>Preparation:</h3>
        ${recipe.steps.map((s) => `<p>${s}</p>`).join("")}
    </div>`;
  preview.replaceWith(element);
  element.addEventListener('click', () => {
      element.replaceWith(createElement(recipe))
  })
}

async function getAllRecipes() {
  const url = `http://localhost:3030/jsonstore/cookbook/recipes`;
  const res = await fetch(url);
  const data = await res.json();
  return Object.values(data);
}

async function getCurrentRecipe(id) {
  const url = `http://localhost:3030/jsonstore/cookbook/details/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
