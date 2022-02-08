import { search } from "../api/data.js";
import { html } from "../lib.js";

//import { login } from "../api/data.js";

const searchTemplate = (onSearch) => html`<section id="searchPage">
  <h1>Search by Name</h1>

  <div class="search">
    <input
      id="search-input"
      type="text"
      name="search"
      placeholder="Enter desired albums's name"
    />
    <button @click=${onSearch} class="button-list">Search</button>
  </div>

  <h2>Results:</h2>
  ${onSearch.length == 0
    ? html`<p class="no-result">No result.</p>`
    : result.map(searchedAlbumTemplate)}
</section>`;

const searchedAlbumTemplate = (album) => html`<div class="search-result">
  <div class="card-box">
    <img src=${album.imgUrl} />
    <div>
      <div class="text-center">
        <p class="name">Name: ${album.name}</p>
        <p class="artist">Artist: ${album.artist}</p>
        <p class="genre">Genre: ${album.genre}</p>
        <p class="price">Price: $${album.price}</p>
        <p class="date">Release Date: ${album.releaseDate}</p>
      </div>
      <div class="btn-group">
        <a href="/details/${album._id}" id="details">Details</a>
      </div>
    </div>
  </div>
</div>`;

export async function searchPage(ctx) {

  ctx.render(searchTemplate(onSearch));

  async function onSearch() {
    const searchedAlbum = searchTemplate().getElementById("search-input").value.trim();
    if(searchedAlbum == ''){
      return alert('Field is empty')
    }
    return await search(searchedAlbum);
  }
}

/**
 
<!--Show after click Search button-->
  <div class="search-result">
    <!--If have matches-->
    <div class="card-box">
      <img src="./images/BrandiCarlile.png" />
      <div>
        <div class="text-center">
          <p class="name">Name: In These Silent Days</p>
          <p class="artist">Artist: Brandi Carlile</p>
          <p class="genre">Genre: Low Country Sound Music</p>
          <p class="price">Price: $12.80</p>
          <p class="date">Release Date: October 1, 2021</p>
        </div>
        <div class="btn-group">
          <a href="#" id="details">Details</a>
        </div>
      </div>
    </div>

    <!--If there are no matches-->
    <p class="no-result">No result.</p>
  </div>
 */
