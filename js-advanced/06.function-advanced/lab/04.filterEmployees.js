function filter(data, criteria) {
  const parsedData = JSON.parse(data);

  if (criteria != "all") {
    let [key, value] = criteria.split("-");
    filteredData = [];
    for (person of parsedData) {
      if (key in person && person[key] === value) {
        filteredData.push(person);
      }
    }
    for (i = 0; i < filteredData.length; i++) {
      let currentPerson = filteredData[i];
      console.log(
        `${i}. ${currentPerson.first_name} ${currentPerson.last_name} - ${currentPerson.email}`
      );
    }
  } else {
    for (i = 0; i < parsedData.length; i++) {
      let currentPerson = parsedData[i];
      console.log(
        `${i}. ${currentPerson.first_name} ${currentPerson.last_name} - ${currentPerson.email}`
      );
    }
  }
}

filter(
  `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
  "last_name-Johnson"
);
