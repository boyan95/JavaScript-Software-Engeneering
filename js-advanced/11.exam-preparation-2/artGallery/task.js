class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }
  addArticle(articleModel, articleName, quantity) {
    let isAvailable = false;
    articleModel = articleModel.toLowerCase();
    for (let el in this.possibleArticles) {
      if (el == articleModel) {
        isAvailable = true;
      }
    }
    if (!isAvailable) {
      throw new Error("This article model is not included in this gallery!");
    }
    if (!this.listOfArticles.some((el) => el.articleName == articleName)) {
      this.listOfArticles.push({ articleModel, articleName, quantity });
    } else {
      for (let art of this.listOfArticles) {
        if (art.articleModel == articleModel) {
          art.quantity += quantity;
        }
      }
    }
    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    let isNotThere = true;
    for (let el of this.guests) {
      if (el.guestName == guestName) {
        isNotThere = false;
        throw new Error(`${guestName} has already been invited.`);
      }
    }
    if (isNotThere) {
      if (personality == "Vip") {
        this.guests.push({ guestName, points: 500, purchaseArticle: 0 });
      } else if (personality == "Middle") {
        this.guests.push({ guestName, points: 250, purchaseArticle: 0 });
      } else {
        this.guests.push({ guestName, points: 50, purchaseArticle: 0 });
      }
      return `You have successfully invited ${guestName}!`;
    }
  }
  buyArticle(articleModel, articleName, guestName) {
    const articleIndex = this.listOfArticles.findIndex(
      (a) => a.articleName == articleName && a.articleModel == articleModel
    );
    if (articleIndex == -1) {
      throw new Error("This article is not found.");
    }
    if (this.listOfArticles[articleIndex].quantity == 0) {
      return `The ${articleName} is not available.`;
    }
    const guestIndex = this.guests.findIndex((a) => a.guestName == guestName);
    if (guestIndex == -1) {
      return `This guest is not invited.`;
    }
    if (this.guests[guestIndex].points < this.possibleArticles[articleModel]) {
      return "You need to more points to purchase the article.";
    }

    this.guests[guestIndex].points -= this.possibleArticles[articleModel];
    this.listOfArticles[articleIndex].quantity -= 1;
    this.guests[guestIndex].purchaseArticle += 1;
    return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
  }

  showGalleryInfo(criteria) {
    let result = [];
    if (criteria == "article") {
      result.push("Articles information:");
      for (let article of this.listOfArticles) {
        result.push(
          `${article.articleModel} - ${article.articleName} - ${article.quantity}`
        );
      }
    } else if (criteria == "guest") {
      result.push("Guests information:");
      for (const guest of this.guests) {
        result.push(`${guest.guestName} - ${guest.purchaseArticle}`);
      }
    }
    return result.join("\n");
  }
}
const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
console.log('---------------------------------------------------------------------------------')
console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
console.log(artGallery.inviteGuest('John', 'Middle'));
console.log('---------------------------------------------------------------------------------')
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

console.log('---------------------------------------------------------------------------------')
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
