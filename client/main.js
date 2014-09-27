// show/hide session variable
Session.setDefault("sPlayerEdit", false);
// set the id when editing player
Session.setDefault("sPlayerId", null);

Meteor.subscribe('players');

UI.registerHelper('moneyOwedStyle', function(evt, tmpl) {
    var totalFeesStillOwed = this.seasonFeeOwed - this.seasonFeePaid;

    if (totalFeesStillOwed > 0) {
        return "danger";
    } else if (totalFeesStillOwed === 0) {
        return "success";
    } else {
        return "caution";
    }
});

UI.registerHelper('moneyOwed', function(evt, tmpl) {
    var totalFeesStillOwed = this.seasonFeeOwed - this.seasonFeePaid;
    return totalFeesStillOwed;
});
