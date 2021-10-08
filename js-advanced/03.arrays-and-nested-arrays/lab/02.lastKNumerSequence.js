function lastK(n, k) {
    let num = Number(n);
    let kk= Number(k);
  let toPrint = [];
  toPrint.push(1);

  for (index = 1; index < n; index++) {
    if (toPrint.length < kk) {
      let result = 0;
      for (let el of toPrint) {
        result += el;
      }
      toPrint.push(result);
    } else {
      let result = 0;
      for (i = 1; i <= kk; i++) {
        result += toPrint[toPrint.length - i];
      }
      toPrint.push(result);
    }
  }
  return toPrint;
}
lastK(6, 3);
lastK(8, 2);
