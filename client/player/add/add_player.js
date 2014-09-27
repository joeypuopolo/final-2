// note: session variables are not accessible to the template by default
// you have to explicitly associate them so...
// below is associating our sPlayerEdit session to this template
Template.tAddPlayer.sPlayerEdit = function() {
  return Session.get('sPlayerEdit');
};
Template.tAddPlayer.sPlayerId = function() {
  return Session.get('sPlayerId');
};

UI.body.events({
  'click': function (evt, tmpl) {

    // console.log( evt.target.nodeName );
    if (evt.target.nodeName !== "BUTTON") {

      Session.set("sPlayerEdit", false);
    } 
  }
});

// getting drop downs to populate properly
// Template.tAddPlayer.rendered = function(evt, tmpl) {
//   var player = Players.findOne({
//     _id: Session.get('sPlayerId')
//   });
//   $('.game-status').val(player.gameStatus);
// };

// Template.tAddPlayer.rendered = function(evt, tmpl) {
//   $('.first-name').val("").focus();
// };

// adding events to our templates (duh!)
Template.tAddPlayer.events({
  // when someone clicks a class of player-edit
  // set the session sPlayerEdit to true
  'click .player-edit': function(evt, tmpl) {
    // if (Session.get("sPlayerEdit", false)) {
    Session.set("sPlayerEdit", true);
    // }
    // tmpl.find('.first-name').focus();

  },
  // when someone clicks a class of player-remove
  // set the session sPlayerEdit to false
  'click .player-remove': function() {
    Session.set("sPlayerEdit", false);

  },

  'click .player-add': function(evt, tmpl) {
    // when someone clicks a class of player-add
    // note: the function has the evt object and template object
    // passed to it, the event object holds all the events (there's a lot)
    // the template object (tmpl) hold all the html elements in one big object
    // so you can refer to them and use them inside this function (like in the next line)
    //   grab the class of first-name, get the value inside text box and store
    // store that value inside the variable firstName
    // var firstName = $('.first-name').val();
    var firstName = tmpl.find('.first-name').value;
    var fieldPosition = tmpl.find('.field-position').value;
    var gameStatus = tmpl.find('.game-status').value;
    var gerseyNumber = tmpl.find('.gersey-number').value;
    var seasonFeeOwed = tmpl.find('.season-fee-owed').value;
    var seasonFeePaid = tmpl.find('.season-fee-paid').value;
    var gameNotes = tmpl.find('.game-notes').value;
    

    // below is another way to grab the values without jquery
    // var seasonFeePaid = tmpl.find('.season-fee-paid').value;
    Session.set("sPlayerEdit", false);
    // call the addPlayer method (note below it is a variable that has a function tied to it)
    //  and pass the addPlayer method, the variable firstName (which remember..
    // hold whatever the user typed in the text box... the name of the player)
    addPlayer(firstName, fieldPosition, gameStatus, gerseyNumber, seasonFeeOwed, seasonFeePaid, gameNotes);

  },
  'keyup .season-fee-paid': function(evt, tmpl) {
    // console.log(evt.which);
    if (evt.which === 13) {
      // note: the function has the evt object and template object
      // passed to it, the event object holds all the events (there's a lot)
      // the template object (tmpl) hold all the html elements in one big object
      // so you can refer to them and use them inside this function (like in the next line)
      //   grab the class of first-name, get the value inside text box and store
      // store that value inside the variable firstName
    var firstName = $('.first-name').val();
    var fieldPosition = $('.field-position').val();
    var gameStatus = $('.game-status').val();
    var gerseyNumber = $('.gersey-number').val();
    var seasonFeeOwed = $('.season-fee-owed').val();
    var seasonFeePaid = $('.season-fee-paid').val();
    var gameNotes = $('.game-notes').val();
      // set the session sPlayerEdit to false
      Session.set("sPlayerEdit", false);
      // call the addPlayer method (note below it is a variable that has a function tied to it)
      //  and pass the addPlayer method, the variable firstName (which remember..
      // hold whatever the user typed in the text box... the name of the player)
      addPlayer(firstName, fieldPosition, gameStatus, gerseyNumber, seasonFeeOwed, seasonFeePaid, gameNotes);
    }
  }
});

// here is the method called when the player-add class element is clicked
// it takes the firstName argument that was passed and stores it in its parameter
//   then the method takes the parameter value and uses MongoDb syntax
//   to insert the name into our collection (aka table)
var addPlayer = function(firstName, fieldPosition, gameStatus, gerseyNumber, seasonFeePaid, seasonFeeOwed, gameNotes) {
  Players.insert({
    firstName: firstName,
    fieldPosition: fieldPosition,
    gameStatus: gameStatus,
    gerseyNumber: gerseyNumber,
    seasonFeePaid: seasonFeePaid,
    seasonFeeOwed: seasonFeeOwed,
    gameNotes: gameNotes
  });
};
