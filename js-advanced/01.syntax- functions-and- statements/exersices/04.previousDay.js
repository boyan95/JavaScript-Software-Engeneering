function previousDay(y, m ,d) {
    let dateString = y + "-" + m + "-" + d;
    let event = new Date(dateString);
    event.setDate(d - 1);
    console.log(event.getFullYear() + "-" + Number(event.getMonth() + 1) +"-" + event.getDate());
      
}
previousDay(2016, 10, 1)
previousDay(2016, 9, 30);
