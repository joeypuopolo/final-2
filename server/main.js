Meteor.publish('players', function(){
  return Players.find();
});

Meteor.startup(function() {
  //BrowserPolicy.content.allowOriginForAll('*.bootstrapcdn.com');
  // code to run on server at startup
  // put this on the server
  // call it on the console to remove all your data
// and start on a clean sheet
//Meteor.call('removeAll')
  Meteor.methods({
    removeAll: function() {
      Players.remove({});
      // add other collections if you need to
    }
  });

  if (Players.find().count() === 0) {
    Players.insert({
      "firstName": "Phil",
      "fieldPosition": "none",
      "gameStatus": "sub",
      "gerseyNumber": "17",
      "seasonFeePaid": 120,
      "seasonFeeOwed": 120,
      "_id": "xMZXNjd8fkf6gStN9"
    });
    Players.insert({
      "firstName": "Greg",
      "fieldPosition": "none",
      "gameStatus": "out",
      "gerseyNumber": "19",
      "seasonFeePaid": 120,
      "seasonFeeOwed": 120,
      "_id": "NkqJyCK6o69WdnoQM"
    });

    Players.insert({
      "firstName": "Mark",
      "fieldPosition": "right-fullback",
      "gameStatus": "starting",
      "gerseyNumber": "1",
      "seasonFeePaid": 120,
      "seasonFeeOwed": 120,
      "_id": "szRNmCY43vyZfuuCN"
    });
    Players.insert({
      "firstName": "Justin T.",
      "fieldPosition": "sweeper",
      "gameStatus": "starting",
      "gerseyNumber": "2",
      "seasonFeePaid": 120,
      "seasonFeeOwed": 120,
      "_id": "oxQPHkMpr6ubawhbS"
    });
    Players.insert({
      "firstName": "James",
      "fieldPosition": "right-midfielder",
      "gameStatus": "starting",
      "gerseyNumber": 3,
      "seasonFeePaid": 0,
      "seasonFeeOwed": 65,
      "_id": "j7JjRMySzBhSE4865"
    });
    Players.insert({
      "firstName": "Dan",
      "fieldPosition": "offensive-midfielder",
      "gameStatus": "starting",
      "gerseyNumber": 4,
      "seasonFeePaid": 0,
      "seasonFeeOwed": 70,
      "_id": "ePfcxyqZXxDCs9dms"
    });
    Players.insert({
      "firstName": "Duncan",
      "fieldPosition": "stopper",
      "gameStatus": "starting",
      "gerseyNumber": 5,
      "seasonFeePaid": 0,
      "seasonFeeOwed": 0,
      "_id": "8oejsfiTqEzoueBPX"
    });
    Players.insert({
      "firstName": "Eric",
      "fieldPosition": "right-striker",
      "gameStatus": "starting",
      "gerseyNumber": 6,
      "seasonFeePaid": 0,
      "seasonFeeOwed": 70,
      "_id": "CZuZQ8sWMeTMM9qzY"
    });
    Players.insert({
      "firstName": "Rob",
      "fieldPosition": "left-striker",
      "gameStatus": "starting",
      "gerseyNumber": 7,
      "seasonFeePaid": 120,
      "seasonFeeOwed": 120,
      "_id": "BwNwfZZ8ANLpMGAAG"
    });
    Players.insert({
      "firstName": "Kevin",
      "fieldPosition": "left-fullback",
      "gameStatus": "starting",
      "gerseyNumber": 8,
      "seasonFeePaid": 65,
      "seasonFeeOwed": 65,
      "_id": "bTPsRDgskNmodoGBD"
    });
    Players.insert({
      "firstName": "Renzi",
      "fieldPosition": "defensive-midfielder",
      "gameStatus": "starting",
      "gerseyNumber": 9,
      "seasonFeePaid": 0,
      "seasonFeeOwed": 70,
      "_id": "83akoKHZJtBbTDFLP"
    });
    Players.insert({
      "firstName": "Rudy",
      "fieldPosition": "none",
      "gameStatus": "out",
      "gerseyNumber": 10,
      "seasonFeePaid": 20,
      "seasonFeeOwed": 65,
      "_id": "2qKrhhxqXB7KQSurf"
    });
    Players.insert({
      "firstName": "Jesse",
      "fieldPosition": "left-midfielder",
      "gameStatus": "starting",
      "gerseyNumber": 11,
      "seasonFeePaid": 120,
      "seasonFeeOwed": 120,
      "_id": "DmcLR38MAj664DWN2"
    });
    Players.insert({
      "firstName": "Ryan",
      "fieldPosition": "none",
      "gameStatus": "sub",
      "gerseyNumber": 12,
      "seasonFeePaid": 120,
      "seasonFeeOwed": 120,
      "_id": "p8rQ2BemWNLiJaJuT"
    });
    Players.insert({
      "firstName": "Stephen",
      "fieldPosition": "none",
      "gameStatus": "out",
      "gerseyNumber": 13,
      "seasonFeePaid": 135,
      "seasonFeeOwed": 120,
      "_id": "kNzbquweNYeS4idzB"
    });
    Players.insert({
      "firstName": "Edgar",
      "fieldPosition": "none",
      "gameStatus": "out",
      "gerseyNumber": 14,
      "seasonFeePaid": 120,
      "seasonFeeOwed": 120,
      "_id": "WDg4EJyRMK8eQA3TR"
    });
    Players.insert({
      "firstName": "Abe",
      "fieldPosition": "none",
      "gameStatus": "sub",
      "gerseyNumber": 15,
      "seasonFeePaid": 0,
      "seasonFeeOwed": 120,
      "_id": "jrndgCwkq3yNKLQKA"
    });
    Players.insert({
      "firstName": "Scott",
      "fieldPosition": "none",
      "gameStatus": "sub",
      "gerseyNumber": 16,
      "seasonFeePaid": 120,
      "seasonFeeOwed": 0,
      "_id": "bE9fQao2WvxGPnuWh"
    });
    Players.insert({
      "firstName": "Keito",
      "fieldPosition": "none",
      "gameStatus": "sub",
      "gerseyNumber": 17,
      "seasonFeePaid": 120,
      "seasonFeeOwed": 120,
      "_id": "6doJuJzTgvLkjQw2p"
    });
    Players.insert({
      "firstName": "Juan",
      "fieldPosition": "none",
      "gameStatus": "sub",
      "gerseyNumber": 18,
      "seasonFeePaid": 120,
      "seasonFeeOwed": 120,
      "_id": "xYe4rm2u6xG7E7ZHF"
    });
    Players.insert({
      "firstName": "Adrain",
      "fieldPosition": "none",
      "gameStatus": "sub",
      "gerseyNumber": 19,
      "seasonFeePaid": 65,
      "seasonFeeOwed": 65,
      "_id": "SWJyhLCERdLqjFBDF"
    });
    Players.insert({
      "firstName": "Justin R",
      "fieldPosition": "none",
      "gameStatus": "sub",
      "gerseyNumber": 20,
      "seasonFeePaid": 65,
      "seasonFeeOwed": 65,
      "_id": "X9bheXMFvx2Gv3eA7"
    });
    Players.insert({
      "firstName": "Matt",
      "fieldPosition": "none",
      "gameStatus": "out",
      "gerseyNumber": 21,
      "seasonFeePaid": 60,
      "seasonFeeOwed": 120,
      "_id": "XkxGGL5okKsn4og3M"
    });
    Players.insert({
      "firstName": "Nick",
      "fieldPosition": "none",
      "gameStatus": "out",
      "gerseyNumber": 0,
      "seasonFeePaid": 0,
      "seasonFeeOwed": 0,
      "_id": "iRXde9xAL3hLFFg84"
    });
    Players.insert({
      "firstName": "Max",
      "fieldPosition": "none",
      "gameStatus": "out",
      "gerseyNumber": 0,
      "seasonFeePaid": 0,
      "seasonFeeOwed": 0,
      "_id": "Sdb5kHMwRNvgQCwBS"
    });
    Players.insert({
      "firstName": "Tim",
      "fieldPosition": "none",
      "gameStatus": "out",
      "gerseyNumber": 0,
      "seasonFeePaid": 0,
      "seasonFeeOwed": 0,
      "_id": "XZxqMyrfQMnKK8WRB"
    });
    Players.insert({
      "firstName": "Alex S.",
      "fieldPosition": "none",
      "gameStatus": "sub",
      "gerseyNumber": 21,
      "seasonFeePaid": 65,
      "seasonFeeOwed": 65,
      "_id": "6RbibkiHdiM82siSr"
    });
    Players.insert({
      "firstName": "Memo",
      "fieldPosition": "none",
      "gameStatus": "out",
      "gerseyNumber": 0,
      "seasonFeePaid": 0,
      "seasonFeeOwed": 0,
      "_id": "t4H6antCEPXgBWAZb"
    });
    Players.insert({
      "firstName": "Korey",
      "fieldPosition": "none",
      "gameStatus": "out",
      "gerseyNumber": 0,
      "seasonFeePaid": 0,
      "seasonFeeOwed": 0,
      "_id": "9nPSbhA3mRZzCbXFp"
    });
    Players.insert({
      "firstName": "Geoff",
      "fieldPosition": "none",
      "gameStatus": "out",
      "gerseyNumber": 0,
      "seasonFeePaid": 0,
      "seasonFeeOwed": 0,
      "_id": "8AX5x8zXTN2rWcfaE"
    });
    Players.insert({
      "firstName": "Craig",
      "fieldPosition": "none",
      "gameStatus": "out",
      "gerseyNumber": 0,
      "seasonFeePaid": 0,
      "seasonFeeOwed": 0,
      "_id": "GAvXKeiRdYERQonbz"
    });
    Players.insert({
      "firstName": "John H.",
      "fieldPosition": "none",
      "gameStatus": "out",
      "gerseyNumber": 0,
      "seasonFeePaid": 0,
      "seasonFeeOwed": 0,
      "_id": "nN2SuypxYkg66RbPd"
    });
    Players.insert({
      "firstName": "Oliver",
      "fieldPosition": "goalie",
      "gameStatus": "starting",
      "gerseyNumber": "g",
      "seasonFeePaid": 0,
      "seasonFeeOwed": 0,
      "_id": "c3fuwCXcEuKvP8wwb"
    });
    Players.insert({
      "firstName": "Christian",
      "fieldPosition": "goalie",
      "gameStatus": "out",
      "gerseyNumber": "g",
      "seasonFeePaid": 0,
      "seasonFeeOwed": 0,
      "_id": "KZzj8vf8CY7aSAsP8"
    });
  }
});










