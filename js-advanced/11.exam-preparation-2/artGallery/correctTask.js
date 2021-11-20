class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            'picture': 200,
            'photo': 50,
            'item': 250
        };
        this.listOfArticles = [];
        this.guests = [];
    }
 
    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLocaleLowerCase()
        if (!this.possibleArticles[articleModel]) {
            throw new Error('This article model is not included in this gallery!');
        }
        const articleIndex = this.listOfArticles.findIndex(a => a.articleName == articleName && a.articleModel == articleModel);
        if (articleIndex > -1) {
            this.listOfArticles[articleIndex].quantity += quantity;
        } else {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
 
 
    inviteGuest(guestName, personality) {
        if (this.guests.findIndex(a => a.guestName == guestName) > -1) {
            throw new Error(`${guestName} has already been invited.`);
        } else {
            let points = 50;
            if (personality == 'Vip') points = 500;
            else if (personality == 'Middle') points = 250;
 
            this.guests.push({ guestName, points, purchaseArticle: 0 });
            return `You have successfully invited ${guestName}!`;
        }
    }
 
    buyArticle(articleModel, articleName, guestName) {
        const articleIndex = this.listOfArticles.findIndex(a => a.articleName == articleName && a.articleModel == articleModel);
        if (articleIndex == -1) {
            throw new Error('This article is not found.');
        }
        if (this.listOfArticles[articleIndex].quantity == 0) {
            return `The ${articleName} is not available.`;
        }
        const guestIndex = this.guests.findIndex(a => a.guestName == guestName);
        if (guestIndex == -1) {
            return `This guest is not invited.`;
        }
        if (this.guests[guestIndex].points < this.possibleArticles[articleModel]) {
            return 'You need to more points to purchase the article.';
        }
 
        this.guests[guestIndex].points -= this.possibleArticles[articleModel];
        this.listOfArticles[articleIndex].quantity -= 1;
        this.guests[guestIndex].purchaseArticle += 1;
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }
 
    showGalleryInfo(criteria) {
        let result = [];
        if (criteria == 'article') {
            result.push('Articles information:');
            for (let article of this.listOfArticles) {
                result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`);
            }
        } else if (criteria == 'guest') {
            result.push('Guests information:');
            for (const guest of this.guests) {
                result.push(`${guest.guestName} - ${guest.purchaseArticle}`);
            }
        }
        return result.join('\n');
    }
}
 
console.log('---Input1---')
const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
// console.log(artGallery.addArticle('PICTU', 'Mona Liza', 1));
 
// Output 1
//   Successfully added article Mona Liza with a new quantity - 3.
//   Successfully added article Ancient vase with a new quantity - 2.
//   Successfully added article Mona Liza with a new quantity - 1.
 
console.log('---Input2---')
// const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));
console.log(artGallery.inviteGuest('Johnna', 'Asd'));
 
// Output 2
//  You have successfully invited John!
//  You have successfully invited Peter!
//  John has already been invited.
 
 
console.log('---Input3---')
// const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));
 
// Output 3
//  John successfully purchased the article worth 200 points.
//  Peter successfully purchased the article worth 250 points. 
//  This article is not found.
 
 
console.log('---Input4---')
// const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
 
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
 
// Articles information:
//  picture - Mona Liza - 3
//  item - Ancient vase - 1
//  Guests information:
//  John - 1
//  Peter - 1