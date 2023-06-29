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
|*/
var sortedItem = document.querySelector("#sort-item");
var itemMatch = false;
var gradeGame = document.querySelector("#grade-game");
var refreshGradeTime = false;
var timer = document.querySelector("#clock-time");
var maxTime = 30;
var timerClockInterval = setInterval(updatetimer, 1000);
var score = document.querySelector("#score-numbers");
var playerScore = 0;
var playerScoreInSession = 0;
var totalItems = 0;
var totalItemsInSession = 0;
var totalHits = 0;
var totalErrors = 0;
var results = document.querySelector("#results-in-game");
var bg = ["bg-danger", "bg-primary", "bg-dark", "bg-info", "bg-success", "bg-warning", "bg-secondary"];


function sortItemGame(){
    let randomItem = Math.floor(Math.random() * bg.length);
    itemMatch = bg[randomItem];
    sortedItem.insertAdjacentHTML("beforeend", '<div class="sorted-item '+itemMatch+'"></div>');
}
function populateGrade(gradeSizeItens = 8, refreshingTime = 5){
    //Clear all items befor load the grade
    gradeGame.innerHTML = "";
    totalItemsInSession = 0;
    playerScoreInSession = 0;

    for (let x = 0; x < gradeSizeItens; x++) {
        for (let y = 0; y < gradeSizeItens; y++) {
            let randomBg = Math.floor(Math.random() * bg.length);

            if(bg[randomBg] == itemMatch){
                totalItems++;
                totalItemsInSession++;
            }

            gradeGame.insertAdjacentHTML("beforeend",
                '<div class="square-item entry '+bg[randomBg]+'" item="'+bg[randomBg]+'"></div>');
        }
    }

    gradeAction();

    //Refreshes the grade game after X seconds
    refreshGradeTime = setTimeout(function (){
        playSFX('zapsplat_multimedia_game_retro_musical_short_tone_003.mp3');
        sumSessionPoints();
        populateGrade();
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
    //Check if player selected all itens in session to make manual refresh
    if(totalItemsInSession == playerScoreInSession){
        clearTimeout(refreshGradeTime);
        playSFX('zapsplat_multimedia_game_retro_musical_ascend_advance_correct.mp3');
        populateGrade();
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
        sumSessionPoints();
        saveResults();

        playSFX('zapsplat_multimedia_game_retro_musical_level_complete_003.mp3');
        clearAll();

        timer.textContent = "00:00";

        loadModal(
            'partials/modal/index',
            'Congratulations '+getPlayer()['player']+'!',
            'OK',
            'menu/main-menu',
            'game/result/index');
    }
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
    clearTimeout(refreshGradeTime);
    clearInterval(timerClockInterval);
    results.value = "";
    document.querySelector("#songTwo").pause();
}

sortItemGame();

setTimeout( function (){
    populateGrade();
}, 1000);
