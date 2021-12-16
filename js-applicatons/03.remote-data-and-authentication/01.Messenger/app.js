function attachEvents() {
  document.querySelector("#submit").addEventListener("click", postMessage);
  document.querySelector("#refresh").addEventListener("click", loadMessages);
  loadMessages();
}
const authorInput = document.querySelector("[name='author']");
const messageInput = document.querySelector("[name='content']");
const list = document.querySelector("#messages");
attachEvents();

// post message
async function postMessage() {
  const author = authorInput.value;
  const content = messageInput.value;

  await createMessage({ author, content });
  messageInput.value = "";
  list.value += '\n' + `${author}: ${content}`
}

// create message
async function createMessage(message) {
  const url = "http://localhost:3030/jsonstore/messenger";
  const options = {
    method: "post",
    headers: {
      "Content-Type": "applications/json",
    },
    body: JSON.stringify(message),
  };
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
}

// load messages and get all messages into textarea
async function loadMessages() {
  const url = "http://localhost:3030/jsonstore/messenger";
  const res = await fetch(url);
  const data = await res.json();
  const messages = Object.values(data);

  list.value = messages.map((m) => `${m.author}: ${m.content}`).join("\n");
}
