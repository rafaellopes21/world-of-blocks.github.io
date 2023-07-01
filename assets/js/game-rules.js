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
    let randomItem = Math.floor(Math.random() * bg.length);
    itemMatch = bg[randomItem];
    sortedItem.insertAdjacentHTML("beforeend",
        '<div class="sorted-item '+itemMatch+'"></div><h2 class="text-white mb-0" style="font-size: 14px;"><span id="hits-counter">0</span>/'+totalItems+'</h2>'
    );
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

    //Then, the program will take random places to replace with maximum/minimum itemMatch in the grid
    let max = maxMatchItensInSession;
    let min = Math.floor((totalItems / maxTime)) < max ? Math.floor((totalItems / maxTime)) : 1;
    let randomMatchs = Math.floor(Math.random() * (max - min + 1) + min)
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
            '<div class="square-item entry '+randomItems[i]+'" item="'+randomItems[i]+'"></div>');
    }

    gridAction();

    //Refreshes the grid game after X seconds
    refreshgridTime = setTimeout(function (){
        playSFX('zapsplat_multimedia_game_retro_musical_short_tone_003.mp3', '#soundFxTwo');
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
    sumPoints = (sumPoints + addPoints);
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
        'OK',
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
        if(secondStarErrors && totalErrors <= thirdStarErrors){
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
    }
}


function saveResults(){
    let totalStars = 0;
    if(document.querySelector(".total-stars.fa-solid")){
        totalStars = document.querySelectorAll(".total-stars.fa-solid").length;
    }
    results.value = JSON.stringify({
        'total_items': totalItems,
        'hits': totalHits,
        'errors': totalErrors,
        'score': playerScore,
        'time': formatTime(maxTime),
        'timeResolution': formatTime((maxTimeAux - maxTime)),
        'stars': totalStars,
    });
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
|  Start all functions in the game
|-------------------------------------
|
|*/
clearAll();
sortItemGame();
setTimeout( function (){populategrid(gridLength, gridMaxMatchItems, refreshGameTime);}, 1000);
