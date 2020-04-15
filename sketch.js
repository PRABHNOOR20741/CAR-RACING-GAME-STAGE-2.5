var canvas,backgroundImg;
var gameState = 0;
var playerCount;
var database;
var form,player,game;
var distance  = 0;
var allPlayers;
var car1,car2,car3,car4;
var cars;

function setup()
{
  canvas = createCanvas(displayWidth,displayHeight);  
  database = firebase.database();

  //creatng the new game including the button,form and greetings
  game = new Game();
  game.getState();
  game.start();

}

function draw()
{
  //starting the game when the playerCount is 4  and updating the gameState to one
  if(playerCount === 4)
  {
    game.update(1);
  }
  //clearing the screen and calling the play function game
  if(gameState === 1)
  {
    clear();
    game.play();
  }
}