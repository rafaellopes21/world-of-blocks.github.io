var deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
    // Armazena o evento para usá-lo posteriormente
    event.preventDefault();
    deferredPrompt = event;
    // Exibe o botão de instalação
    document.getElementById('installButton').style.display = 'block';
});

document.getElementById('installButton').addEventListener('click', () => {
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
});