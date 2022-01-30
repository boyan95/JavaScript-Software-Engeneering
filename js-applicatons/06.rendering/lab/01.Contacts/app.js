import { render } from "./node_modules/lit-html/lit-html.js";
import contactTemplate from "./templates/contact.js";
import contacts from "./contacts.js";

async function start() {
  const contactsIndex = document.querySelector("#contacts");
  onRender();
  function onRender() {
    render(
      contacts.map((c) => contactTemplate(c, onDetails)),
      contactsIndex
    );
  }

  function onDetails(contact) {
    contact.details = !contact.details;
    onRender();
  }
}
start()


