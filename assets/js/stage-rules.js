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
        'World of Snow',
        'World of Water',
        'World of Space',
        'World of Jungle',
        'Challenges',
    ];
    return worldIndex ? worlds[worldIndex - 1] : worlds;
}

//Create the itens to select for the stage levels
function getItemsToTheLevel(itemsInArray = [], world = 1){
    //level 1
    let items = [ //start by array = 1, not ZERO!
        "bg-danger", "bg-primary", "bg-dark", "bg-info", "bg-success", "bg-warning", "bg-secondary",
    ];

    if(world > 1){
        if(world == 2){
            items = buildIconsInLevel(
                ['snow-icon', 'snowball-icon', 'snowman-icon', 'goggles-icon', 'thermometer-icon', 'cube-icon', 'wind-icon'],
                itemsInArray, items
            );
        }
        if(world == 3){
            items = buildIconsInLevel(
                ['bottle-icon', 'cup-icon', 'drop-icon', 'faucet-icon', 'rain-icon', 'sea-icon', 'waterfall-icon'],
                itemsInArray, items
            );
        }
        if(world == 4){
            items = buildIconsInLevel(
                ['ship-icon', 'satellite-icon', 'planet-icon', 'moon-icon', 'comet-icon', 'astronaut-icon', 'alien-icon'],
                itemsInArray, items
            );
        }
        if(world == 5){
            items = buildIconsInLevel(
                ['fruit-icon', 'plant-icon', 'tree-icon', 'paw-icon', 'oke-icon', 'mask-icon', 'geo-icon'],
                itemsInArray, items
            );
        }
    }

    //make a look in the array itens to return
    if(itemsInArray && itemsInArray.length > 0){
        let returnArray = [];
        itemsInArray.forEach(i => { returnArray.push(items[i - 1]) });
        return returnArray;
    }

    return items;
}

function buildIconsInLevel(icons, itemsInArray, allItems){
    itemsInArray.forEach(iconIndex => {
        iconIndex = iconIndex - 1;
        allItems[iconIndex] = allItems[iconIndex]+" "+icons[iconIndex]+" set-icon-bg";
    });
    return allItems;
}

//Create the stage songs for the stage levels
function stageSongs(songIndex = false){
    let songs = [ //start by array = 1, not ZERO!
        'memo.mp3',
        'wonderland.mp3',
        'paradise.mp3',
        'sweet-cafe.mp3',
        'funny.mp3',
        'hard_puzzle.mp3',
        'boba-date.mp3',
    ];
    return songIndex ? songs[songIndex - 1] : songs;
}

//Create the stage colors for the stage levels
function stageColors(colorIndex = false){
    let colors = [ //start by array = 1, not ZERO!
        'bg-card-yellow',
        'bg-card-white',
        'bg-card-blue',
        'bg-card-dark',
        'bg-card-green',
        'bg-card-red',
    ];
    return colorIndex ? colors[colorIndex - 1] : false;
}

//Create the stage icons for the stage levels
function stageIcons(iconsIndex = false){
    let icons = [ //start by array = 1, not ZERO!
        'fa-solid fa-palette',
        'fa-solid fa-snowflake',
        'fa-solid fa-droplet',
        'fa-solid fa-moon',
        'fa-solid fa-tree',
        'fa-solid fa-trophy',
    ];
    return iconsIndex ? icons[iconsIndex - 1] : '';
}

function getStageSettings(stageNumber = false, stageIndex = 'level') {
    let stagesSettings = getAllLevels();
    return stageNumber ? stagesSettings[stagesSettings.findIndex((stage) => stage[stageIndex] === stageNumber)] : stagesSettings;
}