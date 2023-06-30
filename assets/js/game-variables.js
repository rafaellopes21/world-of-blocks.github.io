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
var gridGame = document.querySelector("#grid-game");
var refreshgridTime = false;
var gridLength = stage.getgridLength(); //Define the size of the grid
var gridMaxMatchItems = stage.getMaxMatchItems(); //Define how many match itens will be present in a session
var refreshGameTime = stage.getRefreshGameTime(); //Define how many seconds the grid will be refreshed
var maxTime = stage.getMaxTime(); //Time in seconds to play the current game
var maxTimeAux = maxTime; //Aux time to help to calculate de diff between times
var timer = document.querySelector("#clock-time");
var timerClockInterval = setInterval(updatetimer, 1000);

/*----------------------------------------------------------------
            Number of total selected items per match
    (you dont need inform this, because the code do it for you!)
 -----------------------------------------------------------------*/
var totalItems = stage.getTotalItems()
    ? stage.getTotalItems()
    : Math.floor((maxTime * gridLength)/(refreshGameTime + gridMaxMatchItems));

/*-------------------------------------
     ACHIEVEMENTS AND ACCOMPLISHES
 -------------------------------------*/
var starOne = document.querySelector("#star1");
var firstStarTime = stage.getFirstStarTime();//Seconds remaining to obtain 1 star (+ points)
var firstStarHits = (totalItems - stage.getFirstStarHits());//Points necessary to obtain 1 star (+ time)
var firstStarErrors = stage.getFirstStarErrors();//Errors acceptable to obtain 1 stars (+ points + time)

var starTwo = document.querySelector("#star2");
var secondStarTime = stage.getSecondStarTime();//Seconds remaining to obtain 2 stars (+ points)
var secondStarHits = (totalItems - stage.getSecondStarHits());//Points necessary to obtain 2 stars (+ time)
var secondStarErrors = stage.getSecondStarErrors();//Errors acceptable to obtain 2 stars (+ points + time)

var starThree = document.querySelector("#star3");
var thirdStarTime = stage.getThirdStarTime();//Seconds remaining to obtain 3 stars (+ points)
var thirdStarHits = (totalItems - stage.getThirdStarHits());//Points necessary to obtain 3 stars (+ time)
var thirdStarErrors = stage.getThirdStarErrors();//Errors acceptable to obtain 3 stars (+ points + time)

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
var bg = stage.getItemsToSelect();


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