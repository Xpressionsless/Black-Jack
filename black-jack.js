
var outputarea = document.getElementById('output-area');
document.getElementById('newGame').addEventListener('click', startNewGame);
document.getElementById('stayGame').addEventListener('click', stayGame);
document.getElementById('hitGame').addEventListener('click', hitGame);
var newGame = document.getElementById('newGame');
var stayGame = document.getElementById('stayGame');
var hitGame = document.getElementById('hitGame');
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
var dealer = []; 
var player = [];

var playerScore = 0;
var dealerScore = 0;

stayGame.disabled = true
hitGame.disabled = true

function startNewGame() {
  deck = [];dealer = []; player = [];
  shuffleDeck(cards);
  dealInitialCard();
  // for (let i = 0; i < deck.length; i++) {
  //   const element = deck[i].card;
  //   console.log(deck.length);
  //   outputarea.innerHTML += deck[i].card
  // }
  
  
  newGame.disabled = true
  stayGame.disabled = false
  hitGame.disabled = false
}
function stayGame() {
  ClearTable()
  hitGame.disabled = true
  stayGameAndshowCards(playerScore)
  stayGameAndshowCards(dealerScore)
}
function hitGame() {
  dealAnotherCard()
  console.log('Deck lenght is now: ' + deck.length )
  showHands()
}
// Shuffler hela array och tar slumpmässig kort från tmpDeck och filla "deck" array med de
function shuffleDeck(arr) {
  let newPos, tempDeck;
  for (let i = arr.length-1; i > 0; i--) {
    newPos = Math.floor(Math.random() * (i+1))
    tempDeck = arr[i]
    arr[i] = arr[newPos]
    arr[newPos] = tempDeck
  }
  for (let i = 0; i < arr.length; i++) {
    deck.push(arr[i])
  }
}
function drawCard() {
  return deck.shift();
}

function ClearTable() {
  outputarea.innerHTML = '';
}

function showHand(hand, score) {
  var cards = ''
  for (let i = 0; i < hand.length; i++) {
    cards += hand[i].card;
  }
  console.log('showHands function: ' + `${cards}` + '\n' + `${score}`);
  return outputarea.innerHTML += `${cards}` + `${score}` + '<br>'
}

function showHands() {
  ClearTable();
  playerScore = calculateHand(player)
  dealerScore = calculateHand(dealer)
  showHand(player, playerScore)
  showHand(dealer, dealerScore)
  dealAnotherCard(player)
  dealAnotherCard(dealer)
}
function dealInitialCard() {
  for (var i = 0; i < 2; i++) {
      player.push(drawCard());
      dealer.push(drawCard());
  }
  showHands()
}
function dealAnotherCard(hand) {
  return hand.push(drawCard())
}

function calculateHand(cards) {
  var score = 0;
  cards.forEach(card => {
    score += card.value
  });
  cards.find(function (card) {
    if (card.value === 1) {
      if ((score + 10) < 21) {
        score += 10
      }
    }
  })
  return score;
}

// Stay function
function stayGameAndshowCards(score) {
  //var slipedArray = storedCardArray.slice(0)

  storedCardArray.forEach(index => {
  //console.log('checking stored Card object: ' + `${storedCardArray[index].card}`);
  console.log('checking stored Card object: ' + index.card);
  outputarea.innerHTML += `${index.card}` + score
  });
  
}