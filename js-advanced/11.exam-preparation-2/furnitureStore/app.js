window.addEventListener("load", solve);

function solve() {
  const modelField = document.querySelector("#model");
  const yearField = document.querySelector("#year");
  const descriptionField = document.querySelector("#description");
  const priceField = document.querySelector("#price");
  const addButton = document.querySelector("#add");
  const furnitureList = document.querySelector("#furniture-list");

  addButton.addEventListener("click", add);

  let sum = 0;

  function add(ev) {
    ev.preventDefault();
    if (
      modelField.value == "" ||
      descriptionField.value == "" ||
      yearField.value <= 0 ||
      priceField.value <= 0
    ) {
      return;
    }
    let priceValue = Number(priceField.value);
    const moreInfoButton = document.createElement("button");
    const buyButton = document.createElement("button");
    // tr info
    let trInfo = document.createElement("tr");
    trInfo.classList.add("info");
    let tdModel = document.createElement("td");
    tdModel.innerHTML = modelField.value;
    let tdPrice = document.createElement("td");
    tdPrice.innerHTML = priceValue.toFixed(2);
    let tdButtons = document.createElement("td");
    moreInfoButton.classList.add("moreBtn");
    moreInfoButton.innerHTML = "More Info";
    tdButtons.appendChild(moreInfoButton);
    buyButton.classList.add("buyBtn");
    buyButton.innerHTML = "Buy it";
    tdButtons.appendChild(buyButton);

    trInfo.appendChild(tdModel);
    trInfo.appendChild(tdPrice);
    trInfo.appendChild(tdButtons);
    furnitureList.appendChild(trInfo);

    //tr hide
    let trHide = document.createElement("tr");
    trHide.classList.add("hide");
    let tdYear = document.createElement("td");
    tdYear.innerHTML = `Year: ${yearField.value}`;
    let tdDescription = document.createElement("td");
    tdDescription.innerHTML = `Description: ${descriptionField.value}`;
    tdDescription.colSpan = "3";

    trHide.appendChild(tdYear);
    trHide.appendChild(tdDescription);
    furnitureList.appendChild(trHide);

    modelField.value = "";
    priceField.value = "";
    yearField.value = "";
    descriptionField.value = "";

    moreInfoButton.addEventListener("click", moreInfo);

    function moreInfo(e) {
        const moreContent = e.target.parentElement.parentElement.nextElementSibling;
      if (e.target.textContent == "More Info") {
        moreContent.style.display = "contents";
        e.target.textContent = "Less Info";
      } else {
        e.target.textContent = "More Info";
        moreContent.style.display = "none";
      }
    }
    buyButton.addEventListener("click", buyIt);

    function buyIt(ev) {
      sum += Number(document.querySelectorAll(".info td")[1].textContent);
      document.querySelector(".total-price").innerHTML = sum.toFixed(2);
      furnitureList.removeChild(document.querySelector("#furniture-list tr"));
      furnitureList.removeChild(document.querySelector("#furniture-list tr"));
    }
  }
}
