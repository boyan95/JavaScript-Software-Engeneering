class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.pow(this.radius, 2) * Math.PI;
  }
}
let circle = new Circle(2);
console.log(circle.getArea());

Circle.prototype.diameter = function () {
  return this.radius * 2;
};
console.log(circle.diameter())

function Rectangle(width, hight) {
  this.width = width;
  this.hight = hight;
}
let rect = new Rectangle(5, 4);

Rectangle.prototype.area = function () {
  return this.width * this.hight;
};
Rectangle.prototype.perimeter = function () {
  return 2 * this.width + 2 * this.hight;
};

console.log(rect.area());
console.log(rect.perimeter());
