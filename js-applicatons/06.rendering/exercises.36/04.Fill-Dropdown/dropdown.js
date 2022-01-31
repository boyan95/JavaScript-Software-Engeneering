import { html, render } from "./node_modules/lit-html/lit-html.js";

const url = "http://localhost:3030/jsonstore/advanced/dropdown";
const menu = document.getElementById("menu");
document.querySelector("form").addEventListener("submit", add);

const itemTemplate = (town) =>
  html`<option value=${town._id}>${town.text}</option>`;

async function loadItems() {
  try {
    const res = await fetch(url);
    if (res.ok != true) {
      const error = await res.json();
      throw new Error(error.message);
    }
    const data = await res.json();

    return Object.values(data);
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

async function onRender() {
  const data = await loadItems();
  render(data.map(itemTemplate), menu);
  document.getElementById("itemText").value = "";
}
onRender();

async function addItem(text) {
  try {
    const res = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    if (res.ok != true) {
      const error = res.json();
      throw new Error(error.message);
    }
    const data = res.json();
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

async function add(event) {
  event.preventDefault();
  const input = document.getElementById("itemText").value.trim();
  if (input != "") {
    addItem(input);
  }
  onRender();
}
