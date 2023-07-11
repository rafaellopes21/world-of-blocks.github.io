function Player() {
    var name = "player_data";
    this.getName = function () { return localStorage.getItem(name) ? localStorage.getItem(name) : null; };
    this.setName = function (value) { if(!this.getName()){ localStorage.setItem(name, value); }};

    var playerLevel = "player_level";
    this.getPlayerLevel = function () { return localStorage.getItem(playerLevel) ? parseInt(localStorage.getItem(playerLevel)) : 1; };
    this.setPlayerLevel = function (value) { localStorage.setItem(playerLevel, parseInt(value)); };

    var experience = "experience";
    this.getXp = function () { return localStorage.getItem(experience) ? parseInt(localStorage.getItem(experience)) : 0; };
    this.setXp = function (value) { localStorage.setItem(experience, parseInt(value)); };

    var mainVolume = "main_volume";
    this.getMainVolume = function () { return localStorage.getItem(mainVolume) ? localStorage.getItem(mainVolume) : "6"; };
    this.setMainVolume = function (value) { localStorage.setItem(mainVolume, value); };

    var pauseMainVolume = "pause_main_volume";
    this.getPauseMainVolume = function () { return localStorage.getItem(pauseMainVolume) ? localStorage.getItem(pauseMainVolume) : 0; };
    this.setPauseMainVolume = function (value) { localStorage.setItem(pauseMainVolume, value); };

    var fxVolume = "fx_volume";
    this.getFxVolume = function () { return localStorage.getItem(fxVolume) ? localStorage.getItem(fxVolume) : "10"; };
    this.setFxVolume = function (value) { localStorage.setItem(fxVolume, value); };

    var totalStars = "total_stars";
    this.getTotalStars = function () { return localStorage.getItem(totalStars) ? parseInt(localStorage.getItem(totalStars)) : 0; };
    this.setTotalStars = function (value) { localStorage.setItem(totalStars, value); };

    var playerCoin = "player_coin";
    this.getPlayerCoin = function () { return localStorage.getItem(playerCoin) ? parseInt(localStorage.getItem(playerCoin)) : 0; };
    this.setPlayerCoin = function (value) { localStorage.setItem(playerCoin, value); };

    var languageGame = "language_game";
    this.getLanguageGame = function () { return localStorage.getItem(languageGame) ? localStorage.getItem(languageGame) : 'en'; };
    this.setLanguageGame = function (value) { localStorage.setItem(languageGame, value); };

    var lastStagePlayed = 'last_stage_played';
    this.getLastStagePlayed = function () { return localStorage.getItem(lastStagePlayed) ? localStorage.getItem(lastStagePlayed) : null; };
    this.setLastStagePlayed = function (value) { localStorage.setItem(lastStagePlayed, value); };

    var powerItens = "power_items";
    this.clearPowerItens = function () { localStorage.getItem(powerItens) ? localStorage.removeItem(powerItens) : false; };
    this.getPowerItens = function () { return localStorage.getItem(powerItens) ? JSON.parse(localStorage.getItem(powerItens)) : []; };
    this.setPowerItens = function (value) {
        let currentItens = this.getPowerItens();
        currentItens.push(value);
        localStorage.setItem(powerItens, JSON.stringify(currentItens));
    };

    this.getStagesResults = function () {
        var stageArray = [];
        getStageSettings().forEach(stage => {
            if(localStorage.getItem('stage-results-'+stage['level'])){
                stageArray.push(JSON.parse(localStorage.getItem('stage-results-'+stage['level'])))
            }
        });
        return stageArray;
    };

    this.calcXpLevel = function () {
        let experience = 0;
        let playerLevel = this.getPlayerLevel();

        if(playerLevel <= 100){ experience = 1000 * 10;}
        if(playerLevel <= 90){ experience = 1000 * 9;}
        if(playerLevel <= 80){ experience = 1000 * 8;}
        if(playerLevel <= 70){ experience = 1000 * 7;}
        if(playerLevel <= 60){ experience = 1000 * 6;}
        if(playerLevel <= 50){ experience = 1000 * 5;}
        if(playerLevel <= 40){ experience = 1000 * 4;}
        if(playerLevel <= 30){ experience = 1000 * 3;}
        if(playerLevel <= 20){ experience = 1000 * 2;}
        if(playerLevel <= 10){ experience = 1000 * 1;}

        return experience;
    };

    this.getData = function (){
        return {
            'language_game': this.getLanguageGame(),
            'player_name': this.getName(),
            'player_xp': this.getXp(),
            'player_level': this.getPlayerLevel(),
            'main_volume' : this.getMainVolume(),
            'pause_main_volume' : this.getPauseMainVolume(),
            'fx_volume' : this.getFxVolume(),
            'stages_results' : this.getStagesResults(),
            'power_items' : this.getPowerItens(),
        }
    }
}

function levelingXPUp(){
    let totalLevelXp = PLAYER.calcXpLevel();
    let currentXp = PLAYER.getXp();

    if(currentXp >= totalLevelXp){
        PLAYER.setXp((currentXp - totalLevelXp));
        PLAYER.setPlayerLevel((PLAYER.getPlayerLevel() + 1));
        showMessage('#msg-level-up', 'text-primary', 300, false);
        PLAYER.setPlayerCoin(PLAYER.getPlayerCoin() + totalLevelXp * 0.1);
        document.querySelector("#item-earned").innerHTML = (totalLevelXp * 0.1);
        levelingXPUp();
    }

    let percentage = Number((PLAYER.getXp() / PLAYER.calcXpLevel()) * 100).toFixed(2);
    if(document.querySelector("#current-user-xp") && document.querySelector("#xp-progressbar")){
        document.querySelector("#current-user-xp").innerText = PLAYER.getXp()+"/"+PLAYER.calcXpLevel();
        document.querySelector("#xp-progressbar").innerText = percentage+"%";
        document.querySelector("#xp-progressbar").setAttribute("aria-valuenow", percentage);
        document.querySelector("#xp-progressbar").style.width = percentage+"%";
        document.querySelector("#player-result-level").innerText = PLAYER.getPlayerLevel();
    }

    if(document.querySelector("#level-bar")){
        document.querySelector("#level-bar").setAttribute("aria-valuenow", percentage);
        document.querySelector("#level-bar").style.width = percentage+"%";
    }

    if(document.querySelector("#player-level")){
        document.querySelector("#player-level").innerText = PLAYER.getPlayerLevel();
    }
}

var PLAYER = new Player();