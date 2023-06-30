/*
|-------------------------------------
|   Change the main theme of game
|-------------------------------------
|
|*/
playSong('memo.mp3');

/*
|-------------------------------------
|   GLOBAL VARS TO CONTROL THE GAME
|-------------------------------------
|
 -------------------------------------
       VARS TO CONTROL THE GAME
 -------------------------------------*/
var sortedItem = document.querySelector("#sort-item");
var itemMatch = false;
var gradeGame = document.querySelector("#grade-game");
var refreshGradeTime = false;
var gradeLength = 8; //Define the size of the grade
var gradeMaxMatchItems = 2; //Define how many match itens will be present in a session
var refreshGameTime = 5; //Define how many seconds the grade will be refreshed
var maxTime = 30; //Time in seconds to play the current game
var timer = document.querySelector("#clock-time");
var timerClockInterval = setInterval(updatetimer, 1000);
var totalItems = Math.floor((maxTime * gradeLength)/(refreshGameTime + gradeMaxMatchItems)); //Number of total selected items per match

/*-------------------------------------
  VARS TO CONTROL THE POINTS OF PLAYER
 -------------------------------------*/
var results = document.querySelector("#results-in-game");
var score = document.querySelector("#score-numbers");
var playerScore = 0;
var playerScoreInSession = 0;
var totalItemsInSession = 0;
var totalHits = 0;
var totalErrors = 0;

/*-------------------------------------
  VARS TO CONTROL THE BLOCKS IN GAME
 -------------------------------------*/
var bg = ["bg-danger", "bg-primary", "bg-dark", "bg-info", "bg-success", "bg-warning", "bg-secondary"];

function sortItemGame(){
    let randomItem = Math.floor(Math.random() * bg.length);
    itemMatch = bg[randomItem];
    sortedItem.insertAdjacentHTML("beforeend", '<div class="sorted-item '+itemMatch+'"></div>');
}
function populateGrade(gradeSizeItens, maxMatchItensInSession, refreshingTime){
    //Clear all items before load the grade
    let randomItems = [];
    gradeGame.innerHTML = "";
    totalItemsInSession = 0;
    playerScoreInSession = 0;

    //Generate random items to add into grade
    for (let i = 0; i < (gradeSizeItens * gradeSizeItens); i++) {
        randomItems.push(bg[Math.floor(Math.random() * bg.length)]);
    }

    //After generate, make some loop to replace all itemMatch to limit max size
    for (let i = 0; i < randomItems.length; i++) {
        if (randomItems[i] === itemMatch) {
            let generatedAgain = bg[Math.floor(Math.random() * bg.length)];
            while (generatedAgain === itemMatch) {
                generatedAgain = bg[Math.floor(Math.random() * bg.length)];
            }
            randomItems[i] = generatedAgain;
        }
    }

    //Then, the program will take random places to replace with maximum/minimum itemMatch in the grade
    let max = maxMatchItensInSession;
    let min = Math.floor((totalItems / maxTime)) < max ? Math.floor((totalItems / maxTime)) : 1;
    let randomMatchs = Math.floor(Math.random() * (max - min + 1) + min)
    for (let i = 0; i < randomMatchs; i++) {
        let randomIndex = Math.floor(Math.random() * randomItems.length);
        randomItems[randomIndex] = itemMatch;
    }

    //After all this, we build the squares for the player
    for (let i = 0; i < (gradeSizeItens * gradeSizeItens); i++) {
        if(randomItems[i] == itemMatch){
            totalItemsInSession++;
        }

        gradeGame.insertAdjacentHTML("beforeend",
            '<div class="square-item entry '+randomItems[i]+'" item="'+randomItems[i]+'"></div>');
    }

    gradeAction();

    //Refreshes the grade game after X seconds
    refreshGradeTime = setTimeout(function (){
        playSFX('zapsplat_multimedia_game_retro_musical_short_tone_003.mp3', '#soundFxTwo');
        sumSessionPoints();
        populateGrade(gradeLength, gradeMaxMatchItems, refreshGameTime);
    }, refreshingTime * 1000);
}

function gradeAction(){
    document.querySelectorAll(".square-item").forEach(square => {
        square.addEventListener('click', function (){
            if(!square.hasAttribute("disabled"))
                destroyCorrect(square);
        });
    });
}

function checkSessionSelectedItems(){
    //If total hits by player is the same as totalItems, then, the game is over
    if(totalHits == totalItems){
        finishGame('zapsplat_multimedia_game_retro_musical_level_complete_008.mp3');
    } else {
        //Check if player selected all itens in session to make manual refresh
        if(totalItemsInSession == playerScoreInSession){
            clearTimeout(refreshGradeTime);
            playSFX('zapsplat_multimedia_game_retro_musical_ascend_advance_correct.mp3', '#soundFxTwo');
            populateGrade(gradeLength, gradeMaxMatchItems, refreshGameTime);
        }
    }
}

function destroyCorrect(e){
    //Make some logics to prevent erros
    e.classList.remove("entry");
    e.setAttribute("disabled", "disabled");

    //If item selected is the same from the random item, then it's right
    if(itemMatch == e.getAttribute('item')){
        playSFX('zapsplat_multimedia_game_retro_musical_ascend_positive.mp3');
        e.classList.add("destroy");

        //Sum the points and store.
        totalHits++;
        sumScore();
        checkSessionSelectedItems();
    } else { //If is different, then it's wrong answer!
        playSFX('zapsplat_multimedia_game_retro_musical_incorrect_fail_negative.mp3');
        e.classList.add("wrong");
        totalErrors++;

        //Remove the class from element to release the animation to do again if necessary.
        setTimeout(function (){ e.classList.remove("wrong"); }, 1000);
    }

    //Remove disable button to prevent erros by double click.
    setTimeout(function (){ e.removeAttribute("disabled"); }, 1000);
}

function sumSessionPoints(){
    let sumPoints = (playerScoreInSession * totalItemsInSession) / playerScoreInSession;

    if(playerScoreInSession == totalItemsInSession){
        sumPoints = (playerScoreInSession * totalItemsInSession) / 2;
    }

    sumScore((sumPoints ? sumPoints : 0));
}
function sumScore(addPoints = 0){
    playerScoreInSession++;
    let sumPoints = (totalHits / totalErrors) == "Infinity" ? (totalHits / 1) : (totalHits / totalErrors);
    sumPoints = (sumPoints + addPoints);
    playerScore += Math.ceil((sumPoints ? sumPoints : 0));
    score.innerText = String(playerScore).padStart(5, "0");
}

function updatetimer() {
    let minutes = Math.floor(maxTime / 60);
    let secondsLeft = maxTime % 60;

    timer.textContent = `${String(minutes).padStart(2, "0")}:${String(secondsLeft).padStart(2, "0")}`;
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

function finishGame(endSong = 'zapsplat_multimedia_game_retro_musical_level_complete_003.mp3'){
    sumSessionPoints();
    saveResults();

    playSFX(endSong);
    clearAll();

    timer.textContent = "00:00";

    loadModal(
        'partials/modal/index',
        'Congratulations '+getPlayerSettings()['player_name']+'!',
        'OK',
        'menu/main-menu',
        'game/result/index'
    );
}

function saveResults(){
    results.value = JSON.stringify(
        {'total_items': totalItems, 'hits': totalHits, 'errors': totalErrors, 'score': playerScore}
    );
}

function getResults(){
    return JSON.parse(results.value);
}

function clearAll(){
    //Clear all timeouts and interval events
    clearTimeout(refreshGradeTime);
    clearInterval(timerClockInterval);

    //Stop and clear all sounds and sfx
    document.querySelector("#songTwo").pause();
}

/*
|-------------------------------------
|  Start all functions in the game
|-------------------------------------
|
|*/
sortItemGame();
setTimeout( function (){populateGrade(gradeLength, gradeMaxMatchItems, refreshGameTime);}, 1000);
