class List {
  constructor() {
    this.numbersArray = [];
    this.size = 0;
  }

  add(element) {
    this.numbersArray.push(element);
    this.numbersArray.sort((a, b) => a - b);
    this.size++;
  }
  remove(index) {
    this.outOfBoundCheck(index);
    this.numbersArray.splice(index, 1);
    this.size--;
  }
  get(index) {
    this.outOfBoundCheck(index);
    return this.numbersArray[index];
  }
  outOfBoundCheck(index) {
    if (index >= this.numbersArray.length || index < 0) {
      throw new Error("No such index in List");
    }
  }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
