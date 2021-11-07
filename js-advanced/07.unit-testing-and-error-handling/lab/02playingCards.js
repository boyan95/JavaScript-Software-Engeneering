function createCards(face, suit) {
  const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', "J", "Q", "K", "A"];
  const suits = {
    S: "\u2660",
    H: "\u2665",
    D: "\u2666",
    C: "\u2663",
  };
  if (Object.keys(suits).includes(suit) == false) {
    throw new Error("Invalid suit");
  }
  if (faces.includes(face) == false) {
      throw new Error('Error')
  }
  return {
    face,
    suit: suits[suit],
    toString() {
      return this.face + this.suit;
    },
  };
}
let card1 = createCards("A", "S").toString();
console.log(card1);
let card2 = createCards("10", "H").toString();
console.log(card2);
let card3 = createCards("1", "Y").toString();
console.log(card3);
//let card4 = createCards("1", "C").toString();
//console.log(card4);
