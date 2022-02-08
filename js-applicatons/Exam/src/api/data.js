import * as api from "./api.js";

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// create
export async function createAlbum(data) {
  return api.post("/data/albums", data);
}
// catalog
export async function getAllAlbums() {
  return api.get("/data/albums?sortBy=_createdOn%20desc&distinct=name");
}
// search
export async function search(query) {
  return api.get(`/data/albums?where=name%20LIKE%20%22${query}%22`);
}
// details
export async function getAlbumById(id) {
  return api.get("/data/albums/" + id);
}
// edit
export async function editAlbum(id, data) {
  return api.put("/data/albums/" + id, data);
}
// delete
export async function delAlbum(id) {
  return api.del("/data/albums/" + id);
}
