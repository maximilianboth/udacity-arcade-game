// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
// Variables of the enemies needed
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random()*(10-2+1)+2));;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
// Set the speed of the enemies and reset them on the screen
    this.x += this.speed;

    if (this.x > 505) {
        this.x = -100;
        var min = 2;
        var max = 15;
        this.speed = Math.floor((Math.random()*(max-min+1)+min));
    
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(sprite) {
// Variables of the Player
    this.sprite = sprite;
    this.x = 202;
    this.y = 373.5;
    this.moves =[];    
};


let = countDisplay = 0;


Player.prototype.update = function(dt) {

//Collision detection

    const button = document.querySelector('.moves');

    for (let enemy of allEnemies) {
        let dx = this.x - enemy.x;
        let dy = this.y - enemy.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

//Player hit an enemy, Game is lost. Restart the Game
        if (distance < 56) {
    
        const parent = document.querySelector('body');
        const canvasRemove = document.querySelector('canvas');
        const panelRemove = document.querySelector('.score-panel');
        const moves = document.querySelector('.winmoves');
        const scoreBoard = document.querySelector('.hide');
        parent.removeChild(canvasRemove);
        parent.removeChild(panelRemove);
        scoreBoard.classList.add('won');
        moves.innerHTML = countDisplay;
        const anotherRound = document.querySelector('.button');
        anotherRound.addEventListener('click', function () {
        window.location.reload();
        })
    
        }
    }
//Winning a round, Score gets higher, Player gets reset
      if (this.y === -41.5) {
          countDisplay += 1;
          button.innerHTML = countDisplay;
          this.x = 202;
        this.y = 373.5;
    }

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(dt) {   
  
// Conditions for Player not moving off screen

    this.moves.push(dt);

    if (this.y >= 41.5 && this.moves[0] === 'up') {
            this.y -= 83;
        } else if (this.y <= 290.5 && this.moves[0] === 'down') {
            this.y += 83;
        } else if (this.x <= 303 && this.moves[0] === 'right') {
            this.x += 101;
        } else if (this.x >= 101 && this.moves[0] === 'left') {
            this.x -= 101;
        }
        else {
            this.x += 0;
            this.y += 0;
        }
    
    this.moves = [];
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [
    new Enemy(
        this.x = -100,
        this.y = 65,
    ),
    new Enemy(
        this.x = -100,
        this.y = 148,
    ),
    new Enemy(
        this.x = -100,
        this.y = 231,
    )
];

var player = new Player(
    this.sprite = 'images/char-boy.png'
);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


