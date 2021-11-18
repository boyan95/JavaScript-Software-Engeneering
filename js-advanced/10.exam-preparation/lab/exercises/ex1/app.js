window.addEventListener("load", solve);

function solve() {
  const modelField = document.querySelector("#model");
  const yearField = document.querySelector("#year");
  const descriptionField = document.querySelector("#description");
  const priceField = document.querySelector("#price");
  const addButton = document.querySelector("#add");
  const informationField = document.querySelector("#information");
  const furnitureList = document.querySelector("#furniture-list");
  const totalField = document.querySelector(".total-price");
  addButton.addEventListener("click", addItem);
  let totalSum = 0;
  //et fixedPrice = Number(priceField.value.toFixed(2));

  let moreInfoButton = document.createElement("button");
  let buyItButton = document.createElement("button");
  function addItem(ev) {
    ev.preventDefault();
    if (
      modelField.value == "" ||
      yearField.value <= 0 ||
      descriptionField.value == "" ||
      priceField.value <= 0
    ) {
      return;
    }
    // moreInfo button
    moreInfoButton.classList.add("moreBtn");
    moreInfoButton.innerHTML = "More Info";
    // buyIt button
    buyItButton.classList.add("buyBtn");
    buyItButton.innerHTML = "Buy it";

    // td for tr Info
    let tdModel = document.createElement("td");
    tdModel.innerHTML = modelField.value;
    let tdPrice = document.createElement("td");
    tdPrice.innerHTML = `${priceField.value}.00`;
    let tdButtons = document.createElement("td");
    tdButtons.appendChild(moreInfoButton);
    tdButtons.appendChild(buyItButton);

    //td for tr Hide
    let tdYear = document.createElement("td");
    tdYear.innerHTML = `Year: ${yearField.value}`;
    let tdDescription = document.createElement("td");
    tdDescription.colSpan = "3";
    tdDescription.innerHTML = descriptionField.value;

    // tr Info
    let trInfo = document.createElement("tr");
    trInfo.classList.add("info");
    trInfo.appendChild(tdModel);
    trInfo.appendChild(tdPrice);
    trInfo.appendChild(tdButtons);

    // tr Hide
    let trHide = document.createElement("tr");
    trHide.classList.add("hide");
    trHide.appendChild(tdYear);
    trHide.appendChild(tdDescription);

    furnitureList.appendChild(trInfo);
    furnitureList.appendChild(trHide);
    modelField.value = "";
    priceField.value = "";
    descriptionField.value = "";
    yearField.value = "";
  }
  moreInfoButton.addEventListener("click", showMoreInfo);
  buyItButton.addEventListener("click", buyIt);

  function showMoreInfo(ev) {
    if (moreInfoButton.innerHTML == "More Info") {
      document.querySelector(".hide").style.display = "contents";
      moreInfoButton.innerHTML = "Less Info";
    } else {
      document.querySelector(".hide").style.display = "none";
      moreInfoButton.innerHTML = "More Info";
    }
  }
  function buyIt(ev) {
    totalSum += Number(document.querySelectorAll('.info td')[1].innerHTML);
    totalField.innerHTML = `${totalSum}.00`;
    furnitureList.remove(document.querySelector('.info'))
    furnitureList.remove(document.querySelector('.hide'))
  }
}
