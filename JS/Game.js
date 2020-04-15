class Game
{
  constructor()
  {

  }  

  //read the gameState from database
 getState()
 {
     //creating a variable with the gameState from the database
   var gameStateRef = database.ref('gameState'); 
   //making the database read the given value
   gameStateRef.on("value",function(data){
       gameState = data.val();
   }); 
 }

 //update the gameState in database
 update(state)
 {
     //updating the database and referring
   database.ref('/').update({
       gameState : state
   });  
 }

 //function to start the game
 start()
 {
     //giving condition to generate the form and increasing the playerCount
   if(gameState === 0)
   {
     player = new Player();
     player.getCount();
     form = new Form();
     form.display();  
   }  

   //making sprites for the cars
   car1 = createSprite(100,200);
   car2 = createSprite(300,200);
   car3 = createSprite(500,200);
   car4 = createSprite(700,200);
   //making the arrays to store the information of the cars
   cars = [car1,car2,car3,car4];

 }

 play()
 {
   //hiding the form and starting the game
   form.hide();
   //getting the players info
   Player.getPlayerInfo();
   //showing the info when all players are entered in the game
   if(allPlayers !== undefined)
   {
     //index of the array 
     var index = 0;
     //x and y position for the cars
     var x = 0;
     var y ;
     for(var plr in allPlayers)
     {
       //add one to the index for every loop
       index = index + 1;
       //position the cars a little away from each other in x direction
       //calculate x and y for the cars
       x = x + 200;
       //for y use data database to display the cars in y direction
       y = displayHeight - allPlayers[plr].distance;
       //setting the values of x and y to individual cars
       cars[index-1].x = x;
       cars[index-1].y = y;
       //giving color to the active car  
       if(index === player.index)
       {
         //giving color to the selected car
         cars[index-1].shapeColor = "RED";
         //making the camera follow the car 
         camera.position.x = displayWidth/2;
         //using arrays to make the camera move with the car
         camera.position.y = cars[index-1].y;
       }
     }
   } 
   //increasing the distance
   if(keyIsDown(UP_ARROW)&& player.index !== null)
   {
     player.distance +=10;
     player.update();
   }
   drawSprites();
 }
}