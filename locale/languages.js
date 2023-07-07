/*
|-------------------------------------
|   CREATE YOUR OWN LANGUAGES
|-------------------------------------
| Here you can define your languages
| to translate the game by adding
| a new item in the array below and
| translate the terms in the example
|
| After you set up the language, go
| to the file below:
| views/partials/languages/index.html
| and add your lang in the select
| option id='lang-game'!
|
|*/
function translateTo(lang = 'en') {
    switch (lang) {
        /*case 'example':
           translateTextContent('ORIGINAL_TEXT', 'TRANSLATED_TEXT');
           ....
           ....
           break;*/ //That's it! Simple Like That!
        case 'pt':
            //powers translations
            translateTextContent('Add more time to your game.', 'Adiciona tempo extra ao seu jogo.');
            translateTextContent('Freeze the time to obtain more squares and points.', 'Congele o tempo para conseguir mais quadros e pontos.');
            translateTextContent('Double your score points and money!', 'Dobre sua pontuação e dinheiro!');
            translateTextContent('If the match is hard, use this to auto select all the squares.', 'Se estiver difícil, ative para selecionar todos os quadros automaticamente.');
            translateTextContent('Cooldown', 'Recarga');
            translateTextContent('Effect', 'Efeito');
            translateTextContent('Buy', 'Comprar');
            //tutorial home page translate
            translateTextContent('The game is based on challenging the player in increasingly difficult Nívels, focusing on speed and precision.', 'O jogo baseia-se em desafiar o jogador em níveis cada vez mais dificeis, focando na velocidade e precisão.');
            translateTextContent('Your objective is to find all the frames/objects that will be drawn randomly in each level within a stipulated time limit.', 'Seu objetivo, é encontrar todos os quadros/objetos que serão sorteados aleatoriamentes em cada nível dentro de um limite de tempo estipulado.');
            translateTextContent('Also, the game will reset the position of the frames from time to time, forcing the player to be precise and attentive when selecting each frame.', 'Além disso, o jogo de tempos em tempos irá reiniciar a posição dos quadros, forçando o jogador e ter uma precisão e atenção ao selecionar cada quadro.');
            translateTextContent('The game also has the possibility of completing objectives that are shown by stars, which allows you to advance in the existing levels within the game, as well as rewarding you with a fictitious amount of money so that you can buy items in the store to help you. in the challenges you will encounter!', 'O jogo ainda conta com a possibilidade de conseguir concluir objetivos que são demonstrados por estrelas, a qual lhe permite avançar nos níveis existentes dentro do jogo, bem como lhe recompesará com uma quantia de dinheiro ficticio para que você possa comprar itens na loja para lhe ajudar nos desafios que você encontrará!');
            translateTextContent('For more details, access the "Help" option in the game\'s main menu and have a good game!', 'Para mais detalhes, acesse no menu principal do jogo a opção "Ajuda" e tenha um bom jogo!');
            translateTextContent('This game was created just for fun, therefore it is not intended for profit or commercialization, it is literally a game made with love and dedication!', 'Este jogo foi criado apenas por diversão, portanto ele não tem a inteção de lucros ou de comercialização, sendo literalmente um jogo feito com amor e dedicação!');
            translateTextContent('But if you liked the game and want to help the developer who created this project, you can donate', 'Mas caso tenha gostado do jogo e quer ajudar o desenvolvedor que criou este projeto, você pode doar');
            translateTextContent('by clicking here!', 'clicando aqui!');
            //all game translation
            translateTextContent('Welcome Back', 'Bem-Vindo de Volta');
            translateTextContent('How to Play', 'Como Jogar');
            translateTextContent('Donate', 'Doe aqui');
            translateTextContent('Before Start', 'Antes de Começar');
            translateTextContent('This game uses your browser\'s cookies and local storage to store data about your gameplay', 'Este jogo usa os cookies do seu navegador e armazenamento local para armazenar dados sobre o seu jogo');
            translateTextContent('Player\'s Name', 'Nome de Jogador');
            translateTextContent('More Time', 'Tempo Extra');
            translateTextContent('Time Freeze', 'Congela Tempo');
            translateTextContent('Double Points', 'Pontos Dobrados');
            translateTextContent('Perfect Roll', 'Rodada Perfeita');
            translateTextContent('Save', 'Salvar');
            translateTextContent('Back', 'Voltar');
            translateTextContent('Continue', 'Continuar');
            translateTextContent('Language', 'Idioma');
            translateTextContent('Start Game', 'Inicar Jogo');
            translateTextContent('Shopping', 'Loja');
            translateTextContent('Help', 'Ajuda');
            translateTextContent('Settings', 'Ajustes');
            translateTextContent('Music', 'Música');
            translateTextContent('Volume', 'Volume');
            translateTextContent('Sound FX Volume', 'Volume SFX');
            translateTextContent('The button below will erase ALL STORAGE DATA from your device', 'O botão abaixo apagará TODOS OS DADOS DE ARMAZENAMENTO do seu dispositivo');
            translateTextContent('All data deleted with successful! (Refresh the game to apply)', 'Todos os dados excluídos com sucesso! (Atualize o jogo para aplicar)');
            translateTextContent('Clear all Data', 'Limpar Dados');
            translateTextContent('World of Colors', 'Mundo das Cores');
            translateTextContent('Challenges', 'Desafios');
            translateTextContent('level', 'Nível');
            translateTextContent('page', 'página');
            translateTextContent('Find all', 'Encontre os');
            translateTextContent('Items', 'Itens');
            translateTextContent(' Itens within ', ' itens no tempo de ');
            translateTextContent('Do your best time and score in this mode', 'Faça seu melhor tempo e pontuação neste modo');
            translateTextContent('Your Time: ', 'Seu Tempo: ');
            translateTextContent('time.', '');
            translateTextContent('score', 'Placar');
            translateTextContent('hits', 'acertos');
            translateTextContent('max errors: ', 'Máx erros: ');
            translateTextContent('errors', 'erros');
            translateTextContent('acceptable', 'aceitos');
            translateTextContent('congratulations', 'Parabens');
            translateTextContent('Select a World Stage', 'Selecione um Mundo');
            translateTextContent('needed', 'Faltam');
            translateTextContent('goals', 'Missões');
            translateTextContent('starting in: ', 'Iniciando: ');
            translateTextContent('start', 'Jogar');
            translateTextContent('Up to ', 'Acima de ');
            translateTextContent('Left: ', 'Restante: ');
            translateTextContent('New Best', 'Recorde');
            break;
        default:
            return true;
    }
}

/*
|-------------------------------------
|   Check what is the current lang
|-------------------------------------
| You will not change nothing here!
|*/
function translateGame() {
    let langOpt = document.querySelector("#lang-game");
    if (langOpt && PLAYER.getLanguageGame() && PLAYER.getLanguageGame() != "en") {
        for (let i = 0; i < langOpt.options.length; i++) {
            if (langOpt.options[i].value == PLAYER.getLanguageGame()) {
                langOpt.value = PLAYER.getLanguageGame();
                langOpt.options[i].selected = true;
                $('.selectpicker').selectpicker('refresh');
                break;
            }
        }
    }
    translateTo(PLAYER.getLanguageGame());
}