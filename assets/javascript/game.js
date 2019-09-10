//test hook up to js sheet
console.log ("is this thing on?")

// variable needed

var wins = 0;
var losses = 0;
var target;
var score = 0;
var red;
var blue;
var purple;
var green;

start();

function start(){
    generate();
    $("#target-text").html("Target: " + target);
    $("#score-text").html("Score: " + score);
    $("#wins-text").html("Wins: " + wins);
    $("#losses-text").html("Losses: " + losses);
    $("#red").attr("data-crystalvalue", red);
    $("#blue").attr("data-crystalvalue", blue);
    $("#green").attr("data-crystalvalue", green);
    $("#purple").attr("data-crystalvalue", purple);

};


function generate(){

    target = [Math.floor(Math.random() * (99 - 30) +30)];
    red =  [Math.floor(Math.random() * (12 - 5) +5)];
    blue =  [Math.floor(Math.random() * (6- 2) + 2)];
    purple =  [Math.floor(Math.random() * (12 - 1) + 1)];
    green =  [Math.floor(Math.random() * (3 - 1) + 1)];


    console.log("new target is: " + target);
    console.log("new red: " + red) ;
    console.log("new blue: " + blue);
    console.log("new green: " + green) ;
    console.log("new purple: " + purple) ;
   

};



//function to add values of gems to score and output to html
$(".crystalimg").on("click", function() {
    if (score >= target) {
        return;
    }             
    
    var crystalValue = $(this).attr("data-crystalvalue");
    crystalValue = parseInt(crystalValue);
    score += crystalValue;
    $("#score-text").html("Score: " + score);  




//if score  === target trigger wins incriment up and start over
if (score == target) {
    wins++;
  //  console.log(winner winner chicken dinner!);
    $("#wins-text").text(wins);
    start();
};

//or if score > target  trigger loss incrimint up and start over
 if (score > target){
    losses++;
  //  console.log(looooossssseeeerrrr);
    $("#losses-text").text(losses);
    start();
};
});
