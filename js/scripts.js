function player(name) {
  this.name = name,
  this.score = 0;
}

function roll() {
  return Math.ceil(Math.random()*6);
}

player.prototype.hold = function(tempScore){
  this.totalScore += tempScore;
}


$(function() {
  var p1 = new player("p1");
  var p2 = new player("p2");
  var players = [p1, p2];
  var temp = 0;
  var turn = Math.round(Math.random());
  var currentPlayer = players[turn];
  var numberBuffer = 0;

  currentPlayer = switchPlayer(players, currentPlayer);
  console.log(currentPlayer);

  $("#roll").click(function(){
    numberBuffer = roll();
    if(numberBuffer === 1){
      temp = 0;
      currentPlayer = switchPlayer(players, currentPlayer);
      $("#temp p").text("");
    } else {
      temp += numberBuffer;
      $("#temp p").text(temp);
    }
  });

  $("#hold").click(function () {
    currentPlayer.score += temp;
    $("#temp p").text("");
    temp = 0;
    $("#" + currentPlayer.name + "-total p").text(currentPlayer.score);
    currentPlayer = switchPlayer(players, currentPlayer);
  });

});

function switchPlayer(players, currentPlayer) {
  if(currentPlayer === players[0]) {
    currentPlayer = players[1];
    $(".player2").addClass("turn");
    $(".player1").removeClass("turn");
  } else {
    currentPlayer = players[0];
    $(".player1").addClass("turn");
    $(".player2").removeClass("turn");
  }

  return currentPlayer;
}
