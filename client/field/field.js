// we have a template called tAddPlayer
// we are adding a variable called players to that template
// the players variable is holding an object
// we are attaching a function to that object
//    that will return all of the players in our Players Collection (table)
Template.tField.cPlayers = function() {
  return Players.find({
    gameStatus: "starting"
  })
};