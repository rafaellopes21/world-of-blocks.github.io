/*
|-------------------------------------
|   Include views into pages
|-------------------------------------
|
|*/
function include(viewPath, elementToPut = '#main-content'){
    //Fix path name
    viewPath = "views/"+((viewPath.replace("views/", "").replace("/views/", "")).replace(".html", ""))+".html";

    //Check if element to load the page exists
    if(!document.querySelector(elementToPut)){
        showErrorInConsole("O elemento '"+elementToPut+"' não foi encontrado!")
    }

    //Load the view in the element and execute some requireds functions
    $(elementToPut).load(viewPath, function(responseTxt, statusTxt, xhr){
        if(statusTxt == "error"){
            showErrorInConsole("Error: " + xhr.status + ": " + xhr.statusText);
        }
        if(statusTxt == "success"){
            enableSfxButtonClicked();
            translateGame();
            setTimeout(function (){
                if(PLAYER.getPauseMainVolume() == 1){ AUDIO.pause(); }
            }, 150);
        }
    });
}

function includeFooter(returnToViewPage, removeFooterAfterBack = false){
    include('menu/footer', '#game-footer');

    setTimeout(function (){
        if(removeFooterAfterBack){
            document.querySelector("#return-button").setAttribute(
                "onclick", "loadView('"+returnToViewPage+"'); removeFooterOnBack()");
        } else {
            document.querySelector("#return-button").setAttribute(
                "onclick", "loadView('"+returnToViewPage+"');");
        }
    }, 1500);
}

function removeFooterOnBack(){
    document.querySelector('#game-footer').innerHTML = "";
}

function disableScroll() {
    document.body.style.overflow = 'hidden';
    window.addEventListener('touchmove', preventDefaultScroll, { passive: false });
    document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });
}

function enableScroll() {
    document.body.style.overflow = '';
    window.removeEventListener('touchmove', preventDefaultScroll);
    window.removeEventListener('touchstart', preventDefaultScroll);
    document.body.removeEventListener('touchstart', preventDefaultScroll);
}
function preventDefaultScroll(event) {
    event.preventDefault();
}
/*window.onresize = function(event) {
    if(!document.querySelector("#main-div")){
        return false;
    }
    if(window.innerWidth <= 768){
        document.querySelector("#main-div").classList.remove("center-in-middle");
    } else {
        document.querySelector("#main-div").classList.add("center-in-middle");
    }
};*/
/*
|-------------------------------------
|   Show erros for the developer
|-------------------------------------
|
|*/
function showErrorInConsole(errMsg){
    console.warn(errMsg);
    alert(errMsg);
}

/*
|-------------------------------------
|   Clear all storage from device
|-------------------------------------
|
|*/
function clearDevice(){
    localStorage.clear();
    document.querySelector("#data-deleted").removeAttribute("hidden");
    setTimeout(function (){
        document.querySelector("#data-deleted").setAttribute("hidden", "hidden");
    }, 5000);
    headerUpdateData();
}