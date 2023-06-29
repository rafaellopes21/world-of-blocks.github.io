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
var maxTime = 15;
var timerClockInterval = setInterval(updatetimer, 1000);
var totalItems = 0;
var totalHits = 0;
var totalErrors = 0;
var bg = ["bg-danger", "bg-primary", "bg-dark", "bg-info", "bg-success", "bg-warning", "bg-secondary"];


function sortItemGame(){
    let randomItem = Math.floor(Math.random() * bg.length);
    itemMatch = bg[randomItem];
    sortedItem.insertAdjacentHTML("beforeend", '<div class="sorted-item '+itemMatch+'"></div>');
}
function populateGrade(gradeSizeItens = 8, refreshingTime = 5){
    gradeGame.innerHTML = "";
    for (let x = 0; x < gradeSizeItens; x++) {
        for (let y = 0; y < gradeSizeItens; y++) {
            let randomBg = Math.floor(Math.random() * bg.length);

            if(bg[randomBg] == itemMatch){
                totalItems++;
            }

            gradeGame.insertAdjacentHTML("beforeend",
                '<div class="square-item entry '+bg[randomBg]+'" item="'+bg[randomBg]+'"></div>');
        }
    }

    gradeAction();

    //Refreshes the grade game after X seconds
    refreshGradeTime = setTimeout(function (){
        playSFX('zapsplat_multimedia_game_retro_musical_short_tone_003.mp3');
        populateGrade();
    }, refreshingTime * 1000);
}

function gradeAction(){
    document.querySelectorAll(".square-item").forEach(square => {
        square.addEventListener('click', function (){
            destroyCorrect(square);
        });
    });
}

function destroyCorrect(e){
    e.classList.remove("entry");
    if(itemMatch == e.getAttribute('item')){
        playSFX('zapsplat_multimedia_game_retro_musical_ascend_positive.mp3');
        e.classList.add("destroy");
        totalHits++;
    } else {
        playSFX('zapsplat_multimedia_game_retro_musical_incorrect_fail_negative.mp3');
        e.classList.add("wrong");
        totalErrors++;
    }
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
        playSFX('zapsplat_multimedia_game_retro_musical_level_complete_003.mp3');
        clearAll();
        timer.textContent = "00:00";
        console.table([{'total_items': totalItems, 'hits': totalHits, 'errors': totalErrors}]);
    }
}

function clearAll(){
    clearTimeout(refreshGradeTime);
    clearInterval(timerClockInterval);
    document.querySelector("#songTwo").pause();
}

sortItemGame();

setTimeout( function (){
    populateGrade();
}, 1000);
