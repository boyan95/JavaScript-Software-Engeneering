async function loadCommits() {
  const username = document.querySelector("#username").value;
  const repo = document.querySelector("#repo").value;
  const commits = document.querySelector("#commits");

  try {
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;
    let res = await fetch(url);
    if (res.ok == false) {
      throw new Error(`${res.status}`);
    }
    let data = await res.json();
    handleResponse(data);
  } catch (error) {
    handleError(error);
  }

  function handleResponse(data) {
    commits.innerHTML = "";
    for (let element of data) {
      let liElement = document.createElement("li");
      liElement.innerHTML = `${element.commit.author.name}: ${element.commit.message}`;
      commits.appendChild(liElement);
    }
  }
  function handleError(error) {
    commits.innerHTML = "";
    let liElement = document.createElement("li");
    liElement.innerHTML = `Error: ${error.message} (Not Found)`;
    commits.appendChild(liElement)
  }
}
