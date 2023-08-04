var ID_MORE_TIME = 1;
var ID_TIME_FREEZE = 2;
var ID_DOUBLE_POINTS = 3;
var ID_PERFECT_ROLL = 4;

var POWER_UPS = [
    {
        'id': ID_TIME_FREEZE, //Id to identify the power
        'name': 'Time Freeze', //Power's name
        'bg-color': 'rgb(11,127,171)', //Background color of the powerup in game
        'icon': 'images/powers/time-freeze.png', //Icon to display the power
        'cooldown': 25, //Time to reload the power and use again
        'price': 20, //How many it will cost in the shop
        'effect': 7, //What is the effect of this power (in this case pause the game in seconds)
        'sfx': 'time-freeze.wav', //Sound FX to be played when the button is clicked in game
        'description': 'Freeze the time to obtain more squares and points.' //Description of the power
    },
    {
        'id': ID_MORE_TIME, //Id to identify the power
        'name': 'More Time', //Power's name
        'bg-color': 'rgba(158, 109, 250, 1)', //Background color of the powerup in game
        'icon': 'images/powers/more-time.png', //Icon to display the power
        'cooldown': 15, //Time to reload the power and use again
        'price': 30, //How many it will cost in the shop
        'effect': 5, //What is the effect of this power (in this case add seconds to the game)
        'sfx': 'zapsplat_multimedia_game_retro_musical_ascend_advance_001.mp3', //Sound FX to be played when the button is clicked in game
        'description': 'Add more time to your game.' //Description of the power
    },
    {
        'id': ID_DOUBLE_POINTS, //Id to identify the power
        'name': 'Double Points', //Power's name
        'bg-color': 'rgb(39 113 16)', //Background color of the powerup in game
        'icon': 'images/powers/double-points.png', //Icon to display the power
        'cooldown': 30, //Time to reload the power and use again
        'price': 40, //How many it will cost in the shop
        'effect': 5, //What is the effect of this power (duration of multiplier of the score point in the game)
        'sfx': 'glitch.wav', //Sound FX to be played when the button is clicked in game
        'description': 'Double your score points and money!' //Description of the power
    },
    {
        'id': ID_PERFECT_ROLL, //Id to identify the power
        'name': 'Perfect Roll', //Power's name
        'bg-color': 'rgb(225 112 28)', //Background color of the powerup in game
        'icon': 'images/powers/perfect-roll.png', //Icon to display the power
        'cooldown': 50, //Time to reload the power and use again
        'price': 60, //How many it will cost in the shop
        'effect': 2, //What is the effect of this power (in this case the power will work in seconds in game)
        'sfx': 'zapsplat_multimedia_game_retro_musical_alert_001.mp3', //Sound FX to be played when the button is clicked in game
        'description': 'If the match is hard, use this to auto select all the squares.' //Description of the power
    },
];

function Powers() {
    this.getPowers = function () {
        return POWER_UPS;
    };

    this.perfectRollDestroy = function (){
        let itemsName = "";
        let itemsSelectable = itemMatch.split(" ");
        if(itemsSelectable.length > 0){
            itemsSelectable.forEach(i => {
                itemsName = itemsName+"."+i;
            });
        } else {
            itemsName = itemsSelectable;
        }

        let itemsFound = document.querySelectorAll(".square-item"+itemsName);
        if(itemsFound && itemsFound.length > 0){
            itemsFound.forEach(item => {
                item.click();
            });
        }
    }
}

function applyPower(e, powerId){
    let power = POWER_UPS.find(item => item.id === powerId);
    if(!power){ return false; }
    if(!document.querySelector("#pauseModalbtnGm")){ return false; }

    //block the power button
    e.classList.add("power-blocked");
    e.children[0].style.display = "block";
    e.toggleAttribute("disabled");
    document.querySelector("#pauseModalbtnGm").toggleAttribute("disabled");
    document.querySelector("#pauseModalbtnGm").children[0].toggleAttribute("hidden");

    //remove 1 item from the current power and update on the screen
    let allPlayerPowers = PLAYER.getPowerItens();
    PLAYER.clearPowerItens();
    let actualQtd = 0;
    allPlayerPowers.forEach(oldPower => {
        let currentQtd = -1;
        if(oldPower['id'] == powerId){
            currentQtd = oldPower['quantity'] - 1;
            e.children[1].innerText = currentQtd;
            actualQtd = currentQtd;
        }
        PLAYER.setPowerItens({
            'id': oldPower['id'],
            'name': oldPower['name'],
            'quantity': currentQtd < 0 ? oldPower['quantity'] : currentQtd,
        });
    });

    //execute the power action and sound fx
    fillProgressBar(power['effect'], e.nextElementSibling.children[0]);
    powerAction(power);

    //Update in the screen the countdown
    let countdown = parseInt(power['cooldown']);

    if(countdown >= 10){ e.children[0].style.left = '12px'; }
    e.children[0].innerText = countdown;
    let counting = setInterval(function (){
        countdown--;
        if(countdown < 10){ e.children[0].style.left = '19px'; }
        e.children[0].innerText = countdown;
    }, 1000);

    //Release the power to use again
    setTimeout(function (){
        clearInterval(counting);

        //If power is more than zero, then release the use
        if(actualQtd > 0){
            e.classList.remove("power-blocked");
            e.toggleAttribute("disabled");
        }

        e.children[0].style.display = "none";
        if(!document.querySelector("#pauseModalbtnGm")){ return false; }
        document.querySelector("#pauseModalbtnGm").toggleAttribute("disabled");
        document.querySelector("#pauseModalbtnGm").children[0].toggleAttribute("hidden");
    }, power['cooldown'] * 1000);
}

function powerAction(powerGet){
    playSFX(powerGet['sfx'], '#soundFxTwo');

    if(powerGet['id'] == ID_MORE_TIME){
        maxTime += parseInt(powerGet['effect']);
    }

    if(powerGet['id'] == ID_TIME_FREEZE){
        let storeCurrentTime = timer.innerText;
        maxTime += parseInt(powerGet['effect']);

        let releaseTimer = setInterval(function (){
            timer.innerText = storeCurrentTime;

            timer.classList.add("text-info");
            if(timer.classList.contains("text-danger")){
                timer.classList.remove("text-danger");
            }
        }, 150);

        setTimeout(function (){
            timer.classList.remove("text-info");
            clearInterval(releaseTimer);
        }, parseInt(powerGet['effect']) * 1000);
    }

    if(powerGet['id'] == ID_DOUBLE_POINTS){
        score.classList.add("text-warning");

        setTimeout(function (){
            playerScore = parseInt(playerScore) * 2;
            sumScore(0);
        }, parseInt(powerGet['effect']) * 1000);

        setTimeout(function (){
            score.classList.remove("text-warning");
        }, parseInt(powerGet['effect'] + 1) * 1000);
    }

    if(powerGet['id'] == ID_PERFECT_ROLL){
        powers.perfectRollDestroy();

        let releaseTimer = setInterval(function (){
            powers.perfectRollDestroy();
        }, 750);

        setTimeout(function (){
            clearInterval(releaseTimer);
        }, parseInt(powerGet['effect']) * 1000);
    }
}

function fillProgressBar(duration, progressBar) {
    progressBar.parentElement.toggleAttribute("hidden");
    let progress = 10;
    let increment = 100 / (duration * 1000 / 10);

    let interval = setInterval(() => {
        progress += increment;
        progressBar.style.width = `${progress}%`;
        progressBar.setAttribute('aria-valuenow', progress);

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(function (){
                progress = 0;
                progressBar.parentElement.toggleAttribute("hidden");
                progressBar.style.width = `${progress}%`;
            }, 700);
        }
    }, 10);
}

var powers = new Powers();