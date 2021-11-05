function solution() {
  let output = "";

  return {
    append: (s) => (output += s),
    removeStart: (n) => (output = output.substring(n)),
    removeEnd: (n) => (output = output.substring(0, output.length - n)),
    print: () => console.log(output),
  };
}

let firstZeroTest = solution();

firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();

secondZeroTest.append("123");
secondZeroTest.append("45");
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
