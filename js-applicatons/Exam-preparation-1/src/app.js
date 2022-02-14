import { page, render } from "./lib.js";
import { getUserData } from "./utils.js";
import { logout } from "./api/data.js";

import { homePage } from "./views/home.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { profilePage } from "./views/profile.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";

//debug
import * as api from "./api/data.js";

window.api = api;

const root = document.querySelector("main");
document.getElementById("logoutBtn").addEventListener("click", onLogout);

page(decorateContext);
page("/", homePage);
page("/memes", catalogPage);
page("/create", createPage);
page("/register", registerPage);
page("/login", loginPage);
page("/profile", profilePage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);

updateUserNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = (context) => render(context, root);
  ctx.updateUserNav = updateUserNav;
  next();
}
function updateUserNav() {
  const user = document.querySelector("#user");
  const guest = document.querySelector("#guest");
  const userData = getUserData();

  if (userData != null) {
    user.style.display = "block";
    user.querySelector("span").textContent = `Welcome, ${userData.email}`;
    guest.style.display = "none";
  } else {
    user.style.display = "none";
    guest.style.display = "block";
  }
}
async function onLogout() {
  logout();
  updateUserNav();
  page.redirect("/");
}
