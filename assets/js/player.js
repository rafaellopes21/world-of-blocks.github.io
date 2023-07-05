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

    this.getData = function (){
        return {
            'player_name': this.getName(),
            'main_volume' : this.getMainVolume(),
            'pause_main_volume' : this.getPauseMainVolume(),
            'fx_volume' : this.getFxVolume(),
        }
    }
}

var PLAYER = new Player();