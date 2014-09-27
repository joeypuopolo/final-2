Template.tRoster.cRoster = function() {
  return Players.find({
    gameStatus: {
      $in: ["starting", "sub"]
    }
  }, {
    sort: {
      firstName: 1
    }
  });
};

Template.tRoster.sPlayerId = function() {
  Session.get("sPlayerId");
};

Template.tRoster.helpers({

  gameDayRosterCount: function() {
    return Players.find({
      gameStatus: {
        $in: ["starting", "sub"]
      }
    }).count();
  },
  totalRoster: function() {
    return Players.find().count();
  }
});

Template.tRoster.events({
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
