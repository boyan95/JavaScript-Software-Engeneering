function deleteByEmail() {
  //TODO: Write a program that takes an email
  //from an input field and deletes the matching
  //row from a table.
  const emails = document.querySelector("tbody");
  let input = document.querySelector("input[name='email']");
  
  let list = Array.from(emails.children).filter(r =>
    r.children[1].textContent == input.value);

  list.forEach((r) => r.remove());

  document.querySelector("#result").textContent =
    list.length > 0 ? "Deleted." : "Not found.";

  input.value = "";
}
