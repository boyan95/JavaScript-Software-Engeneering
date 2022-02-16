import { addBook, logout } from "./api/data.js";
import { page, render } from "./lib.js";
import { getUserData } from "./utils.js";
import { dashboardPage } from "./views/dashboard.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { profilePage } from "./views/profile.js";
import { addBookPage } from "./views/addBook.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";


const root = document.querySelector("main");
document.querySelector("#logoutBtn").addEventListener("click", onLogout);
page(decorateContext);

page("/", dashboardPage);
page("/login", loginPage);
page("/register", registerPage);
page("/profile", profilePage);
page("/addBook", addBookPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);


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

  if (userData != null) {
    user.style.display = "block";
    user.querySelector("span").textContent = `Welcome, ${userData.email}`;
    guest.style.display = "none";
  } else {
    user.style.display = "none";
    guest.style.display = "block";
  }
}

export async function onLogout() {
  logout();
  updateUserNav();
  page.redirect("/");
}
