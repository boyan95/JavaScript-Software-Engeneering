async function getInfo() {
  const stopId = document.querySelector("#stopId").value;
  const stopName = document.querySelector("#stopName");
  const buses = document.querySelector("#buses");

  // make request to the server
  try {
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    //stopName.textContent =
    let res = await fetch(url);
    // error checking
    if (res.status != 200) {
      throw new Error(`${res.status}`);
    }
    let data = await res.json();
    handleResponse(data);
  } catch (error) {
    handleError(error);
  }

  function handleResponse(data) {
    stopName.textContent = "";
    buses.innerHTML = "";
    stopName.textContent = data.name;

    for (const [key, value] of Object.entries(data.buses)) {
      let liElementBus = document.createElement("li");
      liElementBus.textContent = `Bus ${key} arrives in ${value} minutes`;
      buses.appendChild(liElementBus);
    }
  }
  function handleError(error) {
    stopName.textContent = "";
    buses.innerHTML = "";
    stopName.textContent = "Error";
  }
}
