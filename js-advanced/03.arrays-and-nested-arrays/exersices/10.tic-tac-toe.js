function ticTacToe(input) {
  let dashboard = [];
  for (index = 0; index < 3; index++) {
    dashboard.push([]);
  }
  for (index = 0; index < dashboard.length; index++) {
    for (index2 = 0; index2 < dashboard.length; index2++) {
      dashboard[index].push("false");
    }
  }
  const firstPlayer = "X";
  const secondPlayer = "O";
  let turn = 1;
  let takenPlaces = 0;
  let indexP = 0;


  for (indexI = indexP; indexI < input.length; indexI++) {
    let [row, col] = input[indexI].split(" "); // destructure

    let diagR = [];
    let diagL = [];
    let rows = [];
    let cols = [];

    if (takenPlaces === input.length - 1) {
      console.log("The game ended! Nobody wins :(");
      break;
    }
    if (dashboard[row][col] === "false") {
      takenPlaces++;
      
      if (turn % 2 === 1) {
        dashboard[row][col] = firstPlayer;
      } else {
        dashboard[row][col] = secondPlayer;
      }
    } else {
      console.log("This place is already taken. Please choose another!");
      indexP--
    }
    for (i = 0; i < dashboard.length; i++) {
      for (i2 = 0; i2 < dashboard[i].length; i2++) {
        rows.push(dashboard[i][i2]);
        cols.push(dashboard[i2][i]);
        diagR.push(dashboard[i2][i2]);
        diagL.push(dashboard[i][dashboard.length - 1 - i2]);
      }
    }
    let rowsEqual = (currentValue) =>
      currentValue === firstPlayer || currentValue === secondPlayer;
    let colsEqual = (currentValue) =>
      currentValue === firstPlayer || currentValue === secondPlayer;
    let diagREqual = (currentValue) =>
      currentValue === firstPlayer || currentValue === secondPlayer;
    let diagLEqual = (currentValue) =>
      currentValue === firstPlayer || currentValue === secondPlayer;

    if (rows.every(rowsEqual)) {
      if (rows[0] === firstPlayer) {
        console.log(`Player ${firstPlayer} wins!`);
        break;
      } else if (rows[0] === secondPlayer) {
        console.log(`Player ${secondPlayer} wins!`);
        break;
      }
    } else if (cols.every(colsEqual)) {
      if (cols[0] === firstPlayer) {
        console.log(`Player ${firstPlayer} wins!`);
        break;
      } else if (cols[0] === secondPlayer) {
        console.log(`Player ${secondPlayer} wins!`);
        break;
      }
    } else if (diagR.every(diagREqual)) {
      if (diagR[0] === firstPlayer) {
        console.log(`Player ${firstPlayer} wins!`);
        break;
      } else if (diagR[0] === secondPlayer) {
        console.log(`Player ${secondPlayer} wins!`);
        break;
      }
    } else if (diagL.every(diagLEqual)) {
      if (diagL[0] === firstPlayer) {
        console.log(`Player ${firstPlayer} wins!`);
        break;
      } else if (diagL[0] === secondPlayer) {
        console.log(`Player ${secondPlayer} wins!`);
        break;
      }
    }
  }
  for (i = 0; i < dashboard.length; i++) {
    console.log(dashboard[i].join("\t"));
  }
}

ticTacToe([
  "0 0",
  "0 0",
  "1 1",
  "0 1",
  "1 2",
  "0 2",
  "2 2",
  "1 2",
  "2 2",
  "2 1",
]);
console.log("-------------------------------");
ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);
