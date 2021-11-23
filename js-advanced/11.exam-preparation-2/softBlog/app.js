function solve() {
  const authorField = document.querySelector("#creator");
  const titleField = document.querySelector("#title");
  const categoryField = document.querySelector("#category");
  const contentField = document.querySelector("#content");
  const createBtn = document.querySelector("button");
  const postsField = document.querySelector(".site-content main section");

  createBtn.addEventListener("click", createPost);

  function createPost(ev) {
    ev.preventDefault();

    //article
    let article = document.createElement("article");
    postsField.appendChild(article);
    //h1
    let h1 = document.createElement("h1");
    h1.innerHTML = titleField.value;
    article.appendChild(h1);
    // paragraphs
    let pCategory = document.createElement("p");
    pCategory.innerHTML = `Category: <strong>${categoryField.value}</strong>`;
    article.appendChild(pCategory);
    let pCreator = document.createElement("p");
    pCreator.innerHTML = `Creator: <strong>${authorField.value}</strong>`;
    article.appendChild(pCreator);
    let pContent = document.createElement("p");
    pContent.innerHTML = contentField.value;
    article.appendChild(pContent);

    // delete button
    let divBtn = document.createElement("div");
    divBtn.classList.add("buttons");
    article.appendChild(divBtn);
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = "Delete";
    divBtn.appendChild(deleteBtn);

    // archive button
    let archiveBtn = document.createElement("button");
    archiveBtn.classList.add("btn");
    archiveBtn.classList.add("archive");
    archiveBtn.innerHTML = "Archive";
    divBtn.appendChild(archiveBtn);

    authorField.value = "";
    titleField.value = "";
    categoryField.value = "";
    contentField.value = "";

    deleteBtn.addEventListener("click", deletePost);

    function deletePost(ev) {
      postsField.removeChild(article);
    }

    archiveBtn.addEventListener("click", archivePost);

    function archivePost(ev) {
      let archive = document.querySelector(".archive-section ol");
      let liTitle = document.createElement("li");
      liTitle.innerHTML = h1.innerHTML;
      archive.appendChild(liTitle);
      postsField.removeChild(article);
 
      let nEntry = archive.getElementsByTagName("li");
      let nEntryArray = Array.prototype.slice.call(nEntry, 0);
      nEntryArray.sort(function (a, b) {
        return a.firstChild.nodeValue.localeCompare(b.firstChild.nodeValue);
      });
      while (archive.lastChild) {
        archive.removeChild(archive.lastChild);
      }
      for (i = 0; i < nEntryArray.length; i++) {
        archive.appendChild(nEntryArray[i]);
      }
    }
  }
}
