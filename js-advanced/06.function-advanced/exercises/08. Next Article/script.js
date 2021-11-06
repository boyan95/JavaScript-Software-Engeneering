function getArticleGenerator(articles) {
  const articlesList = articles;
  const output = document.querySelector("#content");

  return () => {
    if (articlesList.length > 0) {
      let article = document.createElement("article");
      let line = articlesList.shift();
      article.textContent = line;
      output.appendChild(article);
    }
  };
}
