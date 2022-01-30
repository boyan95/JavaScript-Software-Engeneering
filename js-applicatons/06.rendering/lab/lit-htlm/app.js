import { render } from "./node_modules/lit-html/lit-html.js";
import  articleTemplate  from "./templates/article.js";


// template as arrow function
start();

async function start() {
  const data = await (await fetch("./data.json")).json();
  const renderBtn = document.querySelector("#renderBtn");
  const content = document.querySelector("#content");
  renderBtn.addEventListener("click", onRender);

  function onRender() {
    const result = data.map((a) => articleTemplate(onSubmit.bind(null, a), a));
    render(result, content);
  }

  function onSubmit(article, event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const content = formData.get("comment");
    article.comments.push({ content });
    onRender();
  }
}
