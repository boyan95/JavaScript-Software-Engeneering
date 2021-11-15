(function () {
  String.prototype.ensureStart = function (str) {
    let toStr = this.toString();
    if (toStr.startsWith(str)) {
      return toStr;
    } else {
      return str + toStr;
    }
  };
  String.prototype.ensureEnd = function (str) {
    let toStr = this.toString();
    if (toStr.endsWith(str)) {
      return toStr;
    } else {
      return toStr + str;
    }
  };
  String.prototype.isEmpty = function () {
    return this.length == 0;
  };
  String.prototype.truncate = function (n) {
    let toStr = this.toString();
    if (this.length < n) {
      return toStr;
    } else {
      // TODO write till the end
    }
  };
})();

let str = "my string";
str = str.ensureStart("my");
console.log(str);
str = str.ensureStart("hello ");
console.log(str);
str = str.truncate(16);
console.log(str);
//str = str.truncate(14);
//str = str.truncate(8);
//str = str.truncate(4);
//str = str.truncate(2);
//str = String.format("The {0} {1} fox", "quick", "brown");
//str = String.format("jumps {0} {1}", "dog");
