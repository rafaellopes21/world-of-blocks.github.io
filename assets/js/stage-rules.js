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
    stage.setStageColor(stageConfig['levelColor']);
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

//Create the World names for the stage levels
function worldNames(worldIndex = false){
    let worlds = [ //start by array = 1, not ZERO!
        'World of Colors',
        'Challanges',
    ];
    return worldIndex ? worlds[worldIndex - 1] : worlds;
}

//Create the itens to select for the stage levels
function getItemsToTheLevel(itemsInArray = []){
    let items = [ //start by array = 1, not ZERO!
        "bg-danger", "bg-primary", "bg-dark", "bg-info", "bg-success", "bg-warning", "bg-secondary",
    ];

    //make a look in the array itens to return
    if(itemsInArray && itemsInArray.length > 0){
        let returnArray = [];
        itemsInArray.forEach(i => { returnArray.push(items[i - 1]) });
        return returnArray;
    }

    return items;
}

function getStageSettings(stg = false) {
    let stagesSettings = [
        {   //Level Settings
            'level': 1, //Number of the stage level
            'world': worldNames(1), //Define the world name of the stage level
            'stageTheme': 'memo.mp3', //soundtrack that will be played in background
            'levelColor': false, //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 4, //Length of squares in grid
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
            'itemsToSelect': getItemsToTheLevel([1,2,5,6]),
        },
        {   //Level Settings
            'level': 2, //Number of the stage level
            'world': worldNames(1), //Define the world name of the stage level
            'stageTheme': 'memo.mp3', //soundtrack that will be played in background
            'levelColor': false, //False default | This is used to change the card color in level stage selection
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
            'itemsToSelect': getItemsToTheLevel(),
        },
        {   //Level Settings
            'level': 999, //Number of the stage level
            'world': worldNames(2), //Define the world name of the stage level
            'stageTheme': 'hard_puzzle.mp3', //soundtrack that will be played in background
            'levelColor': 'bg-card-red', //False default | This is used to change the card color in level stage selection
            'description': 'Do your best time and score in this mode!', //False - Let the code builed this description | simple Description about this level
            'gridLength': 10, //Length of squares in grid
            'gridMaxMatchItems': 10, //Number of how many match squares will be present at each roll
            'refreshGameTime': 4, //After X seconds, the game will refresh the grid
            'maxTime': 180, //Limit time to finish the game
            'totalItems': 250, //false - The code will calc how many items should be selected or put any integer
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 120,
                    'firstStarHits': 100, //false - define that the play can't miss any square
                    'firstStarErrors': 14, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 90,
                    'secondStarHits': 175, //false - define that the play can't miss any square
                    'secondStarErrors': 7, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 60,
                    'thirdStarHits': 250, //false - define that the play can't miss any square
                    'thirdStarErrors': false, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel(),
        },
    ];

    return stg ? stagesSettings[stagesSettings.findIndex((stage) => stage.level === stg)] : stagesSettings;
}