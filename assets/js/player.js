function Player() {
    var name = "player_data";
    this.getName = function () { return localStorage.getItem(name) ? localStorage.getItem(name) : null; };
    this.setName = function (value) { if(!this.getName()){ localStorage.setItem(name, value); }};

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
    this.getTotalStars = function () { return localStorage.getItem(totalStars) ? localStorage.getItem(totalStars) : 0; };
    this.setTotalStars = function (value) { localStorage.setItem(totalStars, value); };

    var playerCoin = "player_coin";
    this.getPlayerCoin = function () { return localStorage.getItem(playerCoin) ? localStorage.getItem(playerCoin) : 0; };
    this.setPlayerCoin = function (value) { localStorage.setItem(playerCoin, value); };

    var languageGame = "language_game";
    this.getLanguageGame = function () { return localStorage.getItem(languageGame) ? localStorage.getItem(languageGame) : 'en'; };
    this.setLanguageGame = function (value) { localStorage.setItem(languageGame, value); };

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

    this.getData = function (){
        return {
            'language_game': this.getLanguageGame(),
            'player_name': this.getName(),
            'main_volume' : this.getMainVolume(),
            'pause_main_volume' : this.getPauseMainVolume(),
            'fx_volume' : this.getFxVolume(),
            'stages_results' : this.getStagesResults(),
            'power_items' : this.getPowerItens(),
        }
    }
}

var PLAYER = new Player();