// @flow

type Suit =
  | "Diamonds"
  | "Clubs"
  | "Hearts"
  | "Spades";
type Rank =
  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  | "Jack"
  | "Queen"
  | "King"
  | "Ace";
type Card = {
  suit: Suit,
  rank: Rank,
}

var cards: Card[] = [ { hi: 5 }];
// cards.sort((a, b) => cardComparator(a, b));
// cards.sort((a, b) => cardComparator(a, b, true)); // Aces high


function suitOrder(suit) {
  return {
    Diamonds: 0,
    Clubs: 1,
    Hearts: 3,
    Spades: 4,
  }[suit];
}

function rankOrder(rank, aceHigh = false) {
  if (typeof rank === "string") {
    return {
      Jack: 11,
      Queen: 12,
      King: 13,
      Ace: aceHigh ? 14 : 1,
    }[rank];
  } else {
    return rank;
  }
}

function cardComparator(a, b, aceHigh?) {
  return (rankOrder(a.rank, aceHigh) - rankOrder(b.rank, aceHigh))
      || (suitOrder(a.suit) - suitOrder(b.suit));
}
