function deckOfCards(listOfCards) {
  let arr = [];

  for (card of listOfCards) {
    let currentFace = card.substring(0, card.length - 1);
    let currentSuit = card.substring(card.length - 1);
    try {
      arr.push(createCards(currentFace, currentSuit));
    } catch (err) {
      console.log(`Invalid card: ${card}`);
      return;
    }
  }
  console.log(arr.join(" "));
  function createCards(face, suit) {
    const faces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
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
      throw new Error("Error");
    }
    return {
      face,
      suit: suits[suit],
      toString() {
        return this.face + this.suit;
      },
    };
  }
}
deckOfCards(["AS", "10D", "KH", "2C"]);
deckOfCards(["5S", "3D", "QD", "1C"]);
