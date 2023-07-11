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
        if(countdownTime == 1){
            gameStart();
            document.querySelector("#game-table").removeAttribute("style");

            if(stage.getPowers()){
                document.querySelector("#game-powers").removeAttribute("style");
                document.querySelectorAll(".power-divs").forEach(p => {
                    p.style.display = "none";
                });
            } else {
                document.querySelector("#game-powers").setAttribute("hidden", "hidden");
                document.querySelector("#game-powers").previousElementSibling.setAttribute("hidden", "hidden");
            }
        }

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
    refreshGrid(refreshingTime);
}

function refreshGrid(refreshingTime){
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
        showMessage('#msg-error-square', 'text-danger');
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
    let newRecord = saveResults();

    //Finish the game clearing all items
    stopStartSong();
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

    setTimeout(function (){
        if(newRecord){
            document.querySelector('#new-best-title').removeAttribute("hidden");
        }
        if(document.querySelector('#modalTemplateSave')){
            document.querySelector('#modalTemplateSave').insertAdjacentHTML("beforebegin",
                '<div class="alert bg-purple border-rounded text-white text-shadow" style="padding: 5px 15px;font-size: 22px;"><i class="fa-solid fa-coins text-warning" style="margin-right: 8px;position: relative;top: 0px;"></i>'+coinsObtained+'</div>'
            );
        }
    }, 250);
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
        showMessage('#msg-star', 'text-warning');
        starElement.classList.remove("fa-regular");
        starElement.classList.add("fa-solid");
        starElement.classList.add("text-warning");
        playSFX('zapsplat_multimedia_game_retro_musical_short_tone_001.mp3', '#soundFxTwo');
    }
}

function saveResults(){
    enableScroll();

    let totalStars = 0;
    if(document.querySelector(".total-stars.fa-solid")){
        totalStars = document.querySelectorAll(".total-stars.fa-solid").length;
    }

    let resultData = {
        'level': stage.getLevelNumber(),
        'total_items': totalItems,
        'hits': totalHits,
        'errors': totalErrors,
        'score': playerScore,
        'time': formatTime(maxTime),
        'timeResolution': formatTime((maxTimeAux - maxTime)),
        'stars': totalStars,
        'combo': comboCounter,
    };

    //Store the XP acquired and add the new level
    PLAYER.setXp(Math.floor(PLAYER.getXp() + parseInt(playerScore) * 0.1));

    //Store how many coins the player got
    coinsObtained = Math.floor(((parseInt(playerScore) * 0.01) * 0.5) + (maxTime * 0.01) + (totalErrors * 0.3));
    coinsObtained = coinsObtained < 0 ? 0 : coinsObtained;
    PLAYER.setPlayerCoin(parseInt(PLAYER.getPlayerCoin()) + parseInt(coinsObtained));

    //Count stars of the player
    let currentStarsInStage = getStageResults(stage.getLevelNumber())['stars'];
    if(currentStarsInStage){
        if(totalStars > currentStarsInStage){
            PLAYER.setTotalStars((parseInt(PLAYER.getTotalStars()) + (parseInt(totalStars) - parseInt(currentStarsInStage))));
        } else {
            PLAYER.setTotalStars(parseInt(PLAYER.getTotalStars()));
        }
    } else {
        PLAYER.setTotalStars((parseInt(totalStars) + parseInt(PLAYER.getTotalStars())));
    }

    results.value = JSON.stringify(resultData);

    //Save stage results and compare with some status are higher then others to replace.
    let hasResults = getStageResults(stage.getLevelNumber());
    let convertedValue = JSON.parse(results.value);
    let auxResultData = resultData;
    let fieldComp = '';
    let newRecord = true;

    if(hasResults && hasResults['total_items']){
        newRecord = false;

        fieldComp = 'total_items';
        auxResultData[fieldComp] = compareValuesInStageResults(fieldComp, resultData, hasResults, true);
        newRecord = newRecord ? newRecord : convertedValue[fieldComp] > hasResults[fieldComp];

        fieldComp = 'hits';
        auxResultData[fieldComp] = compareValuesInStageResults(fieldComp, resultData, hasResults, true);
        newRecord = newRecord ? newRecord : convertedValue[fieldComp] > hasResults[fieldComp];

        fieldComp = 'errors';
        auxResultData[fieldComp] = compareValuesInStageResults(fieldComp, resultData, hasResults, false);
        newRecord = newRecord ? newRecord : convertedValue[fieldComp] < hasResults[fieldComp];

        fieldComp = 'score';
        auxResultData[fieldComp] = compareValuesInStageResults(fieldComp, resultData, hasResults, true);
        newRecord = newRecord ? newRecord : convertedValue[fieldComp] > hasResults[fieldComp];

        fieldComp = 'time';
        auxResultData[fieldComp] = parseInt(hasResults[fieldComp].replace(":", "")) >= parseInt(resultData[fieldComp].replace(":", ""))
                                ? hasResults[fieldComp] : resultData[fieldComp];
        newRecord = newRecord ? newRecord : parseInt(convertedValue[fieldComp].replace(":", "")) > parseInt(hasResults[fieldComp].replace(":", ""));

        fieldComp = 'timeResolution';
        auxResultData[fieldComp] = parseInt(hasResults[fieldComp].replace(":", "")) >= parseInt(resultData[fieldComp].replace(":", ""))
            ? hasResults[fieldComp] : resultData[fieldComp];

        fieldComp = 'stars';
        auxResultData[fieldComp] = compareValuesInStageResults(fieldComp, resultData, hasResults, true);
        newRecord = newRecord ? newRecord : convertedValue[fieldComp] > hasResults[fieldComp];

        fieldComp = 'combo';
        auxResultData[fieldComp] = compareValuesInStageResults(fieldComp, resultData, hasResults, true);
    }

    setStageResults(stage.getLevelNumber(), auxResultData);
    return newRecord;
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

    enableScroll();
}

/*
|-------------------------------------
|  Functions to start the game
|-------------------------------------
|
|*/
function updatetimer() {
    let finalSong = document.querySelector("#songTwo");
    timer.textContent = formatTime(maxTime);
    maxTime--;

    if(maxTime > 9){
        if (!finalSong.paused) {
            finalSong.pause();
        }
    }

    if(maxTime == 9){
        if (finalSong.paused) {
            finalSong.play();
        }
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

function gamePaused(e){
    if(e.getAttribute('paused') == 'false'){
        e.setAttribute('paused', 'true');
        stopStartSong();
        enableScroll()
        clearTimeout(refreshgridTime);
        clearInterval(timerClockInterval);
    } else {
        e.setAttribute('paused', 'false');
        stopStartSong();
        disableScroll()
        timerClockInterval = setInterval(updatetimer, 1000);
        let remainingTime = refreshGameTime - (refreshGameTime - ((maxTime + 1) % refreshGameTime));
        refreshGrid(remainingTime);
    }
}

function startingPowers(){
    //then, put a countdown to show the powers
    let powerCountTime = 10;
    let timercountPower = powerCountTime;

    let intervalPower = setInterval(function (){
        if(document.querySelector("#time-to-power")){
            document.querySelector("#time-to-power").innerText =
                timercountPower > 9 ? timercountPower.toString() : "0"+timercountPower.toString();
        }

        timercountPower--;
    },1000);

    setTimeout(function (){
        clearInterval(intervalPower);
        if(document.querySelector("#time-to-power")){
            document.querySelector("#time-to-power").parentElement.parentElement.style.display = "none";
            document.querySelectorAll(".power-divs").forEach(p => {
                p.style.display = "block";
            });
        }
    }, (powerCountTime + 1) * 1000);
}

function gameStart(){
    timer = document.querySelector("#clock-time");
    timerClockInterval = setInterval(updatetimer, 1000);
    startingPowers();
    setTimeout( function (){populategrid(gridLength, gridMaxMatchItems, refreshGameTime);}, 1000);

    //Set the colors of the game
    let stageColor = stage.getStageColor() ? stage.getStageColor().split("-")[stage.getStageColor().split("-").length - 1] : 'purple';
    backgroundGridGame.classList.add("bg-"+stageColor);
    document.querySelector("#tot-items-finish").classList.add("bg-"+stageColor);
    gameTable.classList.add("border-"+stageColor);
    scorePointsDiv.style.borderColor = getComputedStyle(backgroundGridGame).backgroundColor;
}

/*
|-------------------------------------
|Functions to exec before start game
|-------------------------------------
|
|*/
disableScroll();
clearAll();
calcGridSize(gridLength);
sortItemGame();