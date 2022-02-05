import { html } from "../lib.js";
import { createItem } from "../api/data.js";

const createTemplate = (onSubmit, errorMsg, errors) => html` <div
    class="row space-top"
  >
    <div class="col-md-12">
      <h1>Create New Furniture</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit=${onSubmit}>
    <div class="row space-top">
      <div class="col-md-4">
        ${errorMsg
          ? html`<div class="form-group error">${errorMsg}</div>`
          : null}
        <div class="form-group">
          <label class="form-control-label" for="new-make">Make</label>
          <input
            class=${"form-control" + (errors.make ? " is-invalid" : "is-valid")}
            id="new-make"
            type="text"
            name="make"
          />
        </div>
        <div class="form-group has-success">
          <label class="form-control-label" for="new-model">Model</label>
          <input
            class=${"form-control" +
            (errors.model ? " is-invalid" : "is-valid")}
            id="new-model"
            type="text"
            name="model"
          />
        </div>
        <div class="form-group has-danger">
          <label class="form-control-label" for="new-year">Year</label>
          <input
            class=${"form-control" + (errors.year ? " is-invalid" : "is-valid")}
            id="new-year"
            type="number"
            name="year"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-description"
            >Description</label
          >
          <input
            class=${"form-control" +
            (errors.description ? " is-invalid" : "is-valid")}
            id="new-description"
            type="text"
            name="description"
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="new-price">Price</label>
          <input
            class=${"form-control" +
            (errors.price ? " is-invalid" : "is-valid")}
            id="new-price"
            type="number"
            name="price"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-image">Image</label>
          <input
            class=${"form-control" + (errors.img ? " is-invalid" : "is-valid")}
            id="new-image"
            type="text"
            name="img"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-material"
            >Material (optional)</label
          >
          <input
            class=${"form-control" +
            (errors.material ? " is-invalid" : "is-valid")}
            id="new-material"
            type="text"
            name="material"
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Create" />
      </div>
    </div>
  </form>`;

export function createPage(ctx) {
  update(null, {});
  function update(errorMsg, errors) {
    ctx.render(createTemplate(onSubmit, errorMsg, errors));
  }

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const make = formData.get("make".trim());
    const model = formData.get("model".trim());
    const year = Number(formData.get("year").trim());
    const description = formData.get("description".trim());
    const price = Number(formData.get("price").trim());
    const img = formData.get("img".trim());
    const material = formData.get("material".trim());

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
     const result =  await createItem(data);
      ctx.updateUserNav();
      ctx.page.redirect("/details/" + result._id);
    } catch (err) {
      const message = err.message || err.error.message;
      update(message, err.error || {});
    }
  }
}
