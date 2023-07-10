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
            'maxTime': 20, //Limit time to finish the game
            'totalItems': 20, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 10,
                    'firstStarHits': 10, //false - define that the play can't miss any square
                    'firstStarErrors': false, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 7,
                    'secondStarHits': 12, //false - define that the play can't miss any square
                    'secondStarErrors': false, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 5,
                    'thirdStarHits': 15, //false - define that the play can't miss any square
                    'thirdStarErrors': false, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,5,6]),
        },
        {
            'level': 2,
            'unlockWith': 2,
            'world': worldNames(1),
            'stageIcon': stageIcons(1),
            'stageTheme': stageSongs(1),
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 4,
            'gridMaxMatchItems': 4,
            'refreshGameTime': 5,
            'maxTime': 25,
            'totalItems': 25,
            'powersEnable': true,
            'achievements': [
                {
                    'firstStarTime': 20,
                    'firstStarHits': 5,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 15,
                    'secondStarHits': 12,
                    'secondStarErrors': false,
                },
                {
                    'thirdStarTime': 10,
                    'thirdStarHits': 18,
                    'thirdStarErrors': false,
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4]),
        },
        {   //Level Settings
            'level': 3, //Number of the stage level
            'unlockWith': 4, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 4, //Length of squares in grid
            'gridMaxMatchItems': 2, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 15, //Limit time to finish the game
            'totalItems': 10, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 11,
                    'firstStarHits': 3, //false - define that the play can't miss any square
                    'firstStarErrors': false, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 8,
                    'secondStarHits': 6, //false - define that the play can't miss any square
                    'secondStarErrors': false, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 4,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': false, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel(),
        },
        {   //Level Settings
            'level': 4,
            'unlockWith': 6,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(), //False default | This is used to change the card color in level stage selection
            'description': false,
            'gridLength': 5,
            'gridMaxMatchItems': 6,
            'refreshGameTime': 6,
            'maxTime': 35,
            'totalItems': 15,
            'powersEnable': true,
            'achievements': [
                {
                    'firstStarTime': 20,
                    'firstStarHits': 5,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 15,
                    'secondStarHits': 8,
                    'secondStarErrors': false,
                },
                {
                    'thirdStarTime': 10,
                    'thirdStarHits': false,
                    'thirdStarErrors': false,
                },
            ],
            'itemsToSelect': getItemsToTheLevel(),
        },
        {   //Level Settings
            'level': 5,
            'unlockWith': 8,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(), //False default | This is used to change the card color in level stage selection
            'description': false,
            'gridLength': 5,
            'gridMaxMatchItems': 5,
            'refreshGameTime': 6,
            'maxTime': 30,
            'totalItems': 18,
            'powersEnable': true,
            'achievements': [
                {
                    'firstStarTime': 18,
                    'firstStarHits': 7,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 15,
                    'secondStarHits': 10,
                    'secondStarErrors': false,
                },
                {
                    'thirdStarTime': 12,
                    'thirdStarHits': false,
                    'thirdStarErrors': false,
                },
            ],
            'itemsToSelect': getItemsToTheLevel(),
        },
        {   //Level Settings
            'level': 6,
            'unlockWith': 10,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 5,
            'gridMaxMatchItems': 6,
            'refreshGameTime': 6,
            'maxTime': 25,
            'totalItems': 20,
            'powersEnable': true,
            'achievements': [
                {
                    'firstStarTime': 16,
                    'firstStarHits': 8,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 12,
                    'secondStarHits': 12,
                    'secondStarErrors': false,
                },
                {
                    'thirdStarTime': 10,
                    'thirdStarHits': false,
                    'thirdStarErrors': false,
                },
            ],
            'itemsToSelect': getItemsToTheLevel(),
        },
        {   //Level Settings
            'level': 7,
            'unlockWith': 12,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 5,
            'gridMaxMatchItems': 6,
            'refreshGameTime': 6,
            'maxTime': 25,
            'totalItems': 22,
            'powersEnable': true,
            'achievements': [
                {
                    'firstStarTime': 15,
                    'firstStarHits': 8,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 12,
                    'secondStarHits': 12,
                    'secondStarErrors': false,
                },
                {
                    'thirdStarTime': 10,
                    'thirdStarHits': false,
                    'thirdStarErrors': false,
                },
            ],
            'itemsToSelect': getItemsToTheLevel(),
        },
        {   //Level Settings
            'level': 8,
            'unlockWith': 14,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 6,
            'gridMaxMatchItems': 7,
            'refreshGameTime': 6,
            'maxTime': 25,
            'totalItems': 24,
            'powersEnable': true,
            'achievements': [
                {
                    'firstStarTime': 14,
                    'firstStarHits': 10,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 11,
                    'secondStarHits': 14,
                    'secondStarErrors': false,
                },
                {
                    'thirdStarTime': 9,
                    'thirdStarHits': false,
                    'thirdStarErrors': false,
                },
            ],
            'itemsToSelect': getItemsToTheLevel(),
        },
        {   //Level Settings
            'level': 9,
            'unlockWith': 16,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 6,
            'gridMaxMatchItems': 6,
            'refreshGameTime': 6,
            'maxTime': 25,
            'totalItems': 26,
            'powersEnable': true,
            'achievements': [
                {
                    'firstStarTime': 13,
                    'firstStarHits': 12,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 10,
                    'secondStarHits': 16,
                    'secondStarErrors': false,
                },
                {
                    'thirdStarTime': 8,
                    'thirdStarHits': false,
                    'thirdStarErrors': false,
                },
            ],
            'itemsToSelect': getItemsToTheLevel(),
        },
        {   //Level Settings
            'level': 10,
            'unlockWith': 18,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 6,
            'gridMaxMatchItems': 7,
            'refreshGameTime': 6,
            'maxTime': 25,
            'totalItems': 28,
            'powersEnable': true,
            'achievements': [
                {
                    'firstStarTime': 12,
                    'firstStarHits': 14,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 9,
                    'secondStarHits': 18,
                    'secondStarErrors': false,
                },
                {
                    'thirdStarTime': 7,
                    'thirdStarHits': false,
                    'thirdStarErrors': false,
                },
            ],
            'itemsToSelect': getItemsToTheLevel(),
        },
        {   //Level Settings
            'level': 11,
            'unlockWith': 20,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 6,
            'gridMaxMatchItems': 4,
            'refreshGameTime': 6,
            'maxTime': 90,
            'totalItems': 36,
            'powersEnable': true,
            'achievements': [
                {
                    'firstStarTime': 60,
                    'firstStarHits': 15,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 45,
                    'secondStarHits': 20,
                    'secondStarErrors': false,
                },
                {
                    'thirdStarTime': 30,
                    'thirdStarHits': 25,
                    'thirdStarErrors': false,
                },
            ],
            'itemsToSelect': getItemsToTheLevel([1, 2, 4, 7, 8, 9, 11]),
        },
        {   //Level Settings
            'level': 12,
            'unlockWith': 22,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 6,
            'gridMaxMatchItems': 5,
            'refreshGameTime': 5,
            'maxTime': 80,
            'totalItems': 30,
            'powersEnable': true,
            'achievements': [
                {
                    'firstStarTime': 50,
                    'firstStarHits': 12,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 40,
                    'secondStarHits': 16,
                    'secondStarErrors': false,
                },
                {
                    'thirdStarTime': 30,
                    'thirdStarHits': 20,
                    'thirdStarErrors': false,
                },
            ],
            'itemsToSelect': getItemsToTheLevel([3, 4, 6, 7, 10, 12]),
        },
        {   //Level Settings
            'level': 13,
            'unlockWith': 24,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 6,
            'gridMaxMatchItems': 6,
            'refreshGameTime': 5,
            'maxTime': 70,
            'totalItems': 40,
            'powersEnable': true,
            'achievements': [
                {
                    'firstStarTime': 45,
                    'firstStarHits': 10,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 35,
                    'secondStarHits': 14,
                    'secondStarErrors': false,
                },
                {
                    'thirdStarTime': 25,
                    'thirdStarHits': 18,
                    'thirdStarErrors': false,
                },
            ],
            'itemsToSelect': getItemsToTheLevel([2, 3, 5, 8, 11, 13, 14]),
        },
        {   //Level Settings
            'level': 14,
            'unlockWith': 26,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 6,
            'gridMaxMatchItems': 5,
            'refreshGameTime': 4,
            'maxTime': 60,
            'totalItems': 35,
            'powersEnable': true,
            'achievements': [
                {
                    'firstStarTime': 40,
                    'firstStarHits': 8,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 30,
                    'secondStarHits': 12,
                    'secondStarErrors': false,
                },
                {
                    'thirdStarTime': 20,
                    'thirdStarHits': 16,
                    'thirdStarErrors': false,
                },
            ],
            'itemsToSelect': getItemsToTheLevel([1, 3, 6, 9, 11, 12, 15]),
        },
        {  //Level Settings
            'level': 15,
            'unlockWith': 28,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 6,
            'gridMaxMatchItems': 6,
            'refreshGameTime': 4,
            'maxTime': 50,
            'totalItems': 35,
            'powersEnable': true,
            'achievements': [
                {
                    'firstStarTime': 40,
                    'firstStarHits': 8,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 30,
                    'secondStarHits': 12,
                    'secondStarErrors': false,
                },
                {
                    'thirdStarTime': 20,
                    'thirdStarHits': 16,
                    'thirdStarErrors': false,
                },
            ],
            'itemsToSelect': getItemsToTheLevel([1, 3, 6, 9, 11, 12, 15]),
        },
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