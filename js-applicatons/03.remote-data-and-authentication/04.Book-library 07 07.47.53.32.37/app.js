const tBody = document.querySelector("table tbody");
const loadBooksBtn = document.querySelector("#loadBooks");

loadBooksBtn.addEventListener("click", loadAllBooks);
const submitBtn = document.querySelector("form button");
submitBtn.addEventListener("click", createBook);
tBody.addEventListener("click", tableClick);

const titleInput = document.querySelector('[name="title"]');
const authorInput = document.querySelector('[name="author"]');
async function tableClick(event) {
  if (event.target.className == "delete") {
    onDelete(event.target);
  } else if (event.target.className == "edit") {
    onUpdate(event.target);
  }
}
async function onDelete(button) {
  const id = button.parentElement.dataset.id;
  await deleteBook(id);
  button.parentElement.parentElement.remove();
}

async function onUpdate(button) {
  const id = button.parentElement.dataset.id;
  const book = await getBookById(id)
  console.log(book)
  //const title = titleInput.value;
  //const author = authorInput.value;

  //updateBook(id, { title, author });
}

async function loadAllBooks() {
  tBody.replaceChildren();
  const url = "http://localhost:3030/jsonstore/collections/books";
  const res = await fetch(url);
  const books = await res.json();
  for (const [key, value] of Object.entries(books)) {
    loadBook(key, value);
  }
}
loadAllBooks();

async function loadBook(id, book) {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td data-id=${id}>
        <button class='edit'>Edit</button>
        <button class='delete'>Delete</button>
    </td>`;
  tBody.appendChild(tr);
}

async function createBook() {
  const url = "http://localhost:3030/jsonstore/collections/books";
  const title = titleInput.value;
  const author = authorInput.value;

  if (title == "" || author == "") {
    alert("Fill out all fields!");
    loadAllBooks();
  } else {
    const res = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author }),
    });
    await res.json();
    loadAllBooks();
  }
}
async function getBookById(id) {
  const url = "http://localhost:3030/jsonstore/collections/books/" + id;
  const res = await fetch(url);
  const book = await res.json();
  console.log(book)
  return book;
}

async function deleteBook(id) {
  const url = "http://localhost:3030/jsonstore/collections/books/" + id;
  const res = await fetch(url, {
    method: "delete",
  });
  const result = await res.json();
  return result;
}
async function updateBook(id, book) {
  const url = "http://localhost:3030/jsonstore/collections/books/" + id;
  const res = await fetch(url, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  const result = await res.json();
  return result;
}
