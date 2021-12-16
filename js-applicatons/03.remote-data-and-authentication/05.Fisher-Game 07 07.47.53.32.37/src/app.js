let userData = null;

window.addEventListener("DOMContentLoaded", () => {
  userData = JSON.parse(localStorage.getItem("userData"));
  if (userData != null) {
    document.getElementById("guest").style.display = "none";
    document.querySelector("#addForm .add").disabled = false;
    document.querySelector(
      ".email"
    ).innerHTML = `Welcome, <span>${userData.email}</span>`;
  } else {
    document.getElementById("user").style.display = "none";
  }

  document.querySelector(".load").addEventListener("click", onLoad);
  document.querySelector("#addForm").addEventListener("submit", addCatch);
});

async function onLoad() {
  const url = "http://localhost:3030/data/catches/";
  const res = await fetch(url);
  const data = await res.json();
  document
    .querySelector("#catches")
    .replaceChildren(...data.map((c) => createCatch(c)));
}

async function addCatch(event) {
  event.preventDefault();
  if (!userData) {
    window.location = "/05.Fisher-Game/src/login.html";
    return;
  }
  const formData = new FormData(event.target);

  const angler = formData.get("angler");
  const weight = formData.get("weight");
  const species = formData.get("species");
  const location = formData.get("location");
  const bait = formData.get("bait");
  const captureTime = formData.get("captureTime");

  const currentCatch = {
    angler,
    weight,
    species,
    location,
    bait,
    captureTime,
  };

  try {
      if(Object.values(currentCatch).some(x=> x== '')){
          throw new Error('All fields are required!')
      }
    const res = await fetch("http://localhost:3030/data/catches/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": userData.token,
      },
      body: JSON.stringify(currentCatch),
    });
    if (res.status != 200) {
      const error = await res.json();
      throw new Error(error.message);
    }
    const data = await res.json();
    const element = createCatch(currentCatch);
    document.querySelector("#catches").appendChild(element);
    onLoad();
  } catch (err) {
    alert(err.message);
  }
}

function createCatch(currentCatch) {
  const isOwner = userData && userData.id == currentCatch._ownerId;
  const div = document.createElement("div");
  div.className = "catch";
  div.innerHTML = `
    <label>Angler</label>
    <input type="text" class="angler" value="${currentCatch.angler}" ${
    !isOwner ? "disabled" : ""
  }>
    <label>Weight</label>
    <input type="text" class="weight" value="${currentCatch.weight}" ${
    !isOwner ? "disabled" : ""
  }>
    <label>Species</label>
    <input type="text" class="species" value="${currentCatch.species}" ${
    !isOwner ? "disabled" : ""
  }>
    <label>Location</label>
    <input type="text" class="location" value="${currentCatch.location}" ${
    !isOwner ? "disabled" : ""
  }>
    <label>Bait</label>
    <input type="text" class="bait" value="${currentCatch.bait}" ${
    !isOwner ? "disabled" : ""
  }>
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${
      currentCatch.captureTime
    }" ${!isOwner ? "disabled" : ""}>
    <button class="update" data-id="${currentCatch._id}" ${
    !isOwner ? "disabled" : ""
  }>Update</button>
    <button class="delete" data-id="${currentCatch._id}" ${
    !isOwner ? "disabled" : ""
  }>Delete</button>`;
  return div;
}
