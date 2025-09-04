var randNum = Math.floor(Math.random()*6)+1;
var randomDice ="images/dice" + randNum + ".png";
var imgg1 = document.querySelectorAll("img")[0];
imgg1.setAttribute("src",randomDice);

var randNum2= Math.floor(Math.random()*6)+1;
var randomDice2="/dice" + randNum2+ ".png";
var imgg2 = document.querySelectorAll("img")[1];
imgg2.setAttribute("src",randomDice2);

if(randNum > randNum2){
     document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randNum2 > randNum){
     document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
     document.querySelector("h1").innerHTML = "Match Draw!";

}


