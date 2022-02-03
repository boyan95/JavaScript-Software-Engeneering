import page from "//unpkg.com/page/page.mjs";

function homePage() {
  main.innerHTML = "<h2>Home Page</h2><p>Welcome to our site!</p>";
}
function catalogPage() {
  main.innerHTML =
    "<h2>Our Catalog</h2><p>List of items!</p><a href='/catalog/1234'>Product</a>";
}
function checkout() {
  main.innerHTML = "<h2>Check ot products</h2><p>Products in cart.</p>";
}
function detailsPage(ctx) {
  console.log(ctx);
  main.innerHTML =
    "<h2>Product details</h2><p>details</p><button>Buy now</button>";
  document.querySelector('button').addEventListener('click',() => {
    page.redirect('/checkout')
  })
}
function aboutPage() {
  main.innerHTML = "<h2>About us</h2><p>Contact: +1-555-9799</p>";
}

const views = {
  "/catalog/kitchens": () => "<h2>Kitchen Equipment</h2><p>List of items!</p>",
};

// приема два параметъра: 1. адреса, на който се случва нещото и 2. нещото, което се случва т.е. функция

const main = document.querySelector("main");

page("/home", homePage);
page("/catalog", catalogPage);
page("/catalog/:id", detailsPage);
page("/about", aboutPage);
page("/checkout", checkout);

page.redirect("/", "/home");
page.start();
