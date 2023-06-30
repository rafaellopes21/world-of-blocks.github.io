/*
|-------------------------------------
|  All rules of the current stage
|-------------------------------------
| 1. To see the variables of the game,
| enter in the file:
| assets/js/game-variables.js
|
| 2. To see the class of the stage settings,
| enter in the file path:
| assets/js/stage-settings.js
*/
function playStage(stageNumber){
    let stageConfig = getStageSettings(stageNumber);

    stage.setThemeStageSong(stageConfig['stageTheme']);
    stage.setGradeLength(stageConfig['gradeLength']);
    stage.setMaxMatchItems(stageConfig['gradeMaxMatchItems']);

    loadView('game/index');
}


function getStageSettings(stg = false){
    let stagesSettings = {
        1: {
            'stageTheme': 'memo.mp3',
            'gradeLength': 8,
            'gradeMaxMatchItems': 3,
        },
    }

    return stg ? stagesSettings[stg] : stagesSettings;
}