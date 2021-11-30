function attachEvents() {
  document.querySelector("#submit").addEventListener("click", getForecast);
}

attachEvents();

async function getForecast() {
  document.querySelector("#forecast").style.display = "block";
  const current = document.querySelector("#current");
  current.replaceChildren();
  const currentDiv = document.createElement("div");
  currentDiv.className = "label";
  currentDiv.innerText = "Loading...";
  current.appendChild(currentDiv);

  const upcoming = document.querySelector("#upcoming");
  upcoming.replaceChildren();
  const upcomingDiv = document.createElement("div");
  upcomingDiv.className = "label";
  upcomingDiv.innerText = "Loading...";
  upcoming.appendChild(upcomingDiv);

  const symbols = [
    ["Sunny", "&#x2600"],
    ["Partly sunny", "&#x26C5"],
    ["Overcast", "&#x2601"],
    ["Rain", "&#x2614"],
    ["Degrees", "&#176"],
  ];
  const [currentForecast, threeDaysForecast] = await Promise.all([
    getCurrentConditions(),
    get3daysForecast(),
  ]);

  // current
  currentDiv.innerText = "Current conditions";

  const forecastElement = document.createElement("div");
  forecastElement.className = "forecasts";

  const spanSymbol = document.createElement("span");
  spanSymbol.className = "conditional symbol";
  const symbol = currentForecast.forecast.condition;

  symbols.forEach((s) => {
    if (s[0] == symbol) {
      spanSymbol.innerHTML = s[1];
    }
  });
  forecastElement.appendChild(spanSymbol);

  const spanCondition = document.createElement("span");
  spanCondition.className = "condition";

  const spanTownName = document.createElement("span");
  spanTownName.className = "forecast-data";
  spanTownName.innerHTML = currentForecast.name;
  spanCondition.appendChild(spanTownName);

  const spanDegrees = document.createElement("span");
  spanDegrees.className = "forecast-data";
  spanDegrees.innerHTML = `${currentForecast.forecast.low}°/${currentForecast.forecast.high}°`;
  spanCondition.appendChild(spanDegrees);

  const spanCurrentCondition = document.createElement("span");
  spanCurrentCondition.className = "forecast-data";
  spanCurrentCondition.innerHTML = `${currentForecast.forecast.condition}`;
  spanCondition.appendChild(spanCurrentCondition);
  forecastElement.appendChild(spanCondition);
  current.appendChild(forecastElement);

  // upcoming
  upcomingDiv.innerText = "Three-day forecast";
  const forecastElementThreeDays = document.createElement("div");
  forecastElementThreeDays.className = "forecast-info";

  // first day

  const spanFirstDay = document.createElement("span");
  spanFirstDay.className = "upcoming";

  const spanFirstDaySymbol = document.createElement("span");
  spanFirstDaySymbol.className = "symbol";
  symbols.forEach((s) => {
    if (s[0] == threeDaysForecast.forecast[0].condition) {
      spanFirstDaySymbol.innerHTML = s[1];
    }
  });
  spanFirstDay.appendChild(spanFirstDaySymbol);

  const spanFirstDayDegrees = document.createElement("span");
  spanFirstDayDegrees.className = "forecast-data";

  spanFirstDayDegrees.innerHTML = `${threeDaysForecast.forecast[0].low}°/${threeDaysForecast.forecast[0].high}°`;
  spanFirstDay.appendChild(spanFirstDayDegrees);

  const spanFirstDayCondition = document.createElement("span");
  spanFirstDayCondition.className = "forecast-data";
  spanFirstDayCondition.innerHTML = `${threeDaysForecast.forecast[0].condition}`;
  spanFirstDay.appendChild(spanFirstDayCondition);
  forecastElementThreeDays.appendChild(spanFirstDay);
  upcoming.appendChild(forecastElementThreeDays);

  // second day

  const spanSecondDay = document.createElement("span");
  spanSecondDay.className = "upcoming";

  const spanSecondDaySymbol = document.createElement("span");
  spanSecondDaySymbol.className = "symbol";
  symbols.forEach((s) => {
    if (s[0] == threeDaysForecast.forecast[1].condition) {
      spanSecondDaySymbol.innerHTML = s[1];
    }
  });
  spanSecondDay.appendChild(spanSecondDaySymbol);

  const spanSecondDayDegrees = document.createElement("span");
  spanSecondDayDegrees.className = "forecast-data";

  spanSecondDayDegrees.innerHTML = `${threeDaysForecast.forecast[1].low}°/${threeDaysForecast.forecast[1].high}°`;
  spanSecondDay.appendChild(spanSecondDayDegrees);

  const spanSecondDayCondition = document.createElement("span");
  spanSecondDayCondition.className = "forecast-data";
  spanSecondDayCondition.innerHTML = `${threeDaysForecast.forecast[1].condition}`;
  spanSecondDay.appendChild(spanSecondDayCondition);
  forecastElementThreeDays.appendChild(spanSecondDay);
  upcoming.appendChild(forecastElementThreeDays);

  // Third day

  const spanThirdDay = document.createElement("span");
  spanThirdDay.className = "upcoming";

  const spanThirdDaySymbol = document.createElement("span");
  spanThirdDaySymbol.className = "symbol";
  symbols.forEach((s) => {
    if (s[0] == threeDaysForecast.forecast[2].condition) {
      spanThirdDaySymbol.innerHTML = s[1];
    }
  });
  spanThirdDay.appendChild(spanThirdDaySymbol);

  const spanThirdDayDegrees = document.createElement("span");
  spanThirdDayDegrees.className = "forecast-data";

  spanThirdDayDegrees.innerHTML = `${threeDaysForecast.forecast[2].low}°/${threeDaysForecast.forecast[2].high}°`;
  spanThirdDay.appendChild(spanThirdDayDegrees);

  const spanThirdDayCondition = document.createElement("span");
  spanThirdDayCondition.className = "forecast-data";
  spanThirdDayCondition.innerHTML = `${threeDaysForecast.forecast[2].condition}`;
  spanThirdDay.appendChild(spanThirdDayCondition);
  forecastElementThreeDays.appendChild(spanThirdDay);
  upcoming.appendChild(forecastElementThreeDays);
}

async function getLocation() {
  const currentLocation = document.querySelector("#location").value;
  try {
    const url = `http://localhost:3030/jsonstore/forecaster/locations`;
    const res = await fetch(url);
    const data = await res.json();
    const result = data.filter((l) => l.name == currentLocation);
    if (result.length > 0) {
      return result[0].code;
    } else {
      throw new Error("Invalid city name! This city doesn't exist in our list of cities. Please give a correct city name!");
    }
  } catch (error) {
    document.querySelector("#current").innerText =
    "Invalid city name! This city doesn't exist in our list of cities. Please give a correct city name!";
    document.querySelector("#upcoming").replaceChildren();
    throw new Error("Invalid city! Please give a correct city name!", error);
  }
}

async function getCurrentConditions() {
  let town = await getLocation();

  const url = `http://localhost:3030/jsonstore/forecaster/today/` + town;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

async function get3daysForecast() {
  let town = await getLocation();

  const url = `http://localhost:3030/jsonstore/forecaster/upcoming/` + town;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
