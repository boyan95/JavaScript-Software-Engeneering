import { html } from "../lib.js";
import { profileBooks } from "../api/data.js";
import { getUserData } from "../utils.js";

const profileTemplate = (books) => html`<section
  id="my-books-page"
  class="my-books"
>
  <h1>My Books</h1>
  <ul class="my-books-list">
    ${books.length == 0
      ? html`<p class="no-books">No books in database!</p>`
      : books.map(bookCard)}
  </ul>
</section> `;
const bookCard = (book) => html` <li class="otherBooks">
  <h3>${book.title}</h3>
  <p>Type: ${book.type}</p>
  <p class="img"><img src=${book.imageUrl} /></p>
  <a class="button" href="/details/${book._id}">Details</a>
</li>`;
export async function profilePage(ctx) {
  const userData = getUserData();
  const profBooks = await profileBooks(userData.id);

  ctx.render(profileTemplate(profBooks));
}
