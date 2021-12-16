// GET
async function getData() {
  const url = "http://localhost:3030/jsonstore/phonebook/";
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

// GET by ID
async function getDataById(id) {
  const url = "http://localhost:3030/jsonstore/phonebook/" + id;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

// POST
async function setData() {
  const url = "http://localhost:3030/jsonstore/phonebook/";
  const data = {
    person: "Boyan",
    phone: "+1-987-6543",
  };
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const res = await fetch(url, options);
  const result = res.json();
  return result;
}

// PUT
async function updateData(id, data) {
  const url = "http://localhost:3030/jsonstore/phonebook/" + id;
  const options = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const res = await fetch(url, options);
  const result = res.json();
  return result;
}

// DELETE
async function deleteData(id) {
  const url = "http://localhost:3030/jsonstore/phonebook/" + id;
  const options = {
    method: "delete",
  };
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
}
