/*
|-------------------------------------
|Control stage, defining the settings
|-------------------------------------
|
|*/

//Declaring all variables to control get and set
//var stageTheme = null,
   // stageTheme = null,
  //  stageTheme = 0;

function StageSettings(){
    var __stageTheme = null;
    this.getThemeStageSong = function () {return __stageTheme;};
    this.setThemeStageSong = function (value) {__stageTheme = value;};

    var __gradeLength = null;
    this.getGradeLength = function () {return __gradeLength;};
    this.setGradeLength = function (value) {__gradeLength = value;};

    var __gradeMaxMatchItems = null;
    this.getMaxMatchItems = function () {return __gradeMaxMatchItems;};
    this.setMaxMatchItems = function (value) {__gradeMaxMatchItems = value;};
}

//Declaring the stage variable to use globally
var stage = new StageSettings();
/*
let stage = new StageSettings();
stage.setThemeStageSong('teste');
console.log(stage.getThemeStageSong());
 */