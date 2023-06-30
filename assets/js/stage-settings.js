/*
|-------------------------------------
|Control stage, defining the settings
|-------------------------------------
|
|*/
function StageSettings(){
    var __levelNumber = null;
    this.getLevelNumber = function () {return __levelNumber;};
    this.setLevelNumber = function (value) {__levelNumber = value;};

    var __stageTheme = null;
    this.getThemeStageSong = function () {return __stageTheme;};
    this.setThemeStageSong = function (value) {__stageTheme = value;};

    var __gridLength = null;
    this.getgridLength = function () {return __gridLength;};
    this.setgridLength = function (value) {__gridLength = value;};

    var __gridMaxMatchItems = null;
    this.getMaxMatchItems = function () {return __gridMaxMatchItems;};
    this.setMaxMatchItems = function (value) {__gridMaxMatchItems = value;};

    var __refreshGameTime = null;
    this.getRefreshGameTime = function () {return __refreshGameTime;};
    this.setRefreshGameTime = function (value) {__refreshGameTime = value;};

    var __maxTime = null;
    this.getMaxTime = function () {return __maxTime;};
    this.setMaxTime = function (value) {__maxTime = value;};

    var __totalItems = null;
    this.getTotalItems = function () {return __totalItems;};
    this.setTotalItems = function (value) {__totalItems = value;};

    var __firstStarTime = null;
    this.getFirstStarTime = function () {return __firstStarTime;};
    this.setFirstStarTime = function (value) {__firstStarTime = value;};

    var __firstStarHits = null;
    this.getFirstStarHits = function () {return __firstStarHits;};
    this.setFirstStarHits = function (value) {__firstStarHits = value;};

    var __firstStarErrors = null;
    this.getFirstStarErrors = function () {return __firstStarErrors;};
    this.setFirstStarErrors = function (value) {__firstStarErrors = value;};

    var __secondStarTime = null;
    this.getSecondStarTime = function () {return __secondStarTime;};
    this.setSecondStarTime = function (value) {__secondStarTime = value;};

    var __secondStarHits = null;
    this.getSecondStarHits = function () {return __secondStarHits;};
    this.setSecondStarHits = function (value) {__secondStarHits = value;};

    var __secondStarErrors = null;
    this.getSecondStarErrors = function () {return __secondStarErrors;};
    this.setSecondStarErrors = function (value) {__secondStarErrors = value;};

    var __thirdStarTime = null;
    this.getThirdStarTime = function () {return __thirdStarTime;};
    this.setThirdStarTime = function (value) {__thirdStarTime = value;};

    var __thirdStarHits = null;
    this.getThirdStarHits = function () {return __thirdStarHits;};
    this.setThirdStarHits = function (value) {__thirdStarHits = value;};

    var __thirdStarErrors = null;
    this.getThirdStarErrors = function () {return __thirdStarErrors;};
    this.setThirdStarErrors = function (value) {__thirdStarErrors = value;};

    var __itemsToSelect = null;
    this.getItemsToSelect = function () {return __itemsToSelect;};
    this.setItemsToSelect = function (value) {__itemsToSelect = value;};
}

//Declaring the stage variable to use globally
var stage = new StageSettings();