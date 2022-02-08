import { html } from "../lib.js";
import { getAllAlbums } from "../api/data.js";
import { getUserData } from "../utils.js";

const catalogTemplate = (allAlbums, isLogged) => html` <section
  id="catalogPage"
>
  <h1>All Albums</h1>
  ${allAlbums.length == 0
    ? html`<p>No Albums in Catalog!</p>`
    : allAlbums.map((album) => albumCard(album, isLogged))}
</section>`;

const albumCard = (album, isLogged) => html` <div class="card-box">
  <img src=${album.imgUrl} />
  <div>
    <div class="text-center">
      <p class="name">Name: ${album.name}</p>
      <p class="artist">Artist: ${album.artist}</p>
      <p class="genre">Genre: ${album.genre}</p>
      <p class="price">Price: $${album.price}</p>
      <p class="date">Release Date: ${album.releaseDate}</p>
    </div>
    ${isLogged
      ? html`<div class="btn-group">
          <a href="/details/${album._id}" id="details">Details</a>
        </div>`
      : null}
  </div>
</div>`;

export async function catalogPage(ctx) {
  const allAlbums = await getAllAlbums();
  const userData = getUserData();
  const isLogged = userData != null;
  ctx.render(catalogTemplate(allAlbums, isLogged));
}
