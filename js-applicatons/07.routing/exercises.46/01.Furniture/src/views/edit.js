import { html, until } from "../lib.js";
import { getUserData } from "../util.js";
import { editItem, getById } from "../api/data.js";

const editTemplate = (itemPromise) => html`<div class="row space-top">
    <div class="col-md-12">
      <h1>Edit Furniture</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  ${until(
    itemPromise,
    html`<p>Loading&hellip;</p>
      `
  )}`;

const itemTemplate = (item, onSubmit, errorMsg, errors) => html`<form
  @submit=${onSubmit}
>
  ${errorMsg ? html`<div class="form-group error">${errorMsg}</div>` : null}
  <div class="row space-top">
    <div class="col-md-4">
      <div class="form-group">
        <label class="form-control-label" for="new-make">Make</label>
        <input
          class=${"form-control" + (errors.make ? " is-invalid" : " is-valid")}
          id="new-make"
          type="text"
          name="make"
          .value=${item.make}
        />
      </div>
      <div class="form-group has-success">
        <label class="form-control-label" for="new-model">Model</label>
        <input
          class=${"form-control" + (errors.model ? " is-invalid" : " is-valid")}
          id="new-model"
          type="text"
          name="model"
          .value=${item.model}
        />
      </div>
      <div class="form-group has-danger">
        <label class="form-control-label" for="new-year">Year</label>
        <input
          class=${"form-control" + (errors.year ? " is-invalid" : " is-valid")}
          id="new-year"
          type="number"
          name="year"
          .value=${item.year}
        />
      </div>
      <div class="form-group">
        <label class="form-control-label" for="new-description"
          >Description</label
        >
        <input
          class=${"form-control" +
          (errors.description ? " is-invalid" : " is-valid")}
          id="new-description"
          type="text"
          name="description"
          .value=${item.description}
        />
      </div>
    </div>
    <div class="col-md-4">
      <div class="form-group">
        <label class="form-control-label" for="new-price">Price</label>
        <input
          class=${"form-control" + (errors.price ? " is-invalid" : " is-valid")}
          id="new-price"
          type="number"
          name="price"
          .value=${item.price}
        />
      </div>
      <div class="form-group">
        <label class="form-control-label" for="new-image">Image</label>
        <input
          class=${"form-control" + (errors.img ? " is-invalid" : " is-valid")}
          id="new-image"
          type="text"
          name="img"
          .value=${item.img}
        />
      </div>
      <div class="form-group">
        <label class="form-control-label" for="new-material"
          >Material (optional)</label
        >
        <input
          class="form-control"
          id="new-material"
          type="text"
          name="material"
          .value=${item.material}
        />
      </div>
      <input type="submit" class="btn btn-info" value="Edit" />
    </div>
  </div>
</form>`;

export function editPage(ctx) {
  const itemPromise = getById(ctx.params.id);
  update(itemPromise, null, {});

  function update(itemPromise, errorMsg, errors) {
    ctx.render(editTemplate(loadItem(itemPromise, errorMsg, errors)));
  }
  async function loadItem(itemPromise, errorMsg, errors) {
    const item = await itemPromise;
    return itemTemplate(item, onSubmit, errorMsg, errors);
  }
  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const make = formData.get("make").trim();
    const model = formData.get("model").trim();
    const year = Number(formData.get("year").trim());
    const description = formData.get("description").trim();
    const price = Number(formData.get("price").trim());
    const img = formData.get("img").trim();
    const material = formData.get("material").trim();
    try {
      if (
        make == "" ||
        model == "" ||
        year == "" ||
        description == "" ||
        price == "" ||
        img == ""
      ) {
        throw {
          error: new Error("All fields are required!"),
          errors: {
            make: make == "",
            model: model == "",
            year: year == "",
            description: description == "",
            price: price == "",
            img: img == "",
          },
        };
      }
      const data = { make, model, year, description, price, img, material };

      await editItem(ctx.params.id, data);
      event.target.reset();
      ctx.page.redirect(`/details/${ctx.params.id}`);
    } catch (err) {
      const message = err.message || err.error.message;
      update(message, err.error || {});
    }
  }
}
