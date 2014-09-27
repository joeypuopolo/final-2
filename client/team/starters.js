Template.tStarters.cStarters = function() {
  return Players.findOne({_id:Session.get("sPlayerId")});
};

Template.tStarters.sPlayerId = function() {
  Session.get("sPlayerId");
};

Template.tStarters.cStarters = function() {
  return Players.find({
    gameStatus: "starting"
  }, {
    sort: {
      firstName: 1
    }
  });
};

Template.tStarters.helpers({
  haveSubs: function() {
    if (Players.find({
      gameStatus: "sub"
    }).count() > 0) {
      return true;
    }
  },
  missingPlayers: function() {
    if (Players.find({
      gameStatus: "out"
    }).count() > 0) {
      return true;
    }
  },
  moneyOwed: function(evt, tmpl) {
    var totalFeesStillOwed = this.seasonFeeOwed - this.seasonFeePaid;
    if (totalFeesStillOwed > 0) {
      return totalFeesStillOwed;
    }
  }

});

Template.tStarters.events({
  'click .remove-player': function(evt, tmpl) {
    Session.set('sPlayerId', this._id);
    removePlayer();
    Session.set('sPlayerId', null);
  },
  'click .edit-player': function(evt, tmpl) {
    // need access to session
    Session.set('sPlayerId', this._id);
    $("#modal-id").modal("show");
    var player = Players.findOne(Session.get("sPlayerId"));
    $(".game-status").val(player.gameStatus);

  }
});

var removePlayer = function() {
  Players.remove({
    _id: Session.get('sPlayerId')
  });
};
