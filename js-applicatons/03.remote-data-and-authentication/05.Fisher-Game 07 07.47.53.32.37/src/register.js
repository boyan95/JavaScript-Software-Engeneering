window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", onRegister);
});

async function onRegister(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  const email = formData.get("email");
  const password = formData.get("password");
  const repass = formData.get("rePass");
  console.log(email)
  console.log(password)
  console.log(repass)

  const user = { email, password, repass };

  if (email == "" || password == "" || repass == "" || password != repass) {
    throw new Error("Fill out all fields!");
  }
  try{
    const res = await fetch("http://localhost:3030/users/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (res.status != 200) {
        const error = await res.json();
        throw new Error(error.message);
      }
      const data = await res.json();
      const token = data.accessToken;
      localStorage.getItem("token", token);
      window.location = '/05.Fisher-Game/src/index.html';
  }catch(err){
      alert(err.message)
  }
}
