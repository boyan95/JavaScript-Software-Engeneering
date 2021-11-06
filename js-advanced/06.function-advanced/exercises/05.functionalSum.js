function add(num1) {
  sum = num1;
  function add2(num2) {
    sum += num2;
    return add2;
  }
  add2.toString = () =>{
    return sum;
}
return add2
}
console.log(add(1)(6)(-3)(4).toString());
