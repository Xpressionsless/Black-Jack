
var outputarea = document.getElementById('output-area');
document.getElementById('newGame').addEventListener('click', startNewGame);
document.getElementById('stayGame').addEventListener('click', determineWinner);
document.getElementById('hitGame').addEventListener('click', hitGame);
var newGame = document.getElementById('newGame');
var stayGame = document.getElementById('stayGame');
var hitGame = document.getElementById('hitGame');
var winnerArea = document.getElementById('winner-area');
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
var pBusted = false
var dBusted = false

stayGame.disabled = true
hitGame.disabled = true

var dealerWins = 'Dealer Win'
var playerWins = 'You Win'
var draw = 'Draw Game!'

function startNewGame() {
  deck = [];dealer = []; player = [];
  shuffleDeck(cards);
  dealInitialCard();
  var playersHasBJack = hasBlackJack(player, playerScore) 
  var dealerHasBJack = hasBlackJack(player, dealerScore) 
  if (playersHasBJack) {
    winnerArea.innerHTML = playerWins
    newGame.disabled = false
    stayGame.disabled = true
    hitGame.disabled = true
  } else if(dealerHasBJack) {
    winnerArea.innerHTML = dealerWins
    newGame.disabled = false
    stayGame.disabled = true
    hitGame.disabled = true
  }
  
  newGame.disabled = true
  stayGame.disabled = false
  hitGame.disabled = false
}
//Determine Winner
function determineWinner(stayed) {
  drawDealerCards()
  var newScore = checkScore(playerScore, dealerScore)
  var dealerBusted = isbust(dealerScore)
  if (newScore) {
  winnerArea.innerHTML = dealerWins
  stayGame.disabled = true
  newGame.disabled = false
  hitGame.disabled = true
} else if(pBusted) {
  winnerArea.innerHTML = playerWins
  stayGame.disabled = true
  newGame.disabled = false
  hitGame.disabled = true
}
  showHands()
}
function hitGame() {
  dealAnotherCard()
  console.log('Deck lenght is now: ' + deck.length )
  if (pBusted) {
    winnerArea.innerHTML = dealerWins
    hitGame.disabled = true
    stayGame.disabled = true
    newGame.disabled = false
  } else if(dBusted) {
    winnerArea.innerHTML = playerWins
    hitGame.disabled = true
    stayGame.disabled = true
    newGame.disabled = false
  }
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
// After clicking Stay button only this method will be executed
function drawDealerCards() {
    dealer.push(drawCard())
}
// check Dealer score with player score after clicking StayGame button
function checkScore(pScore, dScore) {
  if (pScore <= dScore && dScore < 21) {
    return true
  } else {
    return false
  }
}
//Check if dealer has more Score than player or is Busted
function drawGame(pScore, dScore) {
  if ((dScore >= pScore) && (dScore <=21)) {
    return true
  }
}
function hitGameEvent() {
  ClearTable()
  dealAnotherCard()
  showHands()
  console.log('Player and Dealer length in showHands() function: ' + player.length + "\n" + dealer.length);
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
  pBusted = isbust(playerScore)
  dBusted = isbust(dealerScore)
  showHand(player, playerScore)
  showHand(dealer, dealerScore)
}
function dealInitialCard() {
  for (var i = 0; i < 2; i++) {
      player.push(drawCard());
      dealer.push(drawCard());
  }
  showHands()
}
function dealAnotherCard(hand) {
  player.push(drawCard())
  dealer.push(drawCard())
}

// find BlackJack
function hasBlackJack(hand, score) {
  if((hand.length === 2) && (score === 21) ) {
    return true
  }
}
// Find if is Busted
function isbust(score) {
  if(score > 21) {
    return true
  }
}

function calculateHand(cards) {
  var score = 0;
  cards.forEach(card => {
    score += card.value
  });
  
  cards.find(function (card) {
    if (card.value === 1) {
      if ((score + 10) <= 21) {
        score += 10
      }
    }
  })
  
  return score;
}
