function carFactory(order) {
    const car = {};
  if (order.power <= 90) {
    order.power = { power: 90, volume: 1800 };
  } else if (order.power <= 120) {
    order.power = { power: 120, volume: 2400 };
  } else {
    order.power = { power: 200, volume: 3500 };
  }
  car.model = order.model;
  car.engine = order.power;
  car.carriage = { type: order.carriage, color: order.color};
  
  if(order.wheelsize % 2 === 0){
      order.wheelsize -= 1
  }
  car.wheels = new Array(4).fill(order.wheelsize);
  return car;
}
console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
))