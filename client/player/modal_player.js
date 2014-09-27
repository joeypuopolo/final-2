Template.tModalPlayer.cPlayer = function() {
  return Players.findOne({
    _id: Session.get("sPlayerId")
  });
};

Template.tModalPlayer.sPlayerId = function() {
  Session.get("sPlayerId");
};

Template.tAddPlayer.sPlayerEdit = function() {
  return Session.get('sPlayerEdit');
};

// getting drop downs to populate properly



Template.tModalPlayer.events({
  'click .save-changes': function(evt, tmpl) {
    var firstName = $('.first-name').val();
    var gameStatus = $('.game-status').val();
    var fieldPosition = $('.field-position').val();
    var gerseyNumber = $('.gersey-number').val();
    var seasonFeeOwed = $('.season-fee-owed').val();
    var seasonFeePaid = $('.season-fee-paid').val();
    var gameNotes = $('.game-notes').val();
    updatePlayer(firstName, gameStatus, fieldPosition, gerseyNumber, seasonFeeOwed, seasonFeePaid, gameNotes);
    $("#modal-id").modal("hide");
    Session.set('sPlayerId', null);
    Session.set('sPlayerEdit', false);
  }
});

var updatePlayer = function(firstName, gameStatus, fieldPosition, gerseyNumber, seasonFeeOwed, seasonFeePaid, gameNotes) {
  Players.update(Session.get("sPlayerId"), {
    $set: {
      firstName: firstName,
      gameStatus: gameStatus,
      fieldPosition: fieldPosition,
      gerseyNumber: gerseyNumber,
      seasonFeeOwed: seasonFeeOwed,
      seasonFeePaid: seasonFeePaid,
      gameNotes: gameNotes
    }
  });

  return true;
}

var removeProject = function() {
  Projects.remove({
    _id: Session.get('editing_project')
  });
};
