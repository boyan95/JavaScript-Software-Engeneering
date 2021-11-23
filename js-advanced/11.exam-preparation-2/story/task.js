class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }
 
    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`
        }
 
        if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`
        }
 
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
    }
 
    like(username) {
        if (this._likes.some(user => user == username)) {
            throw new Error("You can't like the same story twice!");
        }
        if (this.creator == username) {
            throw new Error("You can't like your own story!");
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }
 
    dislike(username) {
        if (!this._likes.some(user => user == username)) {
            throw new Error("You can't dislike this story!")
        }
 
        this._likes.pop(this._likes.indexOf(username));
        return `${username} disliked ${this.title}`
    }
 
    comment(username, content, id) {
        // Add new comment
        let commentIndex = this._comments.findIndex(c => c.id == id);
        if (id == undefined || commentIndex == -1) {
            id = this._comments.length + 1
            this._comments.push({ id, username, content, replies: [] });
            return `${username} commented on ${this.title}`;
        }
        // Add new reply
        if (commentIndex > -1) {
            let replyId = id + '.' + (this._comments[commentIndex].replies.length + 1);
            this._comments[commentIndex].replies.push({ replyId, username, content });
            return 'You replied successfully';
        }
    }
 
    toString(sortingType) {
        function sortTypeId(a, b) {
            if (sortingType == 'asc') {
                return a.id - b.id
            }
            if (sortingType == 'desc') {
                return b.id - a.id
            }
            if (sortingType == 'username') {
                return a.username.localeCompare(b.username)
            }
        }
        function sortTypeReplayId(a, b) {
            if (sortingType == 'asc') {
                return a.replyId - b.replyId
            }
            if (sortingType == 'desc') {
                return b.replyId - a.replyId
            }
            if (sortingType == 'username') {
                return a.username.localeCompare(b.username)
            }
        }
 
        this._comments.sort((a, b) => sortTypeId(a, b))
            .forEach(c => c.replies.sort((a1, b1) => sortTypeReplayId(a1, b1)))
 
        let result = []
        result.push(`Title: ${this.title}`)
        result.push(`Creator: ${this.creator}`)
        result.push(`Likes: ${this._likes.length}`)
        result.push(`Comments:`)
        if (this._comments.length > 0) {
            for (let c of this._comments) {
                result.push(`-- ${c.id}. ${c.username}: ${c.content}`)
                if (c.replies.length > 0) {
                    for (let r of c.replies) {
                        result.push(`--- ${r.replyId}. ${r.username}: ${r.content}`)
                    }
                }
            }
        }
 
        return result.join('\n')
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
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
