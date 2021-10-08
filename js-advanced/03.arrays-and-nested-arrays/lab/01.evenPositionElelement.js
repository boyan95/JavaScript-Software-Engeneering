function evenPositions(input) {
  const toPrint = [];

  for (let index = 0; index < input.length; index++) {
    if (index % 2 === 0) {
      toPrint.push(input[index]);
    }
  }
  console.log(toPrint.join(" "));
}
evenPositions(["20", "30", "40", "50", "60"]);
