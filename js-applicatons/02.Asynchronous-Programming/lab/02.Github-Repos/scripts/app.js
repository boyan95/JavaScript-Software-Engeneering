async function loadRepos() {
  let repos = document.querySelector("#repos");
  let username = document.querySelector("#username").value;
  try {
    let response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    if (response.ok == false) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    let data = await response.json();
    handleResponse(data);
  } catch (error) {
    handleError(error);
  }

  function handleResponse(data) {
    repos.innerHTML = "";
    for (let repo of data) {
      const liElement = document.createElement("li");
      liElement.innerHTML = `<a href="${repo.html_url}">
	  ${repo.full_name}
  </a>`;
      repos.appendChild(liElement);
    }
  }

  function handleError(error) {
    repos.innerHTML = "";
    repos.textContent = `${error.message}`;
  }
}
