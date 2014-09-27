Template.tFormerPlayers.cFormerPlayers = function() {
  return Players.find({
     gameStatus: "former"
  }, {
    sort: {
      firstName: 1
    }
  });
};
Template.tFormerPlayers.helpers({
  formerCount: function () {
    return Players.find({gameStatus: "former"}).count();
  }
});

Template.tFormerPlayers.sPlayerId = function() {
    Session.get("sPlayerId");
};

Template.tFormerPlayers.events({
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
