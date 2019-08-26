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
  var p1 = new player(prompt("Enter your name P1"));
  var p2 = new player(prompt("Enter your name P2"));
  var p1Temp = 0;
  var turn = Math.random();

  if(turn < 0.5) {
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


$("#p1-roll").click(function() {
      p1Temp += (p1.roll());
      $("#p1-temp").text(p1Temp);
  });



});
