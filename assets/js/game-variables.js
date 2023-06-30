/*
|-------------------------------------
|   GLOBAL VARS TO CONTROL THE GAME
|-------------------------------------
|
*/
playSong(stage.getThemeStageSong()); //Theme song of stage

 /*-------------------------------------
       VARS TO CONTROL THE GAME
 -------------------------------------*/
var sortedItem = document.querySelector("#sort-item");
var itemMatch = false;
var gradeGame = document.querySelector("#grade-game");
var refreshGradeTime = false;
var gradeLength = stage.getGradeLength(); //Define the size of the grade
var gradeMaxMatchItems = stage.getMaxMatchItems(); //Define how many match itens will be present in a session
var refreshGameTime = 5; //Define how many seconds the grade will be refreshed
var maxTime = 30; //Time in seconds to play the current game
var maxTimeAux = maxTime; //Aux time to help to calculate de diff between times
var timer = document.querySelector("#clock-time");
var timerClockInterval = setInterval(updatetimer, 1000);
var totalItems = Math.floor((maxTime * gradeLength)/(refreshGameTime + gradeMaxMatchItems)); //Number of total selected items per match

/*-------------------------------------
     ACHIEVEMENTS AND ACCOMPLISHES
 -------------------------------------*/
var starThree = document.querySelector("#star3");
var firstStarTime = 5;//Seconds remaining to obtain 1 star (+ points)
var firstStarHits = (totalItems - 6);//Points necessary to obtain 1 star (+ time)
var firstStarErrors = false;//Errors acceptable to obtain 1 stars (+ points + time)

var starTwo = document.querySelector("#star2");
var secondStarTime = 7;//Seconds remaining to obtain 2 stars (+ points)
var secondStarHits = (totalItems - 3);//Points necessary to obtain 2 stars (+ time)
var secondStarErrors = 5;//Errors acceptable to obtain 2 stars (+ points + time)

var starOne = document.querySelector("#star1");
var thirdStarTime = 9;//Seconds remaining to obtain 3 stars (+ points)
var thirdStarHits = totalItems;//Points necessary to obtain 3 stars (+ time)
var thirdStarErrors = 1;//Errors acceptable to obtain 3 stars (+ points + time)

/*-------------------------------------
  VARS TO CONTROL THE POINTS OF PLAYER
 -------------------------------------*/
var results = document.querySelector("#results-in-game");
var score = document.querySelector("#score-numbers");
var maxCombo = document.querySelector("#max-combo");
var comboCounter = 0;
var playerScore = 0;
var playerScoreInSession = 0;
var totalItemsInSession = 0;
var totalHits = 0;
var totalErrors = 0;

/*-------------------------------------
  VARS TO CONTROL THE BLOCKS IN GAME
 -------------------------------------*/
var bg = ["bg-danger", "bg-primary", "bg-dark", "bg-info", "bg-success", "bg-warning", "bg-secondary"];


/*-------------------------------------
  CONTROL THE COUNTER TIME LIMIT GAME
 -------------------------------------*/
function updatetimer() {
    timer.textContent = formatTime(maxTime);
    maxTime--;

    if(maxTime == 9){
        playSong('sound_fx/zapsplat_multimedia_game_retro_musical_timer_loop_003.mp3', '#songTwo');
    }

    if(maxTime <= 9){
        if(!timer.classList.contains("text-danger")){
            timer.classList.add("text-danger");
        } else {
            timer.classList.remove("text-danger");
        }
    }

    if (maxTime < 0) {
        finishGame();
    }
}