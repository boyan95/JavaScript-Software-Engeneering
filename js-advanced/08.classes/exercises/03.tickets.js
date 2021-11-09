function ticketGenerator(arr, parameter) {
  let ticketsList = [];
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  for (line of arr) {
    let [destination, price, status] = line.split("|");
    ticketsList.push(new Ticket(destination, Number(price), status));
  }

  switch (parameter) {
    case "destination":
      ticketsList.sort(function (a, b) {
        return a.destination.localeCompare(b.destination);
      });
      break;
    case "price":
      ticketsList.sort(function (a, b) {
        return a.price - b.price;
      });
      break;
    case "status":
      ticketsList.sort(function (a, b) {
        return a.status.localeCompare(b.status);
      });
      break;
  }

  return ticketsList;
}

//console.log(ticketsList);

console.log(
  ticketGenerator(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);
