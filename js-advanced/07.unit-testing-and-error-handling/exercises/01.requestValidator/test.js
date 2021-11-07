function validator(obj) {
  const methods = ["GET", "POST", "DELETE", "CONNECT"];
  const versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const patternUri = /(^[\w.]+$)/g;
  const patternMessage = /([<>\\&'"]+)/g;

  if (!obj.method || !methods.includes(obj.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }
  if (!obj.uri || obj.uri == "" || !patternUri.test(obj.uri)) {
    throw new Error("Invalid request header: Invalid URI");
  }
  if (!obj.version || !versions.includes(obj.version)) {
    throw new Error("Invalid request header: Invalid Version");
  }
  if (!obj.message || patternMessage.test(obj.message)) {
    if (obj.message != "") {
      throw new Error("Invalid request header: Invalid Message");
    }
  }
  return obj;
}

console.log(
  validator({
    method: "GET",
    uri: "svn.public.catalog",
    version: "HTTP/1.1",
    message: "",
  })
);
