function solve() {
  const shoppingList = document.getElementsByClassName("shopping-cart")[0];

  shoppingList.addEventListener("click", onClick);

  const checkoutButton = document.getElementsByClassName("checkout")[0];

  checkoutButton.addEventListener("click", checkout);

  const result = document.getElementsByTagName("textarea")[0];
  let cart = [];
  result.value = "";

  function onClick(ev) {
    if (
      ev.target.tagName === "BUTTON" &&
      ev.target.classList.contains("add-product")
    ) {
      const product = ev.target.parentNode.parentNode;
      const productName = product.querySelector(".product-title").textContent;
      const productPrice = Number(
        product.querySelector(".product-line-price").textContent
      );
      cart.push({
        productName,
        productPrice,
      });
      result.value += `Added ${productName} for ${productPrice.toFixed(
        2
      )} to the cart.\n`;
    }
  }
  function checkout(ev) {
   
    if (
      ev.target.tagName === "BUTTON" &&
      ev.target.classList.contains("checkout")
    ) {
      //checkoutButton.removeEventLister("click", checkout);
      let products = new Set();
      cart.forEach((p) => {
        products.add(p.productName);
      });
      let sum = 0;
      cart.forEach((p) => {
        sum += p.productPrice;
      });
      result.value += `You bought ${[...products.keys()].join(
        ", "
      )} for ${sum.toFixed(2)}.`;
      
    }

    
  }
}
