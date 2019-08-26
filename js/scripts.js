function player (name){
  this.name = name,
  this.tempScore = 0,
  this.totalScore = 0
}

player.prototype.roll = function(){
  var num = Math.ceil(Math.random()*6);
  return num;
}

player.prototype.hold = function(){
  this.totalScore += this.tempScore;
}


$(function() {
  var p1 = new player("p1");
  var p2 = new player("p2");
  var players = [p1, p2];
  var temp = 0;
  var turn = Math.round(Math.random());
  var currentPlayer = players[turn];
  var numberBuffer = 0;

  console.log(currentPlayer + " " + turn)

  if(currentPlayer === p1) {
    //player1
    $("#p1-roll").show();
    $("#p1-hold").show();
    $("#p2-roll").hide();
    $("#p2-hold").hide();

  } else {
    //player2
    $("#p1-roll").hide();
    $("#p1-hold").hide();
    $("#p2-roll").show();
    $("#p2-hold").show();
  }

$("#" + currentPlayer.name + "-roll").click(function() {
      numberBuffer = (currentPlayer.roll());
      if(numberBuffer === 1) {
        temp = 0;
        $("#" + currentPlayer.name + "-temp p").text("");
       if(currentPlayer === p1) {
        currentPlayer = p2;
        } else {
          currentPlayer = p1;
        }
      } else {
        temp += numberBuffer;
      }
      $("#" + currentPlayer.name + "-temp p").text(temp);
  });



});
