var deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
    // Armazena o evento para usá-lo posteriormente
    event.preventDefault();
    deferredPrompt = event;
    // Exibe o botão de instalação
    if(document.getElementById('installButton')){
        document.getElementById('installButton').style.display = 'block';
    }
    if(document.getElementById('installBtn')){
        document.getElementById('installBtn').style.display = 'block';
    }
});

if(document.getElementById('installBtn')){
    document.getElementById('installBtn').addEventListener('click', () => {
        installGame();
    });
}

if(document.getElementById('installButton')) {
    document.getElementById('installButton').addEventListener('click', () => {
        installGame();
    });
}

function installGame(){
    // Mostra o prompt de instalação quando o usuário clica no botão
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Usuário aceitou a instalação.');
            } else {
                console.log('Usuário recusou a instalação.');
            }
            deferredPrompt = null;
        });
    }
}