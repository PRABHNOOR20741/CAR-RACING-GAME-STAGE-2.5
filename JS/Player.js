class Player
{
  constructor()
  {
    //making the constructor 
    this.index = null;
    this.distance = 0; 
    this.name = null; 
  }
  getCount()
 {
     //making a variable with the playerCount from the database
   var playerCountRef = database.ref('playerCount'); 
   playerCountRef.on("value",function(data){
       playerCount = data.val();
   }); 
 }

 //update the gameState in database
 updateCount(count)
 {
   database.ref('/').update({
       playerCount : count
   });  
 }

 update()
 {
     //making the player's index using the playerCount
   var playerIndex = "players/player"+ this.index ;
   database.ref(playerIndex).set({
       //giving the name from the database as the name given by the player 
       name : this.name,
       distance : this.distance
   })
 }

 //creating a static function for the whole player class
 static getPlayerInfo()
 {
   //storing the data in allPlayers file
   var playerInfoRef = database.ref('players');
   playerInfoRef.on("value",(data)=>{
     allPlayers = data.val();
   })
 }
}