function dayInAMonth(m, y){
    let daysInMonth = new Date(y, m, 0).getDate();
    console.log(daysInMonth);
}
dayInAMonth(1, 2012)
dayInAMonth(2, 2021)