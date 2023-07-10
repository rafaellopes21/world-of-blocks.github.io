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
    stage.setPowers(stageConfig['powersEnable']);
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

    //Store last stage played by player
    if(stageNumber){
        PLAYER.setLastStagePlayed('#stage-level-'+stageNumber);
    }

    loadView('game/index');
}

//Create the World names for the stage levels
function worldNames(worldIndex = false){
    let worlds = [ //start by array = 1, not ZERO!
        'World of Colors',
        'Challenges',
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

//Create the stage songs for the stage levels
function stageSongs(songIndex = false){
    let songs = [ //start by array = 1, not ZERO!
        'memo.mp3',
        'hard_puzzle.mp3',
        'paradise.mp3',
        'boba-date.mp3',
        'funny.mp3',
    ];
    return songIndex ? songs[songIndex - 1] : songs;
}

//Create the stage colors for the stage levels
function stageColors(colorIndex = false){
    let colors = [ //start by array = 1, not ZERO!
        'bg-card-red',
        'bg-card-yellow',
        'bg-card-dark',
        'bg-card-white',
    ];
    return colorIndex ? colors[colorIndex - 1] : false;
}

//Create the stage icons for the stage levels
function stageIcons(iconsIndex = false){
    let icons = [ //start by array = 1, not ZERO!
        'fa-solid fa-palette',
        'fa-solid fa-trophy',
    ];
    return iconsIndex ? icons[iconsIndex - 1] : '';
}

function getStageSettings(stageNumber = false, stageIndex = 'level') {
    let stagesSettings = [
        {   //Level Settings
            'level': 1, //Number of the stage level
            'unlockWith': 0, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 4, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 45, //Limit time to finish the game
            'totalItems': 20, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 20,
                    'firstStarHits': 10, //false - define that the play can't miss any square
                    'firstStarErrors': false, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 25,
                    'secondStarHits': 12, //false - define that the play can't miss any square
                    'secondStarErrors': false, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 30,
                    'thirdStarHits': 15, //false - define that the play can't miss any square
                    'thirdStarErrors': false, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,5,6]),
        },
        {
            'level': 2,
            'unlockWith': 3,
            'world': worldNames(1),
            'stageIcon': stageIcons(1),
            'stageTheme': stageSongs(1),
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 5,
            'gridMaxMatchItems': 4,
            'refreshGameTime': 6,
            'maxTime': 60,
            'totalItems': false,
            'powersEnable': true,
            'achievements': [
                {
                    'firstStarTime': 40,
                    'firstStarHits': 15,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 50,
                    'secondStarHits': 18,
                    'secondStarErrors': false,
                },
                {
                    'thirdStarTime': 60,
                    'thirdStarHits': 20,
                    'thirdStarErrors': false,
                },
            ],
        },
        /*{   //Level Settings
            'level': 2, //Number of the stage level
            'unlockWith': 2, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(3), //soundtrack that will be played in background
            'levelColor': stageColors(), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 8, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 60, //Limit time to finish the game
            'totalItems': false, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 50,
                    'firstStarHits': 20, //false - define that the play can't miss any square
                    'firstStarErrors': false, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 45,
                    'secondStarHits': 35, //false - define that the play can't miss any square
                    'secondStarErrors': false, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 30,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': false, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel(),
        },*/
        {   //Level Settings
            'level': 999, //Number of the stage level
            'unlockWith': 0, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(2), //Define the world name of the stage level
            'stageIcon': stageIcons(2), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(2), //soundtrack that will be played in background
            'levelColor': stageColors(1), //False default | This is used to change the card color in level stage selection
            'description': 'Do your best time and score in this mode!', //False - Let the code builed this description | simple Description about this level
            'gridLength': 10, //Length of squares in grid
            'gridMaxMatchItems': 10, //Number of how many match squares will be present at each roll
            'refreshGameTime': 4, //After X seconds, the game will refresh the grid
            'maxTime': 180, //Limit time to finish the game
            'totalItems': 200, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 90,
                    'firstStarHits': 100, //false - define that the play can't miss any square
                    'firstStarErrors': 14, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 45,
                    'secondStarHits': 150, //false - define that the play can't miss any square
                    'secondStarErrors': 7, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 10,
                    'thirdStarHits': 200, //false - define that the play can't miss any square
                    'thirdStarErrors': false, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel(),
        },
    ];

    return stageNumber ? stagesSettings[stagesSettings.findIndex((stage) => stage[stageIndex] === stageNumber)] : stagesSettings;
}