/**
 *
 * @param {function} area
 * @param {function}} vol
 * @param {String} input
 */
 function solve(area, vol, input) {
    const parsedInput = JSON.parse(input);
    let output = [];
    for (let row of parsedInput) {
      const cubeArea = area.apply(row); // --> row.area()
      const cubeVolume = vol.apply(row);
      output.push({ area: cubeArea, volume: cubeVolume });
    }
    return output;
  }

data = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`;

console.log(solve(area, vol, data));

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}
