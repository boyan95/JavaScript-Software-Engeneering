import { html, render } from "./node_modules/lit-html/lit-html.js";

document.querySelector("#searchBtn").addEventListener("click", onClick);

const url = "http://localhost:3030/jsonstore/advanced/table";
const tBody = document.querySelector("tbody");
const inputField = document.getElementById("searchField");
let data;

const personTemplate = (person) => html` <tr
  class=${person.matched ? "select" : ""}
>
  <td>${person.firstName} ${person.lastName}</td>
  <td>${person.email}</td>
  <td>${person.course}</td>
</tr>`;

async function getInfo() {
  try {
    const res = await fetch(url);
    if (res.ok != true) {
      const error = await res.json();
      throw new Error(error.message);
    }
    data = await res.json();
    Object.values(data).forEach((p) => Object.assign(p, { matched: false }));
    data = Object.values(data);
    onRender()
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

function onRender() {
  render(data.map(personTemplate), tBody);
}
getInfo()

function onClick() {
  const match = inputField.value.trim().toLocaleLowerCase();
  data.forEach(p => p.matched = false)

  if (match != "") {
    for (let student of data) {
      if (
        student.firstName.toLocaleLowerCase().includes(match) ||
        student.lastName.toLocaleLowerCase().includes(match) ||
        student.email.toLocaleLowerCase().includes(match) ||
        student.course.toLocaleLowerCase().includes(match)
      ) {
        student.matched = true;
      }
    }
  }
  inputField.value = "";
  onRender();
}
