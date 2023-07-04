/*
|-------------------------------------
|  All rules of the game and stages
|-------------------------------------
| 1. To see the variables, enter in the
| file: assets/js/game-variables.js
|
| 2. To see the rules of the stage,
| enter in the file path:
| assets/js/stage-rules.js
|*/
function sortItemGame(){
    //Random the selectable Item
    let randomItem = Math.floor(Math.random() * bg.length);
    itemMatch = bg[randomItem];

    //Add the itemSorted in the begining of the game to show for the player
    document.querySelector("#max-itens-select").innerText = totalItems;
    document.querySelector("#find-this").innerHTML = '<div class="card-game-content text-center sorted-item '+itemMatch+'" style="width: 8rem; height: 8rem; border: 3px solid white;"></div>';
    document.querySelector("#find-total").innerHTML = '<h1 class="text-center mt-2 mb-0" style="font-size: 38px">Items: '+totalItems+'</h1>';
    document.querySelector("#find-time").innerHTML = '<h1 class="text-center" style="font-size: 32px">Time: '+formatTime(maxTime)+'</h1>';

    //Set a 5 seconds countdown to begin the game
    let countdownTime = 4;
    let countdown = setInterval(function (){
        document.querySelector("#countdown").innerHTML = "0"+countdownTime;

        //When the timer is in 1 second, start the game function
        if(countdownTime == 1){ gameStart(); }

        //When timer is in 0 seconds, then close the starting modal
        if(countdownTime <= 0){
            clearInterval(countdown);
            document.querySelector("#BtnGameStarting").click();
        }
        countdownTime--;
    }, 1000);

    //Open the starting modal
    document.querySelector("#modalStartGameBtn").click();

    //Add the item in the header game
    sortedItem.insertAdjacentHTML("beforeend", '<div class="text-center sorted-item '+itemMatch+'"></div>');
}

function calcGridSize(gridSizeItens){
    let sizer = (100 / gridSizeItens) - (1.5);
    gridGame.setAttribute("style", "grid-template-columns: repeat(auto-fit, minmax("+sizer+"%, 1fr))")
    document.querySelector("body").style.overflow = "hidden";
}

function populategrid(gridSizeItens, maxMatchItensInSession, refreshingTime){
    //Clear all items before load the grid
    let randomItems = [];
    gridGame.innerHTML = "";
    totalItemsInSession = 0;
    playerScoreInSession = 0;

    //Generate random items to add into grid
    for (let i = 0; i < (gridSizeItens * gridSizeItens); i++) {
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

    //Separate what is maximun and minimun values in the session roll
    let max = maxMatchItensInSession;
    let minNum = maxTime > totalItems ? (maxTime / totalItems) : (totalItems / maxTime);
    let min = minNum < 1 ? 1 : Math.floor(minNum);

    //After separation, lets randomize the numbers and check if current roll has more items then selectable.
    let randomMatchs = Math.floor(Math.random() * (max - min + 1)) + min;
        randomMatchs = randomMatchs > (totalItems - totalHits) ? (totalItems - totalHits) : randomMatchs;

    //Then, the program will take random places to replace with maximum/minimum itemMatch in the grid
    for (let i = 0; i < randomMatchs; i++) {
        let randomIndex = Math.floor(Math.random() * randomItems.length);
        randomItems[randomIndex] = itemMatch;
    }

    //After all this, we build the squares for the player
    for (let i = 0; i < (gridSizeItens * gridSizeItens); i++) {
        if(randomItems[i] == itemMatch){
            totalItemsInSession++;
        }

        gridGame.insertAdjacentHTML("beforeend",
            '<div class="square-item entry '+randomItems[i]+'" item="'+randomItems[i]+'" style="'+squareSizes+'"></div>');
    }

    gridAction();

    //Refreshes the grid game after X seconds
    refreshgridTime = setTimeout(function (){
        playSFX('zapsplat_multimedia_game_retro_musical_short_tone_003.mp3', '#soundFxTwo');
        comboCounter = 0;
        maxCombo.innerText = comboCounter;
        sumSessionPoints();
        populategrid(gridLength, gridMaxMatchItems, refreshGameTime);
    }, refreshingTime * 1000);
}

function gridAction(){
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
            clearTimeout(refreshgridTime);
            playSFX('zapsplat_multimedia_game_retro_musical_ascend_advance_correct.mp3', '#soundFxTwo');
            populategrid(gridLength, gridMaxMatchItems, refreshGameTime);
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
        comboCounter++;
        maxCombo.innerText = comboCounter;
        document.querySelector("#hits-counter").innerText = totalHits;
        completedObjectives();
        sumScore();
        checkSessionSelectedItems();
    } else {
        //If is different, then it's wrong answer!
        playSFX('zapsplat_multimedia_game_retro_musical_incorrect_fail_negative.mp3');
        e.classList.add("wrong");
        totalErrors++;
        comboCounter = 0;
        maxCombo.innerText = comboCounter;

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
    sumPoints = (sumPoints + addPoints) * (comboCounter > 3 ? 3 : comboCounter); //limit combo counter points to 3
    playerScore += Math.ceil((sumPoints ? sumPoints : 0));
    score.innerText = String(playerScore).padStart(5, "0");
}

function finishGame(endSong = 'zapsplat_multimedia_game_retro_musical_level_complete_003.mp3'){

    //Add extra points according with left time at the end
    if(maxTime > 0){
        if(maxTime <= 9){
            if(!timer.classList.contains("text-danger")){
                timer.classList.add("text-danger");
            } else {
                timer.classList.remove("text-danger");
            }
        }
        sumScore(((totalItems / gridMaxMatchItems) * maxTime));
    }

    //Calculate the final points and save the results
    completedObjectives();
    sumSessionPoints();
    saveResults();

    //Finish the game clearing all items
    playSFX(endSong);
    clearAll();

    timer.textContent = formatTime(maxTime);

    //Load results modal
    loadModal(
        'partials/modal/index',
        'Congratulations!',
        'Continue',
        'game/stages/index',
        'game/result/index'
    );
}

function completedObjectives(){
    //get the first star
    if(maxTime >= firstStarTime && totalHits >= firstStarHits){
        if(firstStarErrors && totalErrors <= firstStarErrors){
            updateStar(starOne);
        } else {
            updateStar(starOne);
        }
    }

    //get the second star
    if(maxTime >= secondStarTime && totalHits >= secondStarHits){
        if(secondStarErrors && totalErrors <= secondStarErrors){
            updateStar(starTwo);
        } else {
            updateStar(starTwo);
        }
    }

    //get the third star
    if(maxTime >= thirdStarTime && totalHits >= thirdStarHits){
        if(thirdStarErrors && totalErrors <= thirdStarErrors){
            updateStar(starThree);
        } else {
            updateStar(starThree);
        }
    }
}
function updateStar(starElement){
    if(starElement.classList.contains("fa-regular")){
        starElement.classList.remove("fa-regular");
        starElement.classList.add("fa-solid");
        starElement.classList.add("text-warning");
    }
}


function saveResults(){
    let totalStars = 0;
    if(document.querySelector(".total-stars.fa-solid")){
        totalStars = document.querySelectorAll(".total-stars.fa-solid").length;
    }

    let resultData = {
        'total_items': totalItems,
        'hits': totalHits,
        'errors': totalErrors,
        'score': playerScore,
        'time': formatTime(maxTime),
        'timeResolution': formatTime((maxTimeAux - maxTime)),
        'stars': totalStars,
        'combo': comboCounter,
    };

    results.value = JSON.stringify(resultData);

    //Save stage results and compare with some status are higher then others to replace.
    let hasResults = getStageResults(stage.getLevelNumber());
    let auxResultData = resultData;
    let fieldComp = '';
    if(hasResults && hasResults['total_items']){
        fieldComp = 'total_items';
        auxResultData[fieldComp] = compareValuesInStageResults(fieldComp, resultData, hasResults, true);

        fieldComp = 'hits';
        auxResultData[fieldComp] = compareValuesInStageResults(fieldComp, resultData, hasResults, true);

        fieldComp = 'errors';
        auxResultData[fieldComp] = compareValuesInStageResults(fieldComp, resultData, hasResults, false);

        fieldComp = 'score';
        auxResultData[fieldComp] = compareValuesInStageResults(fieldComp, resultData, hasResults, true);

        fieldComp = 'time';
        auxResultData[fieldComp] = parseInt(hasResults[fieldComp].replace(":", "")) >= parseInt(resultData[fieldComp].replace(":", ""))
                                ? hasResults[fieldComp] : resultData[fieldComp];

        fieldComp = 'timeResolution';
        auxResultData[fieldComp] = parseInt(hasResults[fieldComp].replace(":", "")) >= parseInt(resultData[fieldComp].replace(":", ""))
            ? hasResults[fieldComp] : resultData[fieldComp];

        fieldComp = 'stars';
        auxResultData[fieldComp] = compareValuesInStageResults(fieldComp, resultData, hasResults, true);

        fieldComp = 'combo';
        auxResultData[fieldComp] = compareValuesInStageResults(fieldComp, resultData, hasResults, true);
    }

    setStageResults(stage.getLevelNumber(), auxResultData);
}

function compareValuesInStageResults(fieldComp, resultData, hasResults, isHigher = true){
    if(isHigher){
        return resultData[fieldComp] > hasResults[fieldComp] ? resultData[fieldComp] : hasResults[fieldComp];
    } else {
        return resultData[fieldComp] < hasResults[fieldComp] ? resultData[fieldComp] : hasResults[fieldComp]
    }
}

function getResults(){
    return JSON.parse(results.value);
}

function clearAll(){
    //Clear all timeouts and interval events
    clearTimeout(refreshgridTime);
    clearInterval(timerClockInterval);

    //Stop and clear all sounds and sfx
    document.querySelector("#songTwo").pause();
}

/*
|-------------------------------------
|  Functions to start the game
|-------------------------------------
|
|*/
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

function gameStart(){
    timer = document.querySelector("#clock-time");
    timerClockInterval = setInterval(updatetimer, 1000);
    setTimeout( function (){populategrid(gridLength, gridMaxMatchItems, refreshGameTime);}, 1000);
}

/*
|-------------------------------------
|Functions to exec before start game
|-------------------------------------
|
|*/
clearAll();
calcGridSize(gridLength);
sortItemGame();
//setTimeout( function (){ gameStart(); }, 5000);