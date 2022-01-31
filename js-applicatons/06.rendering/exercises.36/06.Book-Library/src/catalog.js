// list module:
// display list of books
// control books( edit, delete)
import { deleteBook, getBooks, html, until } from "./utility.js";

const catalogTemplate = (booksPromise) => html`<table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    ${until(
      booksPromise,
      html`<tr>
        <td colspan="3">Loading&hellip;;</td>
      </tr>`
    )}
  </tbody>
</table>`;

const bookRow = (book, onEdit, onDelete) => html`<tr>
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>
    <button @click=${onEdit}>Edit</button>
    <button @click=${onDelete}>Delete</button>
  </td>
</tr>`;
export function showCatalog(ctx) {
  return catalogTemplate(loadBooks(ctx));
}

async function loadBooks(ctx) {
  const data = await getBooks();

  for (const [key, value] of Object.entries(data)) {
    value._id = key;
  }
  const books = Object.values(data);

  return Object.values(books).map((book) =>
    bookRow(
      book,
      () => toggleEditor(book, ctx),
      () => onDelete(book._id, ctx)
    )
  );
}

function toggleEditor(book, ctx) {
  ctx.book = book;
  ctx.update();
}

async function onDelete(id, ctx) {
  await deleteBook(id);
  ctx.update();
}
