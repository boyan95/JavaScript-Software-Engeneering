import { render, page } from "./lib.js";
import { getUserData } from "./utils.js";
import { logout } from "./api/data.js";

import { homePage } from "./views/home.js";
import { catalogPage } from "./views/catalog.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { searchPage } from "./views/search.js";

const root = document.querySelector("main");
document.getElementById("logout").addEventListener("click", onLogout);

page(decorateContext);
page("/", homePage);
page("/catalog", catalogPage);
page("/create", createPage);
page("/register", registerPage);
page("/login", loginPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);
page("/search", searchPage);
page;

updateUserNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = (context) => render(context, root);
  ctx.updateUserNav = updateUserNav;
  next();
}
function updateUserNav() {
  const home = document.querySelector("#home");
  const catalog = document.querySelector("#catalog");
  const search = document.querySelector("#search");
  const login = document.querySelector("#login");
  const register = document.querySelector("#register");
  const create = document.querySelector("#create");
  const logout = document.querySelector("#logout");

  const userData = getUserData();

  if (userData != null) {
    home.style.display = "inline-block";
    catalog.style.display = "inline-block";
    search.style.display = "inline-block";
    login.style.display = "none";
    register.style.display = "none";
    create.style.display = "inline-block";
    logout.style.display = "inline-block";
  } else {
    home.style.display = "inline-block";
    catalog.style.display = "inline-block";
    search.style.display = "inline-block";
    login.style.display = "inline-block";
    register.style.display = "inline-block";
    create.style.display = "none";
    logout.style.display = "none";
  }
}
async function onLogout() {
  logout();
  updateUserNav();
  page.redirect("/");
}
