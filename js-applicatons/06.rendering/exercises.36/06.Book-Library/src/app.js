import { showCatalog } from "./catalog.js";
import { showUpdate } from "./update.js";
import { showCreate } from "./create.js";
import { render } from "./utility.js";

const body = document.querySelector("body");

const ctx = {
  update,
};
update();
function update() {
  render([showCatalog(ctx), showCreate(ctx), showUpdate(ctx)], body);
}
