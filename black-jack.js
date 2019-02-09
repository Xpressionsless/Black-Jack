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
document.getElementById('newGame').addEventListener('click', startNewGame);
document.getElementById('stayGame').addEventListener('click', stayGame);
document.getElementById('hitGame').addEventListener('click', hitGame);
var newGame = document.getElementById('newGame');
var stayGame = document.getElementById('stayGame');
var hitGame = document.getElementById('hitGame');
var playerScore;
var dealerScore;
stayGame.disabled = true
hitGame.disabled = true
function startNewGame() {
  // shuffleDeck(cards);
  // dealInitialCard();
  newGame.disabled = true
  stayGame.disabled = false
  hitGame.disabled = false
}
function stayGame() {

}
function hitGame() {

}

function shuffleDeck(OriginalCardsArray) {
  var tmpDeck = OriginalCardsArray.slice(0);

  for (var i = 0; i < tmpDeck.length; i++) {
    if (tmpDeck === null) { return false; }

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

function showHand(hand, score) {
  var cards = '';
  for (var j = 0; j < hand.length; j++) {
    cards += hand[j]['card'] + '\t';
    console.log('Player and deler Array length: ' + cards + ' ');
  }
  outputarea.innerHTML += cards + ' ' + score + '<br>';

}
//ClearTable();
function dealInitialCard() {
  player = []; dealer = [];
  for (var i = 0; i < 2; i++) {
    player.push(drawCard());
    dealer.push(drawCard());
    console.log('Player and Dealer: ' + player[i]['card'] + ' | ' + dealer[i].card);
  }

  playerScore = calculateHand(player);
  dealerScore = calculateHand(dealer)
  showHand(player, playerScore)
  showHand(dealer, dealerScore)
}

function ClearTable() {
  outputarea.innerHTML = '';
}

function calculateHand(cards) {
  var score = 0;
  cards.forEach(card => {
    var value = card.value;
    if (value === 1) {
      score += 10;
    } else if (score < 21) {
      score += value;
    }
  });
  return score;
}
