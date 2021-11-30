async function lockedProfile() {
  await createProfiles()
  document.querySelector("main").addEventListener("click", OnToggle);

  function OnToggle(ev) {
    if (ev.target.tagName == "BUTTON") {
      // get the parent from ev(button)
      const parent = ev.target.parentElement;
      // find if is it checked unlock
      const isUnlocked = parent.querySelector(
        "input[type = 'radio'][value = 'unlock']"
      ).checked;
      // return div's id from parent, that includes "HiddenFields"
      const infoOfDiv = Array.from(parent.querySelectorAll("div")).find((d) =>
        d.id.includes("HiddenFields")
      );
      if (isUnlocked) {
        // if it's visible -> hide it and display label 'Show more'
        if (ev.target.textContent == "Show more") {
          infoOfDiv.style.display = "block";
          ev.target.textContent = "Hide it";
          // otherwise -> show it and display label 'Hide it'
        } else {
          infoOfDiv.style.display = "";
          ev.target.textContent = "Show more";
        }
      }
    }
  }
}

async function getProfiles() {
  const url = "http://localhost:3030/jsonstore/advanced/profiles";
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

async function createProfiles() {
  const main = document.querySelector("#main")
  main.replaceChildren();
  const data = await getProfiles();


  Object.values(data).forEach((p) => {
    let counter = 1;
    const div = document.createElement('div');
    div.className = 'profile';

    div.innerHTML = `
        <img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user${counter}Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user${counter}Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user${counter}Username" value="${p.username}" disabled readonly />
        <div class="hiddenInfo">
            <hr>
            <label>Email:</label>
            <input type="email" name="user${counter}Email" value="${p.email}" disabled readonly />
            <label>Age:</label>
            <input type="email" name="user${counter}Age" value="${p.age}" disabled readonly />
        </div>
        
        <button>Show more</button>`;
    counter++;
    main.appendChild(div)
  });
}
