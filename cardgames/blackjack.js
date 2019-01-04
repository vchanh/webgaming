
function player(name) { //obj constructor
	var playerNum = 0;
	this.name = name;
}

var playingCardDeck = { //object literal
	cardNums : ['1','2','3','4','5','6','7','8','9','10','J','Q','K'],
	cardSuitShort : ['S','H','D','C'],
	cardSuitSymbol : ['♠','♥','♦','♣'],
	cardSuitLong : ['Spade','Heart','Diamond','Club'],
	deck : [],
  hands: [],

	create : function (numDecks) {
  	this.deck = [];
    this.hands = [];
  	for (let i = 0; i < numDecks; i++) {
  		for (let j = 0; j < this.cardSuitSymbol.length; j++) {
	  		for (let k = 0; k < this.cardNums.length; k++) {
  	    	this.deck.push(this.cardNums[k]+this.cardSuitSymbol[j]);
    }}}
    return this.deck.length;
  },
	
  //deal : function () { return this.deck.pop(); },

  deal : function (numCards) {
  	let cards = [];
    for (let i = 0; i < numCards; i++) { cards.push(this.deck.pop()); }
  	return cards;
  },

	dealHands : function (players, cards) { //unused
  	//deals full hands, not one card to each hand at a time
  	for (let i = 0; i < players; i++) {
    	let hand = [];
	  	for (let j = 0; j < cards; j++) {
    		hand.push(this.deal(1));
    	}
      this.hands.push(hand);
    }
    return this.hands;
  },
  
  shuffle1 : function (unshuffled) { //Schwartzian
  let shuffled = unshuffled
  	.map((a) => ({sort: Math.random(), value: a}))
  	.sort((a, b) => a.sort - b.sort)
  	.map((a) => a.value)
  return shuffled;
  },
  
  shuffle2 : function (unshuffled) { //Durstenfeld
    for (let i = unshuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [unshuffled[i], unshuffled[j]] = [unshuffled[j], unshuffled[i]];
    }
	},

	shuffle : function () {
  	this.deck = this.shuffle1(this.deck);
  	return 1;
  },
  
  //calculatePokerHand
  //CalculatePokerHandScore
  //CalculateBlackJackScore
  //CalculatePokerOdds
  
  init : function (num) {
  	this.create(num);
    this.shuffle();
    return this;
  }
}.init(1);
