function createDeck() {
    const deck = [];
    const values =[2, 3 ,4 ,5, 6, 7, 8, 9, 10,'J','Q','K','A'];
    const suits = ['♠','♥', '♦', '♣'];
}
    for(let v of values) {
        for(let s of suits) {
            deck.push({
                value: v,
                suit: s
            });
        }
    }
return deck;

function shuffle(deck) {    
    for(let i = deck.lenght - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        [deck[i], deck[j]] = [deck[j], deck[i]];

    }
    return deck;
}
