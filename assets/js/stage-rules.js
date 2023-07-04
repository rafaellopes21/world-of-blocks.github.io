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
function playStage(stageNumber) {
    let stageConfig = getStageSettings(parseInt(stageNumber));

    stage.setLevelNumber(stageConfig['level']);
    stage.setThemeStageSong(stageConfig['stageTheme']);
    stage.setLevelDescription(stageConfig['description']);
    stage.setgridLength(stageConfig['gridLength']);
    stage.setMaxMatchItems(stageConfig['gridMaxMatchItems']);
    stage.setRefreshGameTime(stageConfig['refreshGameTime']);
    stage.setMaxTime(stageConfig['maxTime']);
    stage.setTotalItems(stageConfig['totalItems']);
    stage.setItemsToSelect(stageConfig['itemsToSelect']);

    stage.setFirstStarTime(stageConfig['achievements'][0]['firstStarTime']);
    stage.setFirstStarHits(stageConfig['achievements'][0]['firstStarHits']);
    stage.setFirstStarErrors(stageConfig['achievements'][0]['firstStarErrors']);

    stage.setSecondStarTime(stageConfig['achievements'][1]['secondStarTime']);
    stage.setSecondStarHits(stageConfig['achievements'][1]['secondStarHits']);
    stage.setSecondStarErrors(stageConfig['achievements'][1]['secondStarErrors']);

    stage.setThirdStarTime(stageConfig['achievements'][2]['thirdStarTime']);
    stage.setThirdStarHits(stageConfig['achievements'][2]['thirdStarHits']);
    stage.setThirdStarErrors(stageConfig['achievements'][2]['thirdStarErrors']);

    loadView('game/index');
}


function getStageSettings(stg = false) {
    let stagesSettings = [
        {   //Level Settings
            'level': 1, //Number of the stage level
            'stageTheme': 'memo.mp3', //soundtrack that will be played in background
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 8, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 60, //Limit time to finish the game
            'totalItems': 20, //false - The code will calc how many items should be selected or put any integer
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 10,
                    'firstStarHits': 10, //false - define that the play can't miss any square
                    'firstStarErrors': false, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 15,
                    'secondStarHits': 12, //false - define that the play can't miss any square
                    'secondStarErrors': false, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 20,
                    'thirdStarHits': 15, //false - define that the play can't miss any square
                    'thirdStarErrors': false, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            //'itemsToSelect': ["bg-danger", "bg-primary", "bg-dark", "bg-info", "bg-success", "bg-warning", "bg-secondary"],
            'itemsToSelect': ["bg-danger", "bg-primary", "bg-success", "bg-warning",],
        },
        {   //Level Settings
            'level': 2, //Number of the stage level
            'stageTheme': 'memo.mp3', //soundtrack that will be played in background
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 8, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 60, //Limit time to finish the game
            'totalItems': false, //false - The code will calc how many items should be selected or put any integer
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 15,
                    'firstStarHits': 10, //false - define that the play can't miss any square
                    'firstStarErrors': false, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 18,
                    'secondStarHits': 12, //false - define that the play can't miss any square
                    'secondStarErrors': false, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 20,
                    'thirdStarHits': 15, //false - define that the play can't miss any square
                    'thirdStarErrors': false, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': ["bg-danger", "bg-primary", "bg-dark", "bg-info", "bg-success", "bg-warning", "bg-secondary"],
        },
    ];

    return stg ? stagesSettings[stg - 1] : stagesSettings;
}