Template.tStartingLineup.cStarters = function() {
  return Players.find({
    gameStatus: "starting"
  }, {
    sort: {
      firstName: 1
    }
  });
};

Template.tStartingLineup.sPlayerId = function() {
    return Session.get("sPlayerId");
};

Template.tStartingLineup.helpers({
    moneyOwed: function(evt, tmpl) {
        var totalFeesStillOwed = this.seasonFeeOwed - this.seasonFeePaid;
        if (totalFeesStillOwed > 0) {
            return totalFeesStillOwed;
        }
    }
});

// when someone clicks on a class of remove-name
// set the session 'sPlayerId' to the id of that record
// call the remove method
// note: use of this, refers to context of the collection
//   when you use handlebars and a collection object
//     with an each statement, this will refer to that particular
//     record (this._id...... grabs the unique id)
Template.tStartingLineup.events({
    'click .delete-player': function(evt, tmpl) {
        Session.set("sPlayerId", this._id);
        removePlayer();
    },
    'click .edit-player': function(evt, tmpl) {
        Session.set("sPlayerId", this._id);
        evt.preventDefault();
        $("#modal-id").modal("show");
        var player = Players.findOne(Session.get("sPlayerId"));
        $(".game-status").val(player.gameStatus);
    }
});

// use Mongo to remove the record by passing it the primary key
// of the player's record (unique id every single record has)
// result: should remove the player from the list (and obviously)
//   the collection
var removePlayer = function() {
    Players.remove({
        _id: Session.get('sPlayerId')
    });
};
