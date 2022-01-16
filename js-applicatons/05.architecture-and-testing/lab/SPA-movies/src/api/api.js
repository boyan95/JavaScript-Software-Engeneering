const host = "http://localhost:3030";

async function request(url, options) {
  try {
    const response = await fetch(host + url, options);

    if (response.ok != true) {
      if (response.status == 403) {
        sessionStorage.removeItem("userData");
      }
      const error = await response.json();
      throw new Error(error.message);
    }

    if (response.status == 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (err) {
    alert(err.message);
    return err;
  }
}

function createOption(method = "get", data) {
  const options = { method, headers: {} };

  if (data != undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData != null) {
    options.headers["X-Authorization"] = userData.token;
  }
  return options;
}

async function get(url) {
  return request(url, createOption());
}

async function post(url, data) {
  return request(url, createOption("post", data));
}

async function del(url) {
  return request(url, createOption("delete"));
}
async function put(url, data) {
  return request(url, createOption("put", data));
}
async function login(email, password) {
  const res = await request(
    "/users/login",
    createOption("post", { email, password })
  );
  const userData = {
    email: res.email,
    id: res._id,
    token: res.accessToken,
  };
  sessionStorage.setItem("userData", JSON.stringify(userData));
}

async function register(email, password) {
  const res = await request(
    "/users/register",
    createOption("post", { email, password })
  );
  const userData = {
    email: res.email,
    id: res._id,
    token: res.accessToken,
  };
  sessionStorage.setItem("userData", JSON.stringify(userData));
}

async function logout() {
  await request("/users/logout", createOption());
  sessionStorage.removeItem("userData");
}

export { get, post, del, put, login, register, logout };
