window.onload = function (){

}

function getBaseUrl(){
    return window.location.protocol+"//"+window.location.host+(window.location.pathname).replace("index.html", "");
}

function startGaming(){
    include('menu/main-menu', '#main-content');
}

function enableSfxButtonClicked(){
    let selector = '.sfx-click';
    if(document.querySelector(selector)){
        document.querySelectorAll(selector).forEach(btn => {
            btn.addEventListener("click", function (){
                playSFX('pop.mp3');
            })
        })
    }
}

function loadView(viewPath){
    include(viewPath);
}