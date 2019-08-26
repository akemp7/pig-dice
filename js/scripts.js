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
  var player1 = new player(prompt("Enter your name P1"));
  var player2 = new player(prompt("Enter your name P2"));
  var p1Temp = 0;

  p1Temp += $("#p1-roll").click(player1.roll());
  $("#p1-temp").text(p1Temp);

});
