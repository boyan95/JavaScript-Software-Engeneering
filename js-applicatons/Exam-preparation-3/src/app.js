import { render, page } from "./lib.js";
import { logout } from "./api/data.js";
import { getUserData } from "./utils.js";

import { homePage } from "./views/homePage.js";
import { allGamesPage } from "./views/allGames.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";

const root = document.querySelector("main");
document.querySelector("#logoutBtn").addEventListener("click", onLogout);

page(decorateContext);
page("/", homePage);
page("/allGames", allGamesPage);
page("/login", loginPage);
page("/register", registerPage);
page("/create", createPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);

updateUserNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = (context) => render(context, root);
  ctx.updateUserNav = updateUserNav;
  next()
}

function updateUserNav() {
  const user = document.getElementById("user");
  const guest = document.getElementById("guest");
  const userData = getUserData();

  if (userData != null) {
    user.style.display = "inline-block";
    guest.style.display = "none";
  } else {
    user.style.display = "none";
    guest.style.display = "inline-block";
  }
}
async function onLogout() {
  logout();
  updateUserNav();
  page.redirect("/");
}
