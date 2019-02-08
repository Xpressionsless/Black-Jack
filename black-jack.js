var cards = [

  {
    card: '🂱',
    value: 1,
  },
  {
    card: '🂡',
    value: 1,
  },
  {
    card: '🃁',
    value: 1,
  },
  {
    card: '🃑',
    value: 1,
  },
  {
    card: '🂲',
    value: 2,
  },
  {
    card: '🂢',
    value: 2,
  },
  {
    card: '🃂',
    value: 2,
  },
  {
    card: '🃒',
    value: 2,
  },
  {
    card: '🂳',
    value: 3,
  },
  {
    card: '🂣',
    value: 3,
  },
  {
    card: '🃃',
    value: 3,
  },
  {
    card: '🃓',
    value: 3,
  },
  {
    card: '🂴',
    value: 4,
  },
  {
    card: '🂤',
    value: 4,
  },
  {
    card: '🃄',
    value: 4,
  },
  {
    card: '🃔',
    value: 4,
  },
  {
    card: '🂵',
    value: 5,
  },
  {
    card: '🂥',
    value: 5,
  },
  {
    card: '🃅',
    value: 5,
  },
  {
    card: '🃕',
    value: 5,
  },
  {
    card: '🂶',
    value: 6,
  },
  {
    card: '🂦',
    value: 6,
  },
  {
    card: '🃆',
    value: 6,
  },
  {
    card: '🃖',
    value: 6,
  },
  {
    card: '🂷',
    value: 7,
  },
  {
    card: '🂧',
    value: 7,
  },
  {
    card: '🃇',
    value: 7,
  },
  {
    card: '🃗',
    value: 7,
  },
  {
    card: '🂸',
    value: 8,
  },
  {
    card: '🂨',
    value: 8,
  },
  {
    card: '🃈',
    value: 8,
  },
  {
    card: '🃘',
    value: 8,
  },
  {
    card: '🂹',
    value: 9,
  },
  {
    card: '🂩',
    value: 9,
  }, {
    card: '🃉',
    value: 9,
  },
  {
    card: '🃙',
    value: 9,
  },
  {
    card: '🂺',
    value: 10,
  }, {
    card: '🂪',
    value: 10,
  }, {
    card: '🃊',
    value: 10,
  }, {
    card: '🃚',
    value: 10,
  }, {
    card: '🂻',
    value: 10,
  }, {
    card: '🂫',
    value: 10,
  }, {
    card: '🃋',
    value: 10,
  }, {
    card: '🃛',
    value: 10,
  }, {
    card: '🂽',
    value: 10,
  }, {
    card: '🂭',
    value: 10,
  }, {
    card: '🃍',
    value: 10,
  }, {
    card: '🃝',
    value: 10,
  }, {
    card: '🂾',
    value: 10,
  }, {
    card: '🂮',
    value: 10,
  }, {
    card: '🃎',
    value: 10,
  }, {
    card: '🃞',
    value: 10,
  },
];

var deck = [];
var dealer = []; var player = [];
var outputarea = document.getElementById('output-area');
function show() {
  shuffleDeck(cards);
  dealInitialCard();
}

function shuffleDeck(OriginalCardsArray) {
  var tmpDeck = OriginalCardsArray.slice(0);

  for (var i = 0; i < tmpDeck.length; i++) {
    if (tmpDeck === null) {return false; }

    var pos = tmpDeck[Math.random() * tmpDeck.length >> 0];
    if (pos === deck[i]) {
      return false;
    } else {
      deck.push(pos);
    }
  }
}

function drawCard() {
  return deck.shift();
}

function showHands() {
  var playerCards = [];
  var dealerCards = [];

  for (var i = 0; i < player.length; i++) {
    playerCards.push(player[i]);
    dealerCards.push(dealer[i]);
  }

  //
  var slicedPlayerCards = playerCards.join(' ');
  var slicedDealerCards = dealerCards.join(' ');
  for (var j = 0; j < slicedPlayerCards.length; j++) {
    outputarea.innerHTML = slicedPlayerCards + '<br>' + slicedDealerCards;
  }

  console.log('Player and deler Array length: ' + slicedPlayerCards + ' ' + slicedDealerCards);
}

function dealInitialCard() {
  for (var i = 0; i < 2; i++) {
    player.push(drawCard().card);
    dealer.push(drawCard().card);
  }

  console.log('Player and Dealer: ' + player + ' | ' + dealer);
  showHands();
}
