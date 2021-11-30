function solve() {
  const info = document.querySelector("#info");
  const departButton = document.querySelector("#depart");
  const arriveButton = document.querySelector("#arrive");
  let stop = {
    next: "depot",
  };

  async function depart() {
    departButton.disabled = true;
    arriveButton.disabled = false;
    try {
      const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
      const res = await fetch(url);
      if (res.status != 200) {
        throw new Error();
      }
      stop = await res.json();
      info.textContent = `Next stop ${stop.name}`;
    } catch (error) {
      info.textContent = "Error";
      departButton.disabled = true;
      arriveButton.disabled = true;
    }
  }

  async function arrive() {
    departButton.disabled = false;
    arriveButton.disabled = true;
    info.textContent = `Arriving at ${stop.name}`;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
