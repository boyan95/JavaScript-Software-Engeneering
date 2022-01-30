import { html } from "../node_modules/lit-html/lit-html.js";
import commentTemplate from './comment.js'

const articleTemplate = (onSubmit, data) => html`<article>
  <h3>${data.title}</h3>
  <div class="content-body">
    <p>${data.content}</p>
  </div>
  <footer>Author: ${data.Author}</footer>
  <div class="comments">
    
    <form @submit=${onSubmit}>
        <textarea name='comment'></textarea>
        <button>Submit Comment</button
    </form>
  <ul>${data.comments.map(commentTemplate)}</ul>
  </div>
</article>`;

export default articleTemplate;