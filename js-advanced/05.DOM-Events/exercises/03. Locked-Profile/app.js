function lockedProfile() {
  // return a list -NodeList- of all buttons in class profile and we use Array.from and than use forEach
  // add toggle event listener to all profile buttons
  // find associated profile details
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

// target and currentTarget is the same when button hasn't got children
