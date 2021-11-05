function sortList(list, command) {
  
  if (command == "asc") {
    return list.sort((a, b) => {
      return a - b;
    });
  } else if (command == "desc") {
    return list.sort((a, b) => {
      return b - a;
    });
  }
}
sortList([14, 7, 17, 6, 8], "asc");
sortList([14, 7, 17, 6, 8], 'desc');
