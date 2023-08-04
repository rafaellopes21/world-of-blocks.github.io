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
        //World Of Colors
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
            'maxTime': 40,
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

        //World Of Snow
        {   //Level Settings
            'level': 16, //Number of the stage level
            'unlockWith': 44, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(2), //Define the world name of the stage level
            'stageIcon': stageIcons(2), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(2), //soundtrack that will be played in background
            'levelColor': stageColors(2), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 5, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 15, //Limit time to finish the game
            'totalItems': 20, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 8,
                    'firstStarHits': 10, //false - define that the play can't miss any square
                    'firstStarErrors': false, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 5,
                    'secondStarHits': 13, //false - define that the play can't miss any square
                    'secondStarErrors': false, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 3,
                    'thirdStarHits': 17, //false - define that the play can't miss any square
                    'thirdStarErrors': false, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,3,6,7], 2),
        },
        {   //Level Settings
            'level': 17, //Number of the stage level
            'unlockWith': 47, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(2), //Define the world name of the stage level
            'stageIcon': stageIcons(2), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(2), //soundtrack that will be played in background
            'levelColor': stageColors(2), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 4, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 22, //Limit time to finish the game
            'totalItems': 23, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 12,
                    'firstStarHits': 8, //false - define that the play can't miss any square
                    'firstStarErrors': false, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 8,
                    'secondStarHits': 12, //false - define that the play can't miss any square
                    'secondStarErrors': false, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 4,
                    'thirdStarHits': 20, //false - define that the play can't miss any square
                    'thirdStarErrors': false, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,3,6,7], 2),
        },
        {   //Level Settings
            'level': 18, //Number of the stage level
            'unlockWith': 50, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(2), //Define the world name of the stage level
            'stageIcon': stageIcons(2), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(2), //soundtrack that will be played in background
            'levelColor': stageColors(2), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 4, //Length of squares in grid
            'gridMaxMatchItems': 3, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 35, //Limit time to finish the game
            'totalItems': 42, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 25,
                    'firstStarHits': 25, //false - define that the play can't miss any square
                    'firstStarErrors': 7, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 18,
                    'secondStarHits': 35, //false - define that the play can't miss any square
                    'secondStarErrors': 5, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 12,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 3, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([3,4,5,2], 2),
        },
        {   //Level Settings
            'level': 19, //Number of the stage level
            'unlockWith': 52, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(2), //Define the world name of the stage level
            'stageIcon': stageIcons(2), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(2), //soundtrack that will be played in background
            'levelColor': stageColors(2), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 5, //Length of squares in grid
            'gridMaxMatchItems': 3, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 38, //Limit time to finish the game
            'totalItems': 45, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 25,
                    'firstStarHits': 15, //false - define that the play can't miss any square
                    'firstStarErrors': 5, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 15,
                    'secondStarHits': 30, //false - define that the play can't miss any square
                    'secondStarErrors': 3, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 12,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 1, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5], 2),
        },
        {   //Level Settings
            'level': 20, //Number of the stage level
            'unlockWith': 55, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(2), //Define the world name of the stage level
            'stageIcon': stageIcons(2), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(2), //soundtrack that will be played in background
            'levelColor': stageColors(2), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 5, //Length of squares in grid
            'gridMaxMatchItems': 4, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 45, //Limit time to finish the game
            'totalItems': 52, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 36,
                    'firstStarHits': 12, //false - define that the play can't miss any square
                    'firstStarErrors': 6, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 24,
                    'secondStarHits': 30, //false - define that the play can't miss any square
                    'secondStarErrors': 4, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 10,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 2, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5], 2),
        },
        {   //Level Settings
            'level': 21, //Number of the stage level
            'unlockWith': 58, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(2), //Define the world name of the stage level
            'stageIcon': stageIcons(2), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(2), //soundtrack that will be played in background
            'levelColor': stageColors(2), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 5, //Length of squares in grid
            'gridMaxMatchItems': 4, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 40, //Limit time to finish the game
            'totalItems': 50, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 30,
                    'firstStarHits': 15, //false - define that the play can't miss any square
                    'firstStarErrors': 5, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 20,
                    'secondStarHits': 30, //false - define that the play can't miss any square
                    'secondStarErrors': 2, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 10,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 1, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 2),
        },
        {   //Level Settings
            'level': 22, //Number of the stage level
            'unlockWith': 60, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(2), //Define the world name of the stage level
            'stageIcon': stageIcons(2), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(2), //soundtrack that will be played in background
            'levelColor': stageColors(2), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 6, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 60, //Limit time to finish the game
            'totalItems': 75, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 45,
                    'firstStarHits': 25, //false - define that the play can't miss any square
                    'firstStarErrors': 7, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 30,
                    'secondStarHits': 50, //false - define that the play can't miss any square
                    'secondStarErrors': 5, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 15,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 2, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 2),
        },
        {   //Level Settings
            'level': 23, //Number of the stage level
            'unlockWith': 62, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(2), //Define the world name of the stage level
            'stageIcon': stageIcons(2), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(2), //soundtrack that will be played in background
            'levelColor': stageColors(2), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 6, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 55, //Limit time to finish the game
            'totalItems': 70, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 45,
                    'firstStarHits': 23, //false - define that the play can't miss any square
                    'firstStarErrors': 6, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 30,
                    'secondStarHits': 48, //false - define that the play can't miss any square
                    'secondStarErrors': 4, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 15,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 2, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 2),
        },
        {   //Level Settings
            'level': 24, //Number of the stage level
            'unlockWith': 64, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(2), //Define the world name of the stage level
            'stageIcon': stageIcons(2), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(2), //soundtrack that will be played in background
            'levelColor': stageColors(2), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 7, //Length of squares in grid
            'gridMaxMatchItems': 4, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 50, //Limit time to finish the game
            'totalItems': 50, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 40,
                    'firstStarHits': 12, //false - define that the play can't miss any square
                    'firstStarErrors': 5, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 25,
                    'secondStarHits': 32, //false - define that the play can't miss any square
                    'secondStarErrors': 4, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 8,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 1, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 2),
        },
        {   //Level Settings
            'level': 25, //Number of the stage level
            'unlockWith': 68, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(2), //Define the world name of the stage level
            'stageIcon': stageIcons(2), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(2), //soundtrack that will be played in background
            'levelColor': stageColors(2), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 7, //Length of squares in grid
            'gridMaxMatchItems': 4, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 45, //Limit time to finish the game
            'totalItems': 50, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 37,
                    'firstStarHits': 12, //false - define that the play can't miss any square
                    'firstStarErrors': 4, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 21,
                    'secondStarHits': 32, //false - define that the play can't miss any square
                    'secondStarErrors': 3, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 8,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 1, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 2),
        },
        {   //Level Settings
            'level': 26, //Number of the stage level
            'unlockWith': 71, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(2), //Define the world name of the stage level
            'stageIcon': stageIcons(2), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(2), //soundtrack that will be played in background
            'levelColor': stageColors(2), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 8, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 75, //Limit time to finish the game
            'totalItems': 100, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 60,
                    'firstStarHits': 20, //false - define that the play can't miss any square
                    'firstStarErrors': 4, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 30,
                    'secondStarHits': 60, //false - define that the play can't miss any square
                    'secondStarErrors': 3, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 10,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 2),
        },
        {   //Level Settings
            'level': 27, //Number of the stage level
            'unlockWith': 73, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(2), //Define the world name of the stage level
            'stageIcon': stageIcons(2), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(2), //soundtrack that will be played in background
            'levelColor': stageColors(2), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 8, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 70, //Limit time to finish the game
            'totalItems': 95, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 58,
                    'firstStarHits': 23, //false - define that the play can't miss any square
                    'firstStarErrors': 6, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 27,
                    'secondStarHits': 62, //false - define that the play can't miss any square
                    'secondStarErrors': 4, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 12,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 2),
        },
        {   //Level Settings
            'level': 28, //Number of the stage level
            'unlockWith': 75, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(2), //Define the world name of the stage level
            'stageIcon': stageIcons(2), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(2), //soundtrack that will be played in background
            'levelColor': stageColors(2), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 8, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 75, //Limit time to finish the game
            'totalItems': 100, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 55,
                    'firstStarHits': 30, //false - define that the play can't miss any square
                    'firstStarErrors': 4, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 35,
                    'secondStarHits': 60, //false - define that the play can't miss any square
                    'secondStarErrors': 4, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 10,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 1, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 2),
        },
        {   //Level Settings
            'level': 29, //Number of the stage level
            'unlockWith': 78, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(2), //Define the world name of the stage level
            'stageIcon': stageIcons(2), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(2), //soundtrack that will be played in background
            'levelColor': stageColors(2), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 8, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 80, //Limit time to finish the game
            'totalItems': 110, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 60,
                    'firstStarHits': 32, //false - define that the play can't miss any square
                    'firstStarErrors': 8, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 37,
                    'secondStarHits': 75, //false - define that the play can't miss any square
                    'secondStarErrors': 6, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 11,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 2, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 2),
        },
        {   //Level Settings
            'level': 30, //Number of the stage level
            'unlockWith': 81, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(2), //Define the world name of the stage level
            'stageIcon': stageIcons(2), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(2), //soundtrack that will be played in background
            'levelColor': stageColors(2), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 7, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 60, //Limit time to finish the game
            'totalItems': 60, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 40,
                    'firstStarHits': 20, //false - define that the play can't miss any square
                    'firstStarErrors': 4, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 20,
                    'secondStarHits': 40, //false - define that the play can't miss any square
                    'secondStarErrors': 6, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 5,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 2),
        },

        //World Of Water
        {   //Level Settings
            'level': 31, //Number of the stage level
            'unlockWith': 87, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(3), //Define the world name of the stage level
            'stageIcon': stageIcons(3), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(3), //soundtrack that will be played in background
            'levelColor': stageColors(3), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 5, //Length of squares in grid
            'gridMaxMatchItems': 2, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 50, //Limit time to finish the game
            'totalItems': 45, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 40,
                    'firstStarHits': 8, //false - define that the play can't miss any square
                    'firstStarErrors': 8, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 20,
                    'secondStarHits': 32, //false - define that the play can't miss any square
                    'secondStarErrors': 5, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 6,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 3, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 3),
        },
        {   //Level Settings
            'level': 32, //Number of the stage level
            'unlockWith': 89, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(3), //Define the world name of the stage level
            'stageIcon': stageIcons(3), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(3), //soundtrack that will be played in background
            'levelColor': stageColors(3), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 5, //Length of squares in grid
            'gridMaxMatchItems': 2, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 60, //Limit time to finish the game
            'totalItems': 40, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 45,
                    'firstStarHits': 10, //false - define that the play can't miss any square
                    'firstStarErrors': 6, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 30,
                    'secondStarHits': 25, //false - define that the play can't miss any square
                    'secondStarErrors': 6, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 10,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 6, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 3),
        },
        {   //Level Settings
            'level': 33, //Number of the stage level
            'unlockWith': 92, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(3), //Define the world name of the stage level
            'stageIcon': stageIcons(3), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(3), //soundtrack that will be played in background
            'levelColor': stageColors(3), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 5, //Length of squares in grid
            'gridMaxMatchItems': 3, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 50, //Limit time to finish the game
            'totalItems': 60, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 35,
                    'firstStarHits': 20, //false - define that the play can't miss any square
                    'firstStarErrors': 5, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 22,
                    'secondStarHits': 40, //false - define that the play can't miss any square
                    'secondStarErrors': 3, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 15,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 2, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 3),
        },
        {   //Level Settings
            'level': 34, //Number of the stage level
            'unlockWith': 94, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(3), //Define the world name of the stage level
            'stageIcon': stageIcons(3), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(3), //soundtrack that will be played in background
            'levelColor': stageColors(3), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 6, //Length of squares in grid
            'gridMaxMatchItems': 4, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 40, //Limit time to finish the game
            'totalItems': 70, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 27,
                    'firstStarHits': 25, //false - define that the play can't miss any square
                    'firstStarErrors': 4, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 15,
                    'secondStarHits': 50, //false - define that the play can't miss any square
                    'secondStarErrors': 3, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 3,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': false, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 3),
        },
        {   //Level Settings
            'level': 35, //Number of the stage level
            'unlockWith': 97, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(3), //Define the world name of the stage level
            'stageIcon': stageIcons(3), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(3), //soundtrack that will be played in background
            'levelColor': stageColors(3), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 6, //Length of squares in grid
            'gridMaxMatchItems': 6, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 80, //Limit time to finish the game
            'totalItems': 120, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 60,
                    'firstStarHits': 30, //false - define that the play can't miss any square
                    'firstStarErrors': 3, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 30,
                    'secondStarHits': 80, //false - define that the play can't miss any square
                    'secondStarErrors': 5, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 5,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 2, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 3),
        },
        {   //Level Settings
            'level': 36, //Number of the stage level
            'unlockWith': 100, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(3), //Define the world name of the stage level
            'stageIcon': stageIcons(3), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(3), //soundtrack that will be played in background
            'levelColor': stageColors(3), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 6, //Length of squares in grid
            'gridMaxMatchItems': 4, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 75, //Limit time to finish the game
            'totalItems': 120, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 60,
                    'firstStarHits': 30, //false - define that the play can't miss any square
                    'firstStarErrors': 6, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 30,
                    'secondStarHits': 80, //false - define that the play can't miss any square
                    'secondStarErrors': 4, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 5,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 2, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 3),
        },
        {   //Level Settings
            'level': 37, //Number of the stage level
            'unlockWith': 101, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(3), //Define the world name of the stage level
            'stageIcon': stageIcons(3), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(3), //soundtrack that will be played in background
            'levelColor': stageColors(3), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 7, //Length of squares in grid
            'gridMaxMatchItems': 4, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 90, //Limit time to finish the game
            'totalItems': 150, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 70,
                    'firstStarHits': 40, //false - define that the play can't miss any square
                    'firstStarErrors': 7, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 30,
                    'secondStarHits': 90, //false - define that the play can't miss any square
                    'secondStarErrors': 4, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 2,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 1, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 3),
        },
        {   //Level Settings
            'level': 38, //Number of the stage level
            'unlockWith': 103, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(3), //Define the world name of the stage level
            'stageIcon': stageIcons(3), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(3), //soundtrack that will be played in background
            'levelColor': stageColors(3), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 7, //Length of squares in grid
            'gridMaxMatchItems': 4, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 60, //Limit time to finish the game
            'totalItems': 72, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 45,
                    'firstStarHits': 22, //false - define that the play can't miss any square
                    'firstStarErrors': 6, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 26,
                    'secondStarHits': 48, //false - define that the play can't miss any square
                    'secondStarErrors': 3, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 4,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 3),
        },
        {   //Level Settings
            'level': 39, //Number of the stage level
            'unlockWith': 106, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(3), //Define the world name of the stage level
            'stageIcon': stageIcons(3), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(3), //soundtrack that will be played in background
            'levelColor': stageColors(3), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 7, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 85, //Limit time to finish the game
            'totalItems': 110, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 65,
                    'firstStarHits': 35, //false - define that the play can't miss any square
                    'firstStarErrors': 5, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 20,
                    'secondStarHits': 80, //false - define that the play can't miss any square
                    'secondStarErrors': 3, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 5,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 3),
        },
        {   //Level Settings
            'level': 40, //Number of the stage level
            'unlockWith': 109, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(3), //Define the world name of the stage level
            'stageIcon': stageIcons(3), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(3), //soundtrack that will be played in background
            'levelColor': stageColors(3), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 8, //Length of squares in grid
            'gridMaxMatchItems': 6, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 90, //Limit time to finish the game
            'totalItems': 130, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 60,
                    'firstStarHits': 30, //false - define that the play can't miss any square
                    'firstStarErrors': 7, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 20,
                    'secondStarHits': 100, //false - define that the play can't miss any square
                    'secondStarErrors': 5, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 10,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 2, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 3),
        },
        {   //Level Settings
            'level': 41, //Number of the stage level
            'unlockWith': 111, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(3), //Define the world name of the stage level
            'stageIcon': stageIcons(3), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(3), //soundtrack that will be played in background
            'levelColor': stageColors(3), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 8, //Length of squares in grid
            'gridMaxMatchItems': 6, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 60, //Limit time to finish the game
            'totalItems': 80, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 30,
                    'firstStarHits': 40, //false - define that the play can't miss any square
                    'firstStarErrors': 5, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 20,
                    'secondStarHits': 60, //false - define that the play can't miss any square
                    'secondStarErrors': 3, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 5,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 3),
        },
        {   //Level Settings
            'level': 42, //Number of the stage level
            'unlockWith': 113, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(3), //Define the world name of the stage level
            'stageIcon': stageIcons(3), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(3), //soundtrack that will be played in background
            'levelColor': stageColors(3), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 8, //Length of squares in grid
            'gridMaxMatchItems': 4, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 70, //Limit time to finish the game
            'totalItems': 80, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 45,
                    'firstStarHits': 30, //false - define that the play can't miss any square
                    'firstStarErrors': 4, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 25,
                    'secondStarHits': 60, //false - define that the play can't miss any square
                    'secondStarErrors': 2, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 15,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 3),
        },
        {   //Level Settings
            'level': 43, //Number of the stage level
            'unlockWith': 116, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(3), //Define the world name of the stage level
            'stageIcon': stageIcons(3), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(3), //soundtrack that will be played in background
            'levelColor': stageColors(3), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 8, //Length of squares in grid
            'gridMaxMatchItems': 3, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 80, //Limit time to finish the game
            'totalItems': 80, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 40,
                    'firstStarHits': 30, //false - define that the play can't miss any square
                    'firstStarErrors': 3, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 20,
                    'secondStarHits': 62, //false - define that the play can't miss any square
                    'secondStarErrors': 1, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 10,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 3),
        },
        {   //Level Settings
            'level': 44, //Number of the stage level
            'unlockWith': 121, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(3), //Define the world name of the stage level
            'stageIcon': stageIcons(3), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(3), //soundtrack that will be played in background
            'levelColor': stageColors(3), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 8, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 90, //Limit time to finish the game
            'totalItems': 140, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 60,
                    'firstStarHits': 40, //false - define that the play can't miss any square
                    'firstStarErrors': 5, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 35,
                    'secondStarHits': 95, //false - define that the play can't miss any square
                    'secondStarErrors': 3, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 12,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 1, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 3),
        },
        {   //Level Settings
            'level': 45, //Number of the stage level
            'unlockWith': 128, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(3), //Define the world name of the stage level
            'stageIcon': stageIcons(3), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(3), //soundtrack that will be played in background
            'levelColor': stageColors(3), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 9, //Length of squares in grid
            'gridMaxMatchItems': 6, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 50, //Limit time to finish the game
            'totalItems': 100, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 38,
                    'firstStarHits': 35, //false - define that the play can't miss any square
                    'firstStarErrors': 4, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 22,
                    'secondStarHits': 70, //false - define that the play can't miss any square
                    'secondStarErrors': 2, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 3,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 3),
        },

        //World Of Space
        {   //Level Settings
            'level': 46, //Number of the stage level
            'unlockWith': 130, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(4), //Define the world name of the stage level
            'stageIcon': stageIcons(4), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(4), //soundtrack that will be played in background
            'levelColor': stageColors(4), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 6, //Length of squares in grid
            'gridMaxMatchItems': 1, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 60, //Limit time to finish the game
            'totalItems': 70, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 50,
                    'firstStarHits': 12, //false - define that the play can't miss any square
                    'firstStarErrors': 4, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 30,
                    'secondStarHits': 38, //false - define that the play can't miss any square
                    'secondStarErrors': 2, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 10,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 4),
        },
        {   //Level Settings
            'level': 47, //Number of the stage level
            'unlockWith': 133, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(4), //Define the world name of the stage level
            'stageIcon': stageIcons(4), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(4), //soundtrack that will be played in background
            'levelColor': stageColors(4), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 6, //Length of squares in grid
            'gridMaxMatchItems': 2, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 65, //Limit time to finish the game
            'totalItems': 85, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 45,
                    'firstStarHits': 20, //false - define that the play can't miss any square
                    'firstStarErrors': 5, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 27,
                    'secondStarHits': 46, //false - define that the play can't miss any square
                    'secondStarErrors': 3, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 5,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 1, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 4),
        },
        {   //Level Settings
            'level': 48, //Number of the stage level
            'unlockWith': 135, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(4), //Define the world name of the stage level
            'stageIcon': stageIcons(4), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(4), //soundtrack that will be played in background
            'levelColor': stageColors(4), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 6, //Length of squares in grid
            'gridMaxMatchItems': 4, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 20, //Limit time to finish the game
            'totalItems': 40, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 15,
                    'firstStarHits': 10, //false - define that the play can't miss any square
                    'firstStarErrors': 2, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 10,
                    'secondStarHits': 20, //false - define that the play can't miss any square
                    'secondStarErrors': 1, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 1,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 4),
        },
        {   //Level Settings
            'level': 49, //Number of the stage level
            'unlockWith': 138, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(4), //Define the world name of the stage level
            'stageIcon': stageIcons(4), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(4), //soundtrack that will be played in background
            'levelColor': stageColors(4), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 6, //Length of squares in grid
            'gridMaxMatchItems': 3, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 60, //Limit time to finish the game
            'totalItems': 100, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 45,
                    'firstStarHits': 30, //false - define that the play can't miss any square
                    'firstStarErrors': 3, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 20,
                    'secondStarHits': 65, //false - define that the play can't miss any square
                    'secondStarErrors': 2, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 4,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 4),
        },
        {   //Level Settings
            'level': 50, //Number of the stage level
            'unlockWith': 140, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(4), //Define the world name of the stage level
            'stageIcon': stageIcons(4), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(4), //soundtrack that will be played in background
            'levelColor': stageColors(4), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 7, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 60, //Limit time to finish the game
            'totalItems': 60, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 40,
                    'firstStarHits': 30, //false - define that the play can't miss any square
                    'firstStarErrors': 3, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 20,
                    'secondStarHits': 45, //false - define that the play can't miss any square
                    'secondStarErrors': 2, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 10,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 4),
        },
        {   //Level Settings
            'level': 51, //Number of the stage level
            'unlockWith': 144, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(4), //Define the world name of the stage level
            'stageIcon': stageIcons(4), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(4), //soundtrack that will be played in background
            'levelColor': stageColors(4), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 7, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 30, //Limit time to finish the game
            'totalItems': 60, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 25,
                    'firstStarHits': 10, //false - define that the play can't miss any square
                    'firstStarErrors': 3, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 15,
                    'secondStarHits': 30, //false - define that the play can't miss any square
                    'secondStarErrors': 2, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 5,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 4),
        },
        {   //Level Settings
            'level': 52, //Number of the stage level
            'unlockWith': 147, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(4), //Define the world name of the stage level
            'stageIcon': stageIcons(4), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(4), //soundtrack that will be played in background
            'levelColor': stageColors(4), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 7, //Length of squares in grid
            'gridMaxMatchItems': 4, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 30, //Limit time to finish the game
            'totalItems': 45, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 25,
                    'firstStarHits': 15, //false - define that the play can't miss any square
                    'firstStarErrors': 5, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 15,
                    'secondStarHits': 35, //false - define that the play can't miss any square
                    'secondStarErrors': 2, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 10,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 1, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 4),
        },
        {   //Level Settings
            'level': 53, //Number of the stage level
            'unlockWith': 149, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(4), //Define the world name of the stage level
            'stageIcon': stageIcons(4), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(4), //soundtrack that will be played in background
            'levelColor': stageColors(4), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 7, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 75, //Limit time to finish the game
            'totalItems': 105, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 50,
                    'firstStarHits': 30, //false - define that the play can't miss any square
                    'firstStarErrors': 4, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 25,
                    'secondStarHits': 75, //false - define that the play can't miss any square
                    'secondStarErrors': 3, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 10,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 4),
        },
        {   //Level Settings
            'level': 53, //Number of the stage level
            'unlockWith': 149, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(4), //Define the world name of the stage level
            'stageIcon': stageIcons(4), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(4), //soundtrack that will be played in background
            'levelColor': stageColors(4), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 7, //Length of squares in grid
            'gridMaxMatchItems': 6, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 80, //Limit time to finish the game
            'totalItems': 130, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 50,
                    'firstStarHits': 40, //false - define that the play can't miss any square
                    'firstStarErrors': 4, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 25,
                    'secondStarHits': 90, //false - define that the play can't miss any square
                    'secondStarErrors': 3, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 12,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 1, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 4),
        },
        {   //Level Settings
            'level': 54, //Number of the stage level
            'unlockWith': 151, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(4), //Define the world name of the stage level
            'stageIcon': stageIcons(4), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(4), //soundtrack that will be played in background
            'levelColor': stageColors(4), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 8, //Length of squares in grid
            'gridMaxMatchItems': 6, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 75, //Limit time to finish the game
            'totalItems': 130, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 50,
                    'firstStarHits': 40, //false - define that the play can't miss any square
                    'firstStarErrors': 5, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 25,
                    'secondStarHits': 90, //false - define that the play can't miss any square
                    'secondStarErrors': 4, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 12,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 2, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 4),
        },
        {   //Level Settings
            'level': 55, //Number of the stage level
            'unlockWith': 153, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(4), //Define the world name of the stage level
            'stageIcon': stageIcons(4), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(4), //soundtrack that will be played in background
            'levelColor': stageColors(4), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 8, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 45, //Limit time to finish the game
            'totalItems': 75, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 35,
                    'firstStarHits': 20, //false - define that the play can't miss any square
                    'firstStarErrors': 4, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 20,
                    'secondStarHits': 43, //false - define that the play can't miss any square
                    'secondStarErrors': 2, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 4,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 4),
        },
        {   //Level Settings
            'level': 56, //Number of the stage level
            'unlockWith': 155, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(4), //Define the world name of the stage level
            'stageIcon': stageIcons(4), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(4), //soundtrack that will be played in background
            'levelColor': stageColors(4), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 8, //Length of squares in grid
            'gridMaxMatchItems': 3, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 65, //Limit time to finish the game
            'totalItems': 80, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 48,
                    'firstStarHits': 24, //false - define that the play can't miss any square
                    'firstStarErrors': 3, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 23,
                    'secondStarHits': 54, //false - define that the play can't miss any square
                    'secondStarErrors': 2, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 11,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 4),
        },
        {   //Level Settings
            'level': 57, //Number of the stage level
            'unlockWith': 159, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(4), //Define the world name of the stage level
            'stageIcon': stageIcons(4), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(4), //soundtrack that will be played in background
            'levelColor': stageColors(4), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 8, //Length of squares in grid
            'gridMaxMatchItems': 4, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 55, //Limit time to finish the game
            'totalItems': 80, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 40,
                    'firstStarHits': 25, //false - define that the play can't miss any square
                    'firstStarErrors': 4, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 18,
                    'secondStarHits': 55, //false - define that the play can't miss any square
                    'secondStarErrors': 3, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 5,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 4),
        },
        {   //Level Settings
            'level': 58, //Number of the stage level
            'unlockWith': 162, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(4), //Define the world name of the stage level
            'stageIcon': stageIcons(4), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(4), //soundtrack that will be played in background
            'levelColor': stageColors(4), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 8, //Length of squares in grid
            'gridMaxMatchItems': 6, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 75, //Limit time to finish the game
            'totalItems': 120, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 40,
                    'firstStarHits': 30, //false - define that the play can't miss any square
                    'firstStarErrors': 5, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 25,
                    'secondStarHits': 75, //false - define that the play can't miss any square
                    'secondStarErrors': 4, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 1,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 1, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 4),
        },
        {   //Level Settings
            'level': 59, //Number of the stage level
            'unlockWith': 174, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(4), //Define the world name of the stage level
            'stageIcon': stageIcons(4), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(4), //soundtrack that will be played in background
            'levelColor': stageColors(4), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 9, //Length of squares in grid
            'gridMaxMatchItems': 6, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 80, //Limit time to finish the game
            'totalItems': 140, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 50,
                    'firstStarHits': 45, //false - define that the play can't miss any square
                    'firstStarErrors': 4, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 22,
                    'secondStarHits': 90, //false - define that the play can't miss any square
                    'secondStarErrors': 3, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 10,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 4),
        },

        //World Of Jungle
        {   //Level Settings
            'level': 60, //Number of the stage level
            'unlockWith': 175, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(5), //Define the world name of the stage level
            'stageIcon': stageIcons(5), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(5), //soundtrack that will be played in background
            'levelColor': stageColors(5), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 7, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 15, //Limit time to finish the game
            'totalItems': 20, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 10,
                    'firstStarHits': 7, //false - define that the play can't miss any square
                    'firstStarErrors': 0, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 8,
                    'secondStarHits': 14, //false - define that the play can't miss any square
                    'secondStarErrors': 0, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 1,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 5),
        },
        {   //Level Settings
            'level': 61, //Number of the stage level
            'unlockWith': 177, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(5), //Define the world name of the stage level
            'stageIcon': stageIcons(5), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(5), //soundtrack that will be played in background
            'levelColor': stageColors(5), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 7, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 20, //Limit time to finish the game
            'totalItems': 30, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 12,
                    'firstStarHits': 10, //false - define that the play can't miss any square
                    'firstStarErrors': 0, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 8,
                    'secondStarHits': 20, //false - define that the play can't miss any square
                    'secondStarErrors': 0, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 1,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 5),
        },
        {   //Level Settings
            'level': 62, //Number of the stage level
            'unlockWith': 180, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(5), //Define the world name of the stage level
            'stageIcon': stageIcons(5), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(5), //soundtrack that will be played in background
            'levelColor': stageColors(5), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 7, //Length of squares in grid
            'gridMaxMatchItems': 2, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 50, //Limit time to finish the game
            'totalItems': 50, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 30,
                    'firstStarHits': 22, //false - define that the play can't miss any square
                    'firstStarErrors': 2, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 20,
                    'secondStarHits': 44, //false - define that the play can't miss any square
                    'secondStarErrors': 1, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 10,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 5),
        },
        {   //Level Settings
            'level': 63, //Number of the stage level
            'unlockWith': 182, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(5), //Define the world name of the stage level
            'stageIcon': stageIcons(5), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(5), //soundtrack that will be played in background
            'levelColor': stageColors(5), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 7, //Length of squares in grid
            'gridMaxMatchItems': 3, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 60, //Limit time to finish the game
            'totalItems': 65, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 40,
                    'firstStarHits': 25, //false - define that the play can't miss any square
                    'firstStarErrors': 3, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 25,
                    'secondStarHits': 40, //false - define that the play can't miss any square
                    'secondStarErrors': 2, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 8,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 5),
        },
        {   //Level Settings
            'level': 64, //Number of the stage level
            'unlockWith': 183, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(5), //Define the world name of the stage level
            'stageIcon': stageIcons(5), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(5), //soundtrack that will be played in background
            'levelColor': stageColors(5), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 7, //Length of squares in grid
            'gridMaxMatchItems': 4, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 75, //Limit time to finish the game
            'totalItems': 100, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 42,
                    'firstStarHits': 25, //false - define that the play can't miss any square
                    'firstStarErrors': 2, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 21,
                    'secondStarHits': 65, //false - define that the play can't miss any square
                    'secondStarErrors': 1, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 5,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 5),
        },
        {   //Level Settings
            'level': 65, //Number of the stage level
            'unlockWith': 185, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(5), //Define the world name of the stage level
            'stageIcon': stageIcons(5), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(5), //soundtrack that will be played in background
            'levelColor': stageColors(5), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 7, //Length of squares in grid
            'gridMaxMatchItems': 4, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 80, //Limit time to finish the game
            'totalItems': 110, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 45,
                    'firstStarHits': 28, //false - define that the play can't miss any square
                    'firstStarErrors': 2, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 25,
                    'secondStarHits': 75, //false - define that the play can't miss any square
                    'secondStarErrors': 1, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 4,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 5),
        },
        {   //Level Settings
            'level': 66, //Number of the stage level
            'unlockWith': 188, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(5), //Define the world name of the stage level
            'stageIcon': stageIcons(5), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(5), //soundtrack that will be played in background
            'levelColor': stageColors(5), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 8, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 70, //Limit time to finish the game
            'totalItems': 110, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 42,
                    'firstStarHits': 28, //false - define that the play can't miss any square
                    'firstStarErrors': 2, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 20,
                    'secondStarHits': 75, //false - define that the play can't miss any square
                    'secondStarErrors': 1, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 3,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 5),
        },
        {   //Level Settings
            'level': 67, //Number of the stage level
            'unlockWith': 192, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(5), //Define the world name of the stage level
            'stageIcon': stageIcons(5), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(5), //soundtrack that will be played in background
            'levelColor': stageColors(5), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 8, //Length of squares in grid
            'gridMaxMatchItems': 10, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 60, //Limit time to finish the game
            'totalItems': 90, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 40,
                    'firstStarHits': 30, //false - define that the play can't miss any square
                    'firstStarErrors': 5, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 20,
                    'secondStarHits': 65, //false - define that the play can't miss any square
                    'secondStarErrors': 3, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 10,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 2, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 5),
        },
        {   //Level Settings
            'level': 68, //Number of the stage level
            'unlockWith': 195, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(5), //Define the world name of the stage level
            'stageIcon': stageIcons(5), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(5), //soundtrack that will be played in background
            'levelColor': stageColors(5), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 8, //Length of squares in grid
            'gridMaxMatchItems': 5, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 60, //Limit time to finish the game
            'totalItems': 90, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 40,
                    'firstStarHits': 30, //false - define that the play can't miss any square
                    'firstStarErrors': 4, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 20,
                    'secondStarHits': 65, //false - define that the play can't miss any square
                    'secondStarErrors': 3, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 10,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 1, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 5),
        },
        {   //Level Settings
            'level': 69, //Number of the stage level
            'unlockWith': 197, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(5), //Define the world name of the stage level
            'stageIcon': stageIcons(5), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(5), //soundtrack that will be played in background
            'levelColor': stageColors(5), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 9, //Length of squares in grid
            'gridMaxMatchItems': 6, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 80, //Limit time to finish the game
            'totalItems': 105, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 55,
                    'firstStarHits': 32, //false - define that the play can't miss any square
                    'firstStarErrors': 4, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 23,
                    'secondStarHits': 83, //false - define that the play can't miss any square
                    'secondStarErrors': 3, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 12,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 2, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 5),
        },
        {   //Level Settings
            'level': 70, //Number of the stage level
            'unlockWith': 200, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(5), //Define the world name of the stage level
            'stageIcon': stageIcons(5), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(5), //soundtrack that will be played in background
            'levelColor': stageColors(5), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 9, //Length of squares in grid
            'gridMaxMatchItems': 6, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 90, //Limit time to finish the game
            'totalItems': 120, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 60,
                    'firstStarHits': 40, //false - define that the play can't miss any square
                    'firstStarErrors': 4, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 30,
                    'secondStarHits': 80, //false - define that the play can't miss any square
                    'secondStarErrors': 3, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 10,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 1, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 5),
        },
        {   //Level Settings
            'level': 71, //Number of the stage level
            'unlockWith': 203, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(5), //Define the world name of the stage level
            'stageIcon': stageIcons(5), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(5), //soundtrack that will be played in background
            'levelColor': stageColors(5), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 9, //Length of squares in grid
            'gridMaxMatchItems': 7, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 60, //Limit time to finish the game
            'totalItems': 100, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 45,
                    'firstStarHits': 35, //false - define that the play can't miss any square
                    'firstStarErrors': 3, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 23,
                    'secondStarHits': 70, //false - define that the play can't miss any square
                    'secondStarErrors': 2, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 15,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 5),
        },
        {   //Level Settings
            'level': 72, //Number of the stage level
            'unlockWith': 205, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(5), //Define the world name of the stage level
            'stageIcon': stageIcons(5), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(5), //soundtrack that will be played in background
            'levelColor': stageColors(5), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 9, //Length of squares in grid
            'gridMaxMatchItems': 6, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 40, //Limit time to finish the game
            'totalItems': 75, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 28,
                    'firstStarHits': 23, //false - define that the play can't miss any square
                    'firstStarErrors': 2, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 14,
                    'secondStarHits': 50, //false - define that the play can't miss any square
                    'secondStarErrors': 1, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 3,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 5),
        },
        {   //Level Settings
            'level': 73, //Number of the stage level
            'unlockWith': 218, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(5), //Define the world name of the stage level
            'stageIcon': stageIcons(5), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(5), //soundtrack that will be played in background
            'levelColor': stageColors(5), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 9, //Length of squares in grid
            'gridMaxMatchItems': 7, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 100, //Limit time to finish the game
            'totalItems': 165, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 75,
                    'firstStarHits': 40, //false - define that the play can't miss any square
                    'firstStarErrors': 4, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 40,
                    'secondStarHits': 95, //false - define that the play can't miss any square
                    'secondStarErrors': 2, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 5,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 5),
        },
        {   //Level Settings
            'level': 74, //Number of the stage level
            'unlockWith': 222, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(5), //Define the world name of the stage level
            'stageIcon': stageIcons(5), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(5), //soundtrack that will be played in background
            'levelColor': stageColors(5), //False default | This is used to change the card color in level stage selection
            'description': false, //False - Let the code builed this description | simple Description about this level
            'gridLength': 9, //Length of squares in grid
            'gridMaxMatchItems': 9, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 120, //Limit time to finish the game
            'totalItems': 180, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 50,
                    'firstStarHits': 50, //false - define that the play can't miss any square
                    'firstStarErrors': 6, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 25,
                    'secondStarHits': 120, //false - define that the play can't miss any square
                    'secondStarErrors': 4, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 2,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 2, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 5),
        },

        //Challenges Levels
        {   //Level Settings
            'level': 900, //Number of the stage level
            'unlockWith': 100, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(6), //Define the world name of the stage level
            'stageIcon': stageIcons(6), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(6), //soundtrack that will be played in background
            'levelColor': stageColors(6), //False default | This is used to change the card color in level stage selection
            'description': 'Do your best time and score in this mode!', //False - Let the code builed this description | simple Description about this level
            'gridLength': 10, //Length of squares in grid
            'gridMaxMatchItems': 10, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 180, //Limit time to finish the game
            'totalItems': 200, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 90,
                    'firstStarHits': 100, //false - define that the play can't miss any square
                    'firstStarErrors': false, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 45,
                    'secondStarHits': 150, //false - define that the play can't miss any square
                    'secondStarErrors': 10, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 10,
                    'thirdStarHits': 200, //false - define that the play can't miss any square
                    'thirdStarErrors': 5, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel(),
        },
        {   //Level Settings
            'level': 901, //Number of the stage level
            'unlockWith': 125, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(6), //Define the world name of the stage level
            'stageIcon': stageIcons(2), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(6), //soundtrack that will be played in background
            'levelColor': stageColors(6), //False default | This is used to change the card color in level stage selection
            'description': 'Do your best time and score in this mode!', //False - Let the code builed this description | simple Description about this level
            'gridLength': 10, //Length of squares in grid
            'gridMaxMatchItems': 10, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 180, //Limit time to finish the game
            'totalItems': 150, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 80,
                    'firstStarHits': 75, //false - define that the play can't miss any square
                    'firstStarErrors': false, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 35,
                    'secondStarHits': 100, //false - define that the play can't miss any square
                    'secondStarErrors': 10, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 10,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 5, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 2),
        },
        {   //Level Settings
            'level': 902, //Number of the stage level
            'unlockWith': 170, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(6), //Define the world name of the stage level
            'stageIcon': stageIcons(3), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(6), //soundtrack that will be played in background
            'levelColor': stageColors(6), //False default | This is used to change the card color in level stage selection
            'description': 'Do your best time and score in this mode!', //False - Let the code builed this description | simple Description about this level
            'gridLength': 10, //Length of squares in grid
            'gridMaxMatchItems': 10, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 200, //Limit time to finish the game
            'totalItems': 250, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 100,
                    'firstStarHits': 80, //false - define that the play can't miss any square
                    'firstStarErrors': false, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 50,
                    'secondStarHits': 170, //false - define that the play can't miss any square
                    'secondStarErrors': 8, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 5,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 4, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 3),
        },
        {   //Level Settings
            'level': 903, //Number of the stage level
            'unlockWith': 200, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(6), //Define the world name of the stage level
            'stageIcon': stageIcons(4), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(6), //soundtrack that will be played in background
            'levelColor': stageColors(6), //False default | This is used to change the card color in level stage selection
            'description': 'Do your best time and score in this mode!', //False - Let the code builed this description | simple Description about this level
            'gridLength': 10, //Length of squares in grid
            'gridMaxMatchItems': 10, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 225, //Limit time to finish the game
            'totalItems': 300, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': true, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 120,
                    'firstStarHits': 90, //false - define that the play can't miss any square
                    'firstStarErrors': false, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 70,
                    'secondStarHits': 200, //false - define that the play can't miss any square
                    'secondStarErrors': 10, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 12,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 6, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 4),
        },
        {   //Level Settings
            'level': 904, //Number of the stage level
            'unlockWith': 235, //Define how many stars is needed to open the stage (0 is free)
            'world': worldNames(6), //Define the world name of the stage level
            'stageIcon': stageIcons(5), //Define if the stage has an icon to show in level selection
            'stageTheme': stageSongs(6), //soundtrack that will be played in background
            'levelColor': stageColors(6), //False default | This is used to change the card color in level stage selection
            'description': 'Do your best time and score in this mode!', //False - Let the code builed this description | simple Description about this level
            'gridLength': 10, //Length of squares in grid
            'gridMaxMatchItems': 10, //Number of how many match squares will be present at each roll
            'refreshGameTime': 5, //After X seconds, the game will refresh the grid
            'maxTime': 180, //Limit time to finish the game
            'totalItems': 100, //false - The code will calc how many items should be selected or put any integer
            'powersEnable': false, //True - to enable Powers in game.
            'achievements': [ //Start by the most simple to most difficult values
                {   //Star Number 1
                    'firstStarTime': 90,
                    'firstStarHits': 30, //false - define that the play can't miss any square
                    'firstStarErrors': 10, //false will ignore this rule
                },
                {   //Star Number 2
                    'secondStarTime': 60,
                    'secondStarHits': 60, //false - define that the play can't miss any square
                    'secondStarErrors': 6, //false - will ignore this rule
                },
                {   //Star Number 3
                    'thirdStarTime': 20,
                    'thirdStarHits': false, //false - define that the play can't miss any square
                    'thirdStarErrors': 0, //false - will ignore this rule
                },
            ],
            //Define all itens that will show in the grid to player in this stage
            'itemsToSelect': getItemsToTheLevel([1,2,3,4,5,6,7], 5),
        },
    ];
}