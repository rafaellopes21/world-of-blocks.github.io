window.onload = function (){
    enableSfxButtonClicked();
}

function startGaming(){
    include('#main-content', 'views/menu/main-menu.html');
    startSong('songs/moe-moe garden-in-the-brain.mp3');
}

function enableSfxButtonClicked(){
    let selector = '.sfx-click';
    if(document.querySelector(selector)){
        document.querySelectorAll(selector).forEach(btn => {
            btn.addEventListener("click", function (){
                startSFX('songs/sound_fx/pop.mp3');
            })
        })
    }
}