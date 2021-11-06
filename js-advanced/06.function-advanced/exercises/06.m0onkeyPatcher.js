// not working, should be upgrade



function solution(params) {
    function upvote(num) {
        this.upvotes += um
    }
    function downvotes(num) {
        this.downvotes += num
    }
    function score() {
        let totalScore = this.upvotes - this.downvotes;
        let total = this.upvotes + this.downvotes;
        let votesList = [this.downvotes, this.upvotes]
        
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
