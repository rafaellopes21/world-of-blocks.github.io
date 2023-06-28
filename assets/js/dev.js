/*
|-------------------------------------
|   Include views into pages
|-------------------------------------
|
|*/
function include(elementToPut, viewPath){
    if(!document.querySelector(elementToPut)){
        showErrorInConsole("O elemento '"+elementToPut+"' não foi encontrado!")
    }

    $(elementToPut).load(viewPath, function(responseTxt, statusTxt, xhr){
        if(statusTxt == "error"){
            showErrorInConsole("Error: " + xhr.status + ": " + xhr.statusText);
        }
    });
}

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