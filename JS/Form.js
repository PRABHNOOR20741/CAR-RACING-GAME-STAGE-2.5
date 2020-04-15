class Form
{
  constructor()
  {
     //creating the input where player can give the name
    this.input = createInput("NAME");
    //creating the play button to start the game
    this.button = createButton('PLAY');
    //creating the greetings to meet the player
    this.greeting = createElement('h3');
  } 

  //making the hide function to hide the starting page
  hide()
  {
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
  }

  display()
  {
      //making the form for the player to fill
    var title = createElement('h2');
    title.html("CAR RACING GAME");
    title.position(displayWidth/2+200,displayHeight/2-100);
    this.input.position(displayWidth/2+200,displayHeight/2+50);
    this.button.position(displayWidth/2+200,displayHeight/2+100);

   this.button.mousePressed(()=>
    {
        //hiding the button and the input box when the button is clicked
        this.input.hide();
        this.button.hide();
        //giving the name after the greetings 
        player.name = this.input.value();
        //incresing the player count
        playerCount = playerCount + 1;
        player.index = playerCount;
        //updating the player name and count in the database
        player.update();
        player.updateCount(playerCount);
        //giving greetings
        this.greeting.html("HELLO "+player.name);
        this.greeting.position(displayWidth/2+100,displayHeight/2+100);
    })
  }
}