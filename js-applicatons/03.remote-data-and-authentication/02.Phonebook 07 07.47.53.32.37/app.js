function attachEvents() {
  document.querySelector("#btnLoad").addEventListener("click", onLoad);
  document.querySelector("#btnCreate").addEventListener("click", onCreate);
  phonebook.addEventListener("click", onDelete);
}
const phonebook = document.querySelector("#phonebook");
const personInput = document.querySelector("#person");
const phoneInput = document.querySelector("#phone");
attachEvents();

async function onLoad() {
  phonebook.replaceChildren();
  const url = "http://localhost:3030/jsonstore/phonebook";
  const res = await fetch(url);
  const data = await res.json();
  const contacts = Object.values(data);
  contacts.forEach((c) => {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.id = `${c._id}`;
    deleteBtn.innerHTML = "Delete";
    li.innerHTML = `${c.person}: ${c.phone}`;
    li.appendChild(deleteBtn);
    phonebook.appendChild(li);
  });
}

async function onCreate() {
  const person = personInput.value;
  const phone = phoneInput.value;

  const url = "http://localhost:3030/jsonstore/phonebook";
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ person, phone }),
  };
  const res = await fetch(url, options);
  await res.json();
  await onLoad();
  personInput.value = "";
  phoneInput.value = "";
}
async function onDelete(ev) {
  const contact = ev.target;
  const url = "http://localhost:3030/jsonstore/phonebook/" + contact.id;
  const options = {
    method: "delete",
  };
  const res = await fetch(url, options);
  const data = await res.json();
  await onLoad();
}
