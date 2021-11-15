function createComputerHierarchy() {
  //TODO: implement all the classes, with their properties
  class Keyboard {
    constructor(manufacturer, responseTime) {
      this.manufacturer = manufacturer;
      this.responseTime = responseTime;
    }
  }
  class Battery {
    constructor(manufacturer, expectedLife) {
      this.manufacturer = manufacturer;
      this.expectedLife = expectedLife;
    }
  }
  class Monitor {
    constructor(manufacturer, width, height) {
      this.manufacturer = manufacturer;
      this.width = width;
      this.height = height;
    }
  }
  class Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      if (new.target == Computer) {
        throw new Error("Abstract class!");
      }
      this.manufacturer = manufacturer;
      this.processorSpeed = processorSpeed;
      this.ram = ram;
      this.hardDiskSpace = hardDiskSpace;
    }
  }
  class Laptop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      weight,
      color,
      battery
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.weight = weight;
      this.color = color;
      this._battery = battery;
    }
    get battery() {
      return this._battery;
    }
    set battery(value) {
      if (value instanceof Battery) {
        this._battery = value;
      } else {
        throw new TypeError("Invalid instance");
      }
    }
  }
  class Desktop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      keyboard,
      monitor
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this._keyboard = keyboard;
      this._monitor = monitor;
    }
    get keyboard() {
      return this._keyboard;
    }
    set keyboard(value) {
      if (value instanceof Keyboard) {
        this._keyboard = value;
      } else {
        throw new TypeError("Invalid instance");
      }
    }
    get monitor() {
      return this._monitor;
    }
    set monitor(value) {
      if (value instanceof Monitor) {
        this._monitor = value;
      } else {
        throw new TypeError("Invalid instance");
      }
    }
  }

  return {
    Battery,
    Keyboard,
    Monitor,
    Computer,
    Laptop,
    Desktop,
  };
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery("Energy", 3);
console.log(battery);
let laptop = new Laptop(
  "Hewlett Packard",
  2.4,
  4,
  0.5,
  3.12,
  "Silver",
  battery
);
console.log(laptop);
