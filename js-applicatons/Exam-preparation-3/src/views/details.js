import { html } from "../lib.js";
import { delGame, getGameById } from "../api/data.js";
import { getUserData } from "../utils.js";

const detailsTemplate = (
  game,
  isOwner,
  isLogged,
  onDelete
) => html`<section id="game-details">
<h1>Game Details</h1>
<div class="info-section">
  <div class="game-header">
    <img class="game-img" src=${game.imageUrl} />
    <h1>${game.title}</h1>
    <span class="levels">MaxLevel: ${game.maxLevel}</span>
    <p class="type">${game.category}</p>
  </div>

  <p class="text">
    ${game.summary}
  </p>
  ${
    isOwner
      ? html` <div class="buttons">
          <a href="/edit/${game._id}" class="button">Edit</a>
          <a @click=${onDelete} href="javascript:void(0)" class="button"
            >Delete</a
          >
        </div>`
      : null
  }

  ${
    isLogged == true && isOwner == false
      ? html`<article class="create-comment">
          <label>Add new comment:</label>
          <form class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>`
      : null
  }

</section>`;

export async function detailsPage(ctx) {
  const game = await getGameById(ctx.params.id);
  const userData = getUserData();
  const isOwner = userData && userData.id == game._ownerId;
  const isLogged = userData != null;
  ctx.render(detailsTemplate(game, isOwner, isLogged, onDelete));

  async function onDelete() {
    await delGame(ctx.params.id);
    ctx.page.redirect("/");
  }
}

// BONUS

/**
 <!-- Bonus ( for Guests and Users ) -->
  <div class="details-comments">
    <h2>Comments:</h2>
    <ul>
      <!-- list all comments for current game (If any) -->
      <li class="comment">
        <p>Content: I rate this one quite highly.</p>
      </li>
      <li class="comment">
        <p>Content: The best game.</p>
      </li>
    </ul>
    <!-- Display paragraph: If there are no games in the database -->
    <p class="no-comment">No comments.</p>
  </div>

  
</div>

<!-- Bonus -->
 */
