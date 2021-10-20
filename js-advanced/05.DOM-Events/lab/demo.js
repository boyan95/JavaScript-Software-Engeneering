function solve() {
  const unsorted = document.querySelector("ul");
  const list = Array.from(unsorted.children);
  list.sort((a, b) => {
    return Number(a.textContent) - Number(b.textContent);
  });

  list.forEach((element) => {
    unsorted.appendChild(element);
  });
}
