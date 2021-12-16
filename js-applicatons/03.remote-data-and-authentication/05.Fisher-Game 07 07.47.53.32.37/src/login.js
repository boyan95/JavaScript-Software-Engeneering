window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", onLogin);
});

async function onLogin(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const url = "http://localhost:3030/users/login/";
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const res = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (email == "" || password == "" || res.status != 200) {
      const error = await res.json();
      alert("Please fill out all fields!");
      throw new Error(error.message);
    }
    const data = await res.json();
    const userData =  {
        email: data.email,
        password: data.password,
        token: data.accessToken,
        id: data._id
    }
    
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location = '/05.Fisher-Game/src/index.html';
 
  } catch (err) {
    alert(err.message);
  }
}
