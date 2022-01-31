// api module:
// load books
// create books
// delete books
// edit books

import { html, render } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";

export { html, render, until };
const host = "http://localhost:3030/jsonstore/collections";
async function request(url, method = "get", data) {
  const options = {
    method,
    headers: {},
  };
  if (data != undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }
  try {
    const response = await fetch(host + url, options);
    if (response.ok != true) {
      const error = await response.json();
      throw new Error(error.message);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

async function getBooks() {
  return request("/books/");
}
async function getBookById(id) {
  return request("/books/" + id);
}
async function updateBook(id, book) {
  return request("/books/" + id, "put", book);
}
async function createBook(book) {
  return request("/books/", "post", book);
}
async function deleteBook(id) {
  return request("/books/" + id, "delete");
}

export { getBooks, getBookById, updateBook, createBook, deleteBook };
