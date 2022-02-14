import { profileMemes } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../utils.js";
//import { login } from "../api/data.js";

const profileTemplate = (profMemes, userProfile) => html` <section
  id="user-profile-page"
  class="user-profile"
>
  <article class="user-info">
    <img
      id="user-avatar-url"
      alt="user-profile"
      src=${userProfile.gender == "male"
        ? "/images/male.png"
        : "/images/female.png"}
    />
    <div class="user-content">
      <p>Username: ${userProfile.username}</p>
      <p>Email: ${userProfile.email}</p>
      <p>My memes count: ${counterMemes}</p>
    </div>
  </article>
  <h1 id="user-listings-title">User Memes</h1>
  <div class="user-meme-listings">
    <!-- Display : All created memes by this user (If any) -->
    ${profMemes && profMemes.length > 0
      ? profMemes.map(memeCard)
      : html`<p class="no-memes">No memes in database.</p>`}
    <!-- Display : If user doesn't have own memes  -->
  </div>
</section>`;

const memeCard = (meme) => html`<div class="user-meme">
  <p class="user-meme-title">${meme.title}</p>
  <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl} />
  <a class="button" href=${`/details/${meme._id}`}>Details</a>
</div>`;

let counterMemes = 0;
export async function profilePage(ctx) {
  const userProfile = getUserData();
  
  const profMemes = await profileMemes(userProfile.id);
  ctx.render(profileTemplate(profMemes, userProfile));

  //const profileMemes = (await getAllMemes()).map((m) => m._ownerId == userId);
}
