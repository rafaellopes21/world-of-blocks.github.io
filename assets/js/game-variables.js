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
var timer = false; //This control the time in the game in the function gameStart()
var timerClockInterval = 0; //This control the time interval in the game in the function gameStart()

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
var firstStarHits = stage.getFirstStarHits();//Points necessary to obtain 1 star (+ time)
var firstStarErrors = stage.getFirstStarErrors() ? stage.getFirstStarErrors() : totalItems;//Errors acceptable to obtain 1 stars (+ points + time)

var starTwo = document.querySelector("#star2");
var secondStarTime = stage.getSecondStarTime();//Seconds remaining to obtain 2 stars (+ points)
var secondStarHits = stage.getSecondStarHits();//Points necessary to obtain 2 stars (+ time)
var secondStarErrors = stage.getSecondStarErrors() ? stage.getSecondStarErrors() : totalItems;//Errors acceptable to obtain 2 stars (+ points + time)

var starThree = document.querySelector("#star3");
var thirdStarTime = stage.getThirdStarTime();//Seconds remaining to obtain 3 stars (+ points)
var thirdStarHits = stage.getThirdStarHits() ? stage.getThirdStarHits() : totalItems;//Points necessary to obtain 3 stars (+ points + time)
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
var coinsObtained = 0;

/*-------------------------------------
  VARS TO CONTROL THE BLOCKS IN GAME
 -------------------------------------*/
var squareSizes = ''; //This build an auto CSS based on gridsquare number in the fn: calcGridSize()
var bg = stage.getItemsToSelect();