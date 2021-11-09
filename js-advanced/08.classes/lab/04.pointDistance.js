class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    static distance(a, b) {
        // a = x1; a = y1;
        // b = x2; b = y2;
        // x = x2 - x1;
        // y = y2 - y1;
        // c = sqrt(a**2 + b**2);
        // Math.sqrt((9-5)**2) +(8-5)**2) => 16 + 9 = 25 => Math.sqrt(25) = 5;
      return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y -b.y, 2));
    }
  }
  
  let p1 = new Point(1, 1);
  let p2 = new Point(4, 5);
  console.log(Point.distance(p1, p2));
  