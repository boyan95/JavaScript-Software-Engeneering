class Story {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
  }
  get likes() {
    if (this._likes.length == 0) {
      return `${this.title} has 0 likes`;
    } else if (this._likes.length == 1) {
      return `${this._likes[0]} likes this story!`
    } else {
      return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }
  }
  like(username) {
      if(this.creator == username){
          throw new Error("You can't like your own story!")
      }
      if(this._likes.includes(username)){
          throw new Error("You can't like the same story twice!")
      }else{
        this._likes.push(username);
        return `${username} liked ${this.title}!`
      }
    
  }
  dislike(username) {
      if(this._likes.includes(username)){
          return `${username} disliked ${this.title}`
      }else{
          throw new Error("You can't dislike this story!")
      }
  }
  comment(username, content, id) {
      let startsWithId = (el) => el.startsWith(id)
      let counter = 0;
      this._comments.forEach((el) => {
          if(el.startsWith(`${id}.`)){
              counter++;
          }
      })
     if(this._comments.some(startsWithId)){
         this._comments.push(`${id}${counter} ${username} ${content} `)
     }
  }
  toString(sortingType) {
      switch(sortingType){
          case 'asc':
            case 'desc':
                case 'username':
      }
  }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log();
console.log(art.toString("username"));
console.log();
art.like("Zane");
console.log(art.toString("desc"));
