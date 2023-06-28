window.onload = function (){

}

function startGaming(){
    include('menu/main-menu', '#main-content');
}

function enableSfxButtonClicked(){
    let selector = '.sfx-click';
    if(document.querySelector(selector)){
        document.querySelectorAll(selector).forEach(btn => {
            btn.addEventListener("click", function (){
                startSFX('sound_fx/pop.mp3');
            })
        })
    }
}

function loadView(viewPath){
    include(viewPath);
}