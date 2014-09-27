Template.tDidNotReply.cDidNotReply = function() {
  return Players.find({
     gameStatus: "noReply"
  }, {
    sort: {
      firstName: 1
    }
  });
};
Template.tDidNotReply.helpers({
  formerCount: function () {
    return Players.find({gameStatus: "noReply"}).count();
  }
});

Template.tDidNotReply.sPlayerId = function() {
    Session.get("sPlayerId");
};

Template.tDidNotReply.events({
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
