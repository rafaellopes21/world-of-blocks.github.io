function getAllLevels(){
    /*{   //Level Settings
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
        },*/
    return [
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
            'gridMaxMatchItems': 3,
            'refreshGameTime': 5,
            'maxTime': 20,
            'totalItems': 25,
            'powersEnable': false,
            'achievements': [
                {
                    'firstStarTime': 15,
                    'firstStarHits': 6,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 10,
                    'secondStarHits': 13,
                    'secondStarErrors': false,
                },
                {
                    'thirdStarTime': 5,
                    'thirdStarHits': 21,
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
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 11,
                    'firstStarHits': 3, //false - define that the play can't miss any square
                    'firstStarErrors': false, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 9,
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
            'unlockWith': 7,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(), //False default | This is used to change the card color in level stage selection
            'description': false,
            'gridLength': 5,
            'gridMaxMatchItems': 4,
            'refreshGameTime': 5,
            'maxTime': 15,
            'totalItems': 25,
            'powersEnable': false,
            'achievements': [
                {
                    'firstStarTime': 12,
                    'firstStarHits': 5,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 9,
                    'secondStarHits': 12,
                    'secondStarErrors': false,
                },
                {
                    'thirdStarTime': 5,
                    'thirdStarHits': 20,
                    'thirdStarErrors': false,
                },
            ],
            'itemsToSelect': getItemsToTheLevel(),
        },
        {   //Level Settings
            'level': 5,
            'unlockWith': 10,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(), //False default | This is used to change the card color in level stage selection
            'description': false,
            'gridLength': 5,
            'gridMaxMatchItems': 4,
            'refreshGameTime': 5,
            'maxTime': 20,
            'totalItems': 20,
            'powersEnable': false,
            'achievements': [
                {
                    'firstStarTime': 16,
                    'firstStarHits': 5,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 12,
                    'secondStarHits': 10,
                    'secondStarErrors': false,
                },
                {
                    'thirdStarTime': 7,
                    'thirdStarHits': false,
                    'thirdStarErrors': false,
                },
            ],
            'itemsToSelect': getItemsToTheLevel([1,5,2,6,7]),
        },
        {   //Level Settings
            'level': 6,
            'unlockWith': 13,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 5,
            'gridMaxMatchItems': 5,
            'refreshGameTime': 5,
            'maxTime': 25,
            'totalItems': 30,
            'powersEnable': false,
            'achievements': [
                {
                    'firstStarTime': 20,
                    'firstStarHits': 6,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 15,
                    'secondStarHits': 15,
                    'secondStarErrors': false,
                },
                {
                    'thirdStarTime': 10,
                    'thirdStarHits': 25,
                    'thirdStarErrors': 2,
                },
            ],
            'itemsToSelect': getItemsToTheLevel(),
        },
        {   //Level Settings
            'level': 7,
            'unlockWith': 16,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 6,
            'gridMaxMatchItems': 4,
            'refreshGameTime': 5,
            'maxTime': 30,
            'totalItems': 35,
            'powersEnable': false,
            'achievements': [
                {
                    'firstStarTime': 22,
                    'firstStarHits': 8,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 18,
                    'secondStarHits': 18,
                    'secondStarErrors': false,
                },
                {
                    'thirdStarTime': 12,
                    'thirdStarHits': false,
                    'thirdStarErrors': 2,
                },
            ],
            'itemsToSelect': getItemsToTheLevel(),
        },
        {   //Level Settings
            'level': 8,
            'unlockWith': 19,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 6,
            'gridMaxMatchItems': 4,
            'refreshGameTime': 5,
            'maxTime': 30,
            'totalItems': 35,
            'powersEnable': false,
            'achievements': [
                {
                    'firstStarTime': 22,
                    'firstStarHits': 9,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 17,
                    'secondStarHits': 16,
                    'secondStarErrors': 3,
                },
                {
                    'thirdStarTime': 8,
                    'thirdStarHits': false,
                    'thirdStarErrors': 2,
                },
            ],
            'itemsToSelect': getItemsToTheLevel(),
        },
        {   //Level Settings
            'level': 9,
            'unlockWith': 21,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 6,
            'gridMaxMatchItems': 3,
            'refreshGameTime': 5,
            'maxTime': 35,
            'totalItems': 40,
            'powersEnable': false,
            'achievements': [
                {
                    'firstStarTime': 22,
                    'firstStarHits': 10,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 15,
                    'secondStarHits': 20,
                    'secondStarErrors': 8,
                },
                {
                    'thirdStarTime': 5,
                    'thirdStarHits': false,
                    'thirdStarErrors': 4,
                },
            ],
            'itemsToSelect': getItemsToTheLevel(),
        },
        {   //Level Settings
            'level': 10,
            'unlockWith': 23,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 7,
            'gridMaxMatchItems': 4,
            'refreshGameTime': 5,
            'maxTime': 35,
            'totalItems': 42,
            'powersEnable': false,
            'achievements': [
                {
                    'firstStarTime': 23,
                    'firstStarHits': 11,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 19,
                    'secondStarHits': 22,
                    'secondStarErrors': 7,
                },
                {
                    'thirdStarTime': 13,
                    'thirdStarHits': false,
                    'thirdStarErrors': 2,
                },
            ],
            'itemsToSelect': getItemsToTheLevel(),
        },
        {   //Level Settings
            'level': 11,
            'unlockWith': 28,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 7,
            'gridMaxMatchItems': 5,
            'refreshGameTime': 5,
            'maxTime': 45,
            'totalItems': 50,
            'powersEnable': false,
            'achievements': [
                {
                    'firstStarTime': 35,
                    'firstStarHits': 15,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 28,
                    'secondStarHits': 25,
                    'secondStarErrors': 6,
                },
                {
                    'thirdStarTime': 15,
                    'thirdStarHits': false,
                    'thirdStarErrors': 4,
                },
            ],
            'itemsToSelect': getItemsToTheLevel(),
        },
        {   //Level Settings
            'level': 12,
            'unlockWith': 30,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 7,
            'gridMaxMatchItems': 3,
            'refreshGameTime': 5,
            'maxTime': 30,
            'totalItems': 40,
            'powersEnable': false,
            'achievements': [
                {
                    'firstStarTime': 20,
                    'firstStarHits': 10,
                    'firstStarErrors': 3,
                },
                {
                    'secondStarTime': 10,
                    'secondStarHits': 23,
                    'secondStarErrors': 5,
                },
                {
                    'thirdStarTime': 5,
                    'thirdStarHits': false,
                    'thirdStarErrors': 3,
                },
            ],
            'itemsToSelect': getItemsToTheLevel([3, 4, 6, 7, 1, 2]),
        },
        {   //Level Settings
            'level': 13,
            'unlockWith': 32,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 8,
            'gridMaxMatchItems': 2,
            'refreshGameTime': 5,
            'maxTime': 30,
            'totalItems': 30,
            'powersEnable': true,
            'achievements': [
                {
                    'firstStarTime': 15,
                    'firstStarHits': 12,
                    'firstStarErrors': 4,
                },
                {
                    'secondStarTime': 10,
                    'secondStarHits': 18,
                    'secondStarErrors': 3,
                },
                {
                    'thirdStarTime': 5,
                    'thirdStarHits': false,
                    'thirdStarErrors': 2,
                },
            ],
            'itemsToSelect': getItemsToTheLevel(),
        },
        {   //Level Settings
            'level': 14,
            'unlockWith': 38,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 8,
            'gridMaxMatchItems': 3,
            'refreshGameTime': 5,
            'maxTime': 10,
            'totalItems': 50,
            'powersEnable': true,
            'achievements': [
                {
                    'firstStarTime': 31,
                    'firstStarHits': 15,
                    'firstStarErrors': false,
                },
                {
                    'secondStarTime': 19,
                    'secondStarHits': 25,
                    'secondStarErrors': 8,
                },
                {
                    'thirdStarTime': 7,
                    'thirdStarHits': false,
                    'thirdStarErrors': 2,
                },
            ],
            'itemsToSelect': getItemsToTheLevel(),
        },
        {  //Level Settings
            'level': 15,
            'unlockWith': 41,
            'world': worldNames(1), //Define the world name of the stage level
            'stageIcon': stageIcons(1), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(1), //soundtrack that will be played in background
            'levelColor': stageColors(),
            'description': false,
            'gridLength': 8,
            'gridMaxMatchItems': 8,
            'refreshGameTime': 5,
            'maxTime': 25,
            'totalItems': 50,
            'powersEnable': true,
            'achievements': [
                {
                    'firstStarTime': 10,
                    'firstStarHits': 20,
                    'firstStarErrors': 8,
                },
                {
                    'secondStarTime': 6,
                    'secondStarHits': 35,
                    'secondStarErrors': 6,
                },
                {
                    'thirdStarTime': 2,
                    'thirdStarHits': false,
                    'thirdStarErrors': 0,
                },
            ],
            'itemsToSelect': getItemsToTheLevel(),
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
}