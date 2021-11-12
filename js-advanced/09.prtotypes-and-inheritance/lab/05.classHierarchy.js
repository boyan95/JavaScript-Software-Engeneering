class Figure {
  constructor() {
    
  }
  get area(value) {
      return value;
  }
  changeUnits() {}
  toString() {
      return `Figures units: cm `
  }
}

class Circle extends Figure{
    constructor(radius){
        this.radius = radius;
    }
   get area(){
      return this.radius **2 * Math.PI; 
   } 
}