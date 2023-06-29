window.onload = function (){

}

var playerData = [];

function getBaseUrl(){
    return window.location.protocol+"//"+window.location.host+(window.location.pathname).replace("index.html", "");
}

function getPlayer(){
    return playerData;
}

function startGaming(){
    playerData = {
        'player': document.querySelector("#nickname").value,
    };
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

function loadModal(viewPath, modalTitle, btnName = 'Save', btnRedirect = false, contentPath = false){
    //Fix path name
    viewPath = "views/"+((viewPath.replace("views/", "").replace("/views/", "")).replace(".html", ""))+".html";

    //Load the view in the element and execute some requireds functions
    $('#modalTemplateLoad').load(viewPath, function(responseTxt, statusTxt, xhr){
        if(statusTxt == "error"){
            showErrorInConsole("Error: " + xhr.status + ": " + xhr.statusText);
        }
        if(statusTxt == "success"){
            enableSfxButtonClicked();
            document.querySelector("#modalTemplateTitle").innerHTML = modalTitle;
            document.querySelector("#modalTemplateSave").innerHTML = btnName;

            if(contentPath){
                include(contentPath, '#modalTemplateContent');
            }

            if(btnRedirect){
                document.querySelector("#modalTemplateSave").setAttribute("onclick", "loadView('"+btnRedirect+"')");
            }

            document.querySelector("#modalTemplateBtn").click();
        }
    });
}