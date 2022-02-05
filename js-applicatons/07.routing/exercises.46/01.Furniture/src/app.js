import { logout } from "./api/api.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";

import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";

const root = document.querySelector("div.container");
document.getElementById("logoutBtn").addEventListener("click", onLogout);

//import * as api from "./api/data.js";
//window.api = api;

page(decorateContext);
page("/", catalogPage);
page("/details/:id", detailsPage);
page("/create/", createPage);
page("/edit/:id", editPage);
page("/login", loginPage);
page("/register", registerPage);
page("/my-furniture", catalogPage);
updateUserNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);
  ctx.updateUserNav = updateUserNav;
  next();
}

function updateUserNav() {
  const user = document.querySelector("#user");
  const guest = document.querySelector("#guest");

  const userData = getUserData();

  if (userData) {
    user.style.display = "inline-block";
    guest.style.display = "none";
  } else {
    user.style.display = "none";
    guest.style.display = "inline-block";
  }
}

async function onLogout() {
  await logout();
  updateUserNav();
  page.redirect("/");
}
