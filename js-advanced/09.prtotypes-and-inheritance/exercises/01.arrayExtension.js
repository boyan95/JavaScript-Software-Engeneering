(function () {
    Array.prototype.last = function () {
      return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
      let result = this.slice(n);
      return result;
    };
    Array.prototype.take = function (n) {
      let result = this.slice(0, n + 1);
      return result;
    };
    Array.prototype.sum = function () {
      return this.reduce((acc, c) => {
        return acc + c;
      });
    };
    Array.prototype.average = function () {
      return (
        this.reduce((acc, c) => {
          return acc + c;
        }) / this.length
      );
    };
  })()
let myArr = [1, 2, 3, 12];
console.log(myArr.last());
console.log(myArr.skip(2));
console.log(myArr.take(2));
console.log(myArr.sum());
console.log(myArr.average());
