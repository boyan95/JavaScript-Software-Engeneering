function focused() {
  const listOfElements = Array.from(
    document.getElementsByTagName("input")
  ).forEach(f => {
      //focus and paint the field in grey
    element.addEventListener("focus", onFocus);
    // blur the field
    element.addEventListener("blur", onBlur);
  });

  //event function to focus
  function onFocus(ev) {
      // ev.target.parentNode.classList.add('focused');
    ev.target.parentNode.className = "focused";
  }
  //event function to blur
  function onBlur(ev) {
      // ev.target.parentNode.classList.remove('focused');
    ev.target.parentNode.className = "";
  }
}
