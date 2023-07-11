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
//powers translations
translateTextContent('Add more time to your game.', '');
translateTextContent('Freeze the time to obtain more squares and points.', '');
translateTextContent('Double your score points and money!', '');
translateTextContent('If the match is hard, use this to auto select all the squares.', '');
translateTextContent('Cooldown', '');
translateTextContent('Effect', '');
translateTextContent('Buy', '');

//tutorial home page translate
translateTextContent('The game is based on challenging the player in increasingly difficult levels, focusing on speed and precision.', '');
translateTextContent('Your objective is to find all the frames/objects that will be drawn randomly in each level within a stipulated time limit.', '');
translateTextContent('Also, the game will reset the position of the frames from time to time, forcing the player to be precise and attentive when selecting each frame.', '');
translateTextContent('The game also has the possibility of completing objectives that are shown by stars, which allows you to advance in the existing levels within the game, as well as rewarding you with a fictitious amount of money so that you can buy items in the store to help you in the challenges you will encounter!', '');
translateTextContent('For more details, access the "Help" option in the game\'s main menu and have a good game!', '');
translateTextContent('This game was created just for fun, therefore it is not intended for profit or commercialization, it is literally a game made with love and dedication!', '');
translateTextContent('But if you liked the game and want to help the developer who created this project, you can donate', '');
translateTextContent('Congratulations, you managed to level up and as a reward you got the following item:', '');
translateTextContent('by clicking here!', '');

//all game translation
translateTextContent('Welcome Back', '');
translateTextContent('Game Settings', '');
translateTextContent('Level Up!', '');
translateTextContent('How to Play', '');
translateTextContent('Donate', '');
translateTextContent('Before Start', '');
translateTextContent('This game uses your browser\'s cookies and local storage to store data about your gameplay', '');
translateTextContent('Player\'s Name', '');
translateTextContent('More Time', '');
translateTextContent('Time Freeze', '');
translateTextContent('Double Points', '');
translateTextContent('Perfect Roll', '');
translateTextContent('Powers Disabled', '');
translateTextContent('Powers Enabled', '');
translateTextContent('Activating powers in: ', '');
translateTextContent('Save', '');
translateTextContent('Back', '');
translateTextContent('Exit', '');
translateTextContent('Play', '');
translateTextContent('Continue', '');
translateTextContent('Language', '');
translateTextContent('Start Game', '');
translateTextContent('Shopping', '');
translateTextContent('Help', '');
translateTextContent('Music', '');
translateTextContent('Volume', '');
translateTextContent('Sound FX Volume', '');
translateTextContent('The button below will erase ALL STORAGE DATA from your device', '');
translateTextContent('All data deleted with successful! (Refresh the game to apply)', '');
translateTextContent('Clear all Data', '');
translateTextContent('World of Colors', '');
translateTextContent('World of Snow', '');
translateTextContent('World of Water', '');
translateTextContent('World of Space', '');
translateTextContent('World of Jungle', '');
translateTextContent('Challenges', '');
translateTextContent('level', '');
translateTextContent('page', '');
translateTextContent('Find all', '');
translateTextContent('Items', '');
translateTextContent(' Itens within ', '');
translateTextContent('Do your best time and score in this mode', '');
translateTextContent('Your Time: ', '');
translateTextContent('time.', '');
translateTextContent('score', '');
translateTextContent('hits', '');
translateTextContent('Star acquired!', '');
translateTextContent('Ooops!', '');
translateTextContent('max errors: ', '');
translateTextContent('errors', '');
translateTextContent('acceptable', '');
translateTextContent('congratulations', '');
translateTextContent('Select a World Stage', '');
translateTextContent('needed', '');
translateTextContent('goals', '');
translateTextContent('starting in: ', '');
translateTextContent('start', '');
translateTextContent('Up to ', '');
translateTextContent('Left: ', '');
translateTextContent('New Best', '');
           break;*/ //That's it! Simple Like That!
        case 'es':
            //powers translations
            translateTextContent('Add more time to your game.', 'Agrega más tiempo a tu juego.');
            translateTextContent('Freeze the time to obtain more squares and points.', 'Congela el tiempo para obtener más cuadros y puntos.');
            translateTextContent('Double your score points and money!', 'Duplica tus puntos de puntuación y dinero.');
            translateTextContent('If the match is hard, use this to auto select all the squares.', 'Si la partida es difícil, usa esto para seleccionar automáticamente todos los cuadros.');
            translateTextContent('Cooldown', 'Tiempo de espera');
            translateTextContent('Effect', 'Efecto');
            translateTextContent('Buy', 'Comprar');
            //tutorial home page translate
            translateTextContent('The game is based on challenging the player in increasingly difficult levels, focusing on speed and precision.', 'El juego se basa en desafiar al jugador en niveles cada vez más difíciles, centrándose en la velocidad y la precisión.');
            translateTextContent('Your objective is to find all the frames/objects that will be drawn randomly in each level within a stipulated time limit.', 'Tu objetivo es encontrar todos los cuadros/objetos que se dibujarán aleatoriamente en cada nivel dentro de un límite de tiempo estipulado.');
            translateTextContent('Also, the game will reset the position of the frames from time to time, forcing the player to be precise and attentive when selecting each frame.', 'Además, el juego restablecerá la posición de los cuadros de vez en cuando, obligando al jugador a ser preciso y atento al seleccionar cada cuadro.');
            translateTextContent('The game also has the possibility of completing objectives that are shown by stars, which allows you to advance in the existing levels within the game, as well as rewarding you with a fictitious amount of money so that you can buy items in the store to help you in the challenges you will encounter!', 'El juego también tiene la posibilidad de completar objetivos que se muestran mediante estrellas, lo que te permite avanzar en los niveles existentes dentro del juego, además de recompensarte con una cantidad ficticia de dinero para que puedas comprar objetos en la tienda que te ayudarán en los desafíos que encontrarás.');
            translateTextContent('For more details, access the "Help" option in the game\'s main menu and have a good game!', 'Para obtener más detalles, accede a la opción "Ayuda" en el menú principal del juego y disfruta del juego!');
            translateTextContent('This game was created just for fun, therefore it is not intended for profit or commercialization, it is literally a game made with love and dedication!', 'Este juego fue creado solo por diversión, por lo tanto, no está destinado a obtener beneficios o comercialización, es literalmente un juego hecho con amor y dedicación.');
            translateTextContent('But if you liked the game and want to help the developer who created this project, you can donate', 'Pero si te gusta el juego y quieres ayudar al desarrollador que creó este proyecto, puedes donar');
            translateTextContent('Congratulations, you managed to level up and as a reward you got the following item:', 'Felicitaciones, lograste subir de nivel y como recompensa obtuviste el siguiente objeto:');
            translateTextContent('by clicking here!', '¡haciendo clic aquí!');
            //all game translation
            translateTextContent('Welcome Back', 'Bienvenido de nuevo');
            translateTextContent('Game Settings', 'Configuración del juego');
            translateTextContent('Level Up!', '¡Sube de nivel!');
            translateTextContent('How to Play', 'Cómo jugar');
            translateTextContent('Donate', 'Donar');
            translateTextContent('Before Start', 'Antes de comenzar');
            translateTextContent('This game uses your browser\'s cookies and local storage to store data about your gameplay', 'Este juego utiliza las cookies y el almacenamiento local de tu navegador para almacenar datos sobre tu juego');
            translateTextContent('Player\'s Name', 'Nombre del jugador');
            translateTextContent('More Time', 'Más tiempo');
            translateTextContent('Time Freeze', 'Congelación de tiempo');
            translateTextContent('Double Points', 'Duplicar puntos');
            translateTextContent('Perfect Roll', 'Tirada perfecta');
            translateTextContent('Powers Disabled', 'Poderes desactivados');
            translateTextContent('Powers Enabled', 'Poderes activados');
            translateTextContent('Activating powers in: ', 'Activando poderes en: ');
            translateTextContent('Save', 'Guardar');
            translateTextContent('Back', 'Volver');
            translateTextContent('Exit', 'Salir');
            translateTextContent('Play', 'Jugar');
            translateTextContent('Continue', 'Continuar');
            translateTextContent('Language', 'Idioma');
            translateTextContent('Start Game', 'Comenzar juego');
            translateTextContent('Shopping', 'Tienda');
            translateTextContent('Help', 'Ayuda');
            translateTextContent('Music', 'Música');
            translateTextContent('Volume', 'Volumen');
            translateTextContent('Sound FX Volume', 'Volumen de efectos de sonido');
            translateTextContent('The button below will erase ALL STORAGE DATA from your device', 'El botón a continuación borrará TODOS LOS DATOS DE ALMACENAMIENTO de tu dispositivo');
            translateTextContent('All data deleted with successful! (Refresh the game to apply)', '¡Todos los datos se han eliminado correctamente! (Actualiza el juego para aplicar los cambios)');
            translateTextContent('Clear all Data', 'Borrar todos los datos');
            translateTextContent('World of Colors', 'Mundo de los colores');
            translateTextContent('World of Snow', 'Mundo de la nieve');
            translateTextContent('World of Water', 'Mundo del agua');
            translateTextContent('World of Space', 'Mundo del espacio');
            translateTextContent('World of Jungle', 'Mundo de la jungla');
            translateTextContent('Challenges', 'Desafíos');
            translateTextContent('level', 'nivel');
            translateTextContent('page', 'página');
            translateTextContent('Find all', 'Encuentra todos los');
            translateTextContent('Items', 'objetos');
            translateTextContent(' Itens within ', ' objetos en un plazo de ');
            translateTextContent('Do your best time and score in this mode', 'Haz tu mejor tiempo y puntaje en este modo');
            translateTextContent('Your Time: ', 'Tu tiempo: ');
            translateTextContent('time.', '');
            translateTextContent('score', 'puntuación');
            translateTextContent('hits', 'aciertos');
            translateTextContent('Star acquired!', '¡Estrella adquirida!');
            translateTextContent('Ooops!', '¡Ups!');
            translateTextContent('max errors: ', 'errores máximos: ');
            translateTextContent('errors', 'errores');
            translateTextContent('acceptable', 'aceptables');
            translateTextContent('congratulations', 'felicitaciones');
            translateTextContent('Select a World Stage', 'Selecciona una etapa del mundo');
            translateTextContent('needed', 'necesarios');
            translateTextContent('goals', 'objetivos');
            translateTextContent('starting in: ', 'comenzando en: ');
            translateTextContent('start', 'Comenzar');
            translateTextContent('Up to ', 'Hasta ');
            translateTextContent('Left: ', 'Restante: ');
            translateTextContent('New Best', 'Nuevo récord');
            break;
        case 'de':
            //powers translations
            translateTextContent('Add more time to your game.', 'Fügen Sie Ihrem Spiel mehr Zeit hinzu.');
            translateTextContent('Freeze the time to obtain more squares and points.', 'Einfrieren der Zeit, um mehr Quadrate und Punkte zu erhalten.');
            translateTextContent('Double your score points and money!', 'Verdoppeln Sie Ihre Punktzahl und Ihr Geld!');
            translateTextContent('If the match is hard, use this to auto select all the squares.', 'Wenn das Spiel schwierig ist, verwenden Sie dies, um automatisch alle Quadrate auszuwählen.');
            translateTextContent('Cooldown', 'Abklingzeit');
            translateTextContent('Effect', 'Effekt');
            translateTextContent('Buy', 'Kaufen');
            //tutorial home page translate
            translateTextContent('The game is based on challenging the player in increasingly difficult levels, focusing on speed and precision.', 'Das Spiel basiert auf der Herausforderung des Spielers in immer schwierigeren Levels und konzentriert sich auf Geschwindigkeit und Präzision.');
            translateTextContent('Your objective is to find all the frames/objects that will be drawn randomly in each level within a stipulated time limit.', 'Ihr Ziel ist es, alle Rahmen/Objekte zu finden, die in jedem Level zufällig gezeichnet werden, innerhalb einer festgelegten Zeitgrenze.');
            translateTextContent('Also, the game will reset the position of the frames from time to time, forcing the player to be precise and attentive when selecting each frame.', 'Außerdem wird das Spiel die Position der Rahmen von Zeit zu Zeit zurücksetzen und den Spieler dazu zwingen, präzise und aufmerksam zu sein, wenn er jeden Rahmen auswählt.');
            translateTextContent('The game also has the possibility of completing objectives that are shown by stars, which allows you to advance in the existing levels within the game, as well as rewarding you with a fictitious amount of money so that you can buy items in the store to help you in the challenges you will encounter!', 'Das Spiel bietet auch die Möglichkeit, Ziele zu erreichen, die durch Sterne angezeigt werden, was es Ihnen ermöglicht, in den vorhandenen Levels im Spiel voranzukommen und Sie mit einer fiktiven Geldmenge zu belohnen, damit Sie im Geschäft Artikel kaufen können, die Ihnen bei den Herausforderungen, auf die Sie stoßen werden, helfen.');
            translateTextContent('For more details, access the "Help" option in the game\'s main menu and have a good game!', 'Für weitere Informationen greifen Sie auf die Option "Hilfe" im Hauptmenü des Spiels zu und haben Sie ein gutes Spiel!');
            translateTextContent('This game was created just for fun, therefore it is not intended for profit or commercialization, it is literally a game made with love and dedication!', 'Dieses Spiel wurde nur zum Spaß erstellt und ist daher nicht für Gewinn oder Vermarktung gedacht. Es ist buchstäblich ein Spiel, das mit Liebe und Hingabe gemacht wurde!');
            translateTextContent('But if you liked the game and want to help the developer who created this project, you can donate', 'Aber wenn Ihnen das Spiel gefallen hat und Sie dem Entwickler, der dieses Projekt erstellt hat, helfen möchten, können Sie spenden');
            translateTextContent('Congratulations, you managed to level up and as a reward you got the following item:', 'Herzlichen Glückwunsch, Sie haben es geschafft, einen Level aufzusteigen, und als Belohnung haben Sie den folgenden Gegenstand erhalten:');
            translateTextContent('by clicking here!', 'hier klicken!');
            //all game translation
            translateTextContent('Welcome Back', 'Willkommen zurück');
            translateTextContent('Game Settings', 'Spiel Einstellungen');
            translateTextContent('Level Up!', 'Level aufsteigen!');
            translateTextContent('How to Play', 'Wie man spielt');
            translateTextContent('Donate', 'Spenden');
            translateTextContent('Before Start', 'Vor dem Start');
            translateTextContent('This game uses your browser\'s cookies and local storage to store data about your gameplay', 'Dieses Spiel verwendet Cookies und den lokalen Speicher Ihres Browsers, um Daten über Ihr Gameplay zu speichern');
            translateTextContent('Player\'s Name', 'Name des Spielers');
            translateTextContent('More Time', 'Mehr Zeit');
            translateTextContent('Time Freeze', 'Zeit einfrieren');
            translateTextContent('Double Points', 'Doppelte Punkte');
            translateTextContent('Perfect Roll', 'Perfekter Wurf');
            translateTextContent('Powers Disabled', 'Kräfte deaktiviert');
            translateTextContent('Powers Enabled', 'Kräfte aktiviert');
            translateTextContent('Activating powers in: ', 'Aktivierung von Kräften in: ');
            translateTextContent('Save', 'Speichern');
            translateTextContent('Back', 'Zurück');
            translateTextContent('Exit', 'Beenden');
            translateTextContent('Play', 'Spielen');
            translateTextContent('Continue', 'Weiter');
            translateTextContent('Language', 'Sprache');
            translateTextContent('Start Game', 'Spiel starten');
            translateTextContent('Shopping', 'Einkaufen');
            translateTextContent('Help', 'Hilfe');
            translateTextContent('Music', 'Musik');
            translateTextContent('Volume', 'Lautstärke');
            translateTextContent('Sound FX Volume', 'Soundeffekt Lautstärke');
            translateTextContent('The button below will erase ALL STORAGE DATA from your device', 'Die Schaltfläche unten löscht ALLE SPEICHERDATEN von Ihrem Gerät');
            translateTextContent('All data deleted with successful! (Refresh the game to apply)', 'Alle Daten wurden erfolgreich gelöscht! (Aktualisieren Sie das Spiel, um die Änderungen zu übernehmen)');
            translateTextContent('Clear all Data', 'Alle Daten löschen');
            translateTextContent('World of Colors', 'Welt der Farben');
            translateTextContent('World of Snow', 'Welt des Schnees');
            translateTextContent('World of Water', 'Welt des Wassers');
            translateTextContent('World of Space', 'Welt des Weltraums');
            translateTextContent('World of Jungle', 'Welt des Dschungels');
            translateTextContent('Challenges', 'Herausforderungen');
            translateTextContent('level', 'Level');
            translateTextContent('page', 'Seite');
            translateTextContent('Find all', 'Finde alle');
            translateTextContent('Items', 'Gegenstände');
            translateTextContent(' Itens within ', ' Gegenstände innerhalb ');
            translateTextContent('Do your best time and score in this mode', 'Erzielen Sie Ihre beste Zeit und Punktzahl in diesem Modus');
            translateTextContent('Your Time: ', 'Deine Zeit: ');
            translateTextContent('time.', '');
            translateTextContent('score', 'Punktzahl');
            translateTextContent('hits', 'Treffer');
            translateTextContent('Star acquired!', 'Stern erworben!');
            translateTextContent('Ooops!', 'Hoppla!');
            translateTextContent('max errors: ', 'maximale Fehler: ');
            translateTextContent('errors', 'Fehler');
            translateTextContent('acceptable', 'akzeptabel');
            translateTextContent('congratulations', 'Herzlichen Glückwunsch');
            translateTextContent('Select a World Stage', 'Wähle eine Weltbühne');
            translateTextContent('needed', 'benötigt');
            translateTextContent('goals', 'Ziele');
            translateTextContent('starting in: ', 'Beginnt in: ');
            translateTextContent('start', 'Start');
            translateTextContent('Up to ', 'Bis zu ');
            translateTextContent('Left: ', 'Übrig: ');
            translateTextContent('New Best', 'Neuer Rekord');
            break;
        case 'fr':
            //powers translations
            translateTextContent('Add more time to your game.', 'Ajoutez plus de temps à votre jeu.');
            translateTextContent('Freeze the time to obtain more squares and points.', 'Geler le temps pour obtenir plus de carrés et de points.');
            translateTextContent('Double your score points and money!', 'Doublez votre score et votre argent!');
            translateTextContent('If the match is hard, use this to auto select all the squares.', 'Si le match est difficile, utilisez ceci pour sélectionner automatiquement tous les carrés.');
            translateTextContent('Cooldown', 'Temps de recharge');
            translateTextContent('Effect', 'Effet');
            translateTextContent('Buy', 'Acheter');
            //tutorial home page translate
            translateTextContent('The game is based on challenging the player in increasingly difficult levels, focusing on speed and precision.', 'Le jeu est basé sur le défi du joueur dans des niveaux de plus en plus difficiles, en mettant l\'accent sur la vitesse et la précision.');
            translateTextContent('Your objective is to find all the frames/objects that will be drawn randomly in each level within a stipulated time limit.', 'Votre objectif est de trouver tous les cadres/objets qui seront tirés au hasard à chaque niveau dans une limite de temps stipulée.');
            translateTextContent('Also, the game will reset the position of the frames from time to time, forcing the player to be precise and attentive when selecting each frame.', 'De plus, le jeu réinitialisera la position des cadres de temps en temps, obligeant le joueur à être précis et attentif lors de la sélection de chaque cadre.');
            translateTextContent('The game also has the possibility of completing objectives that are shown by stars, which allows you to advance in the existing levels within the game, as well as rewarding you with a fictitious amount of money so that you can buy items in the store to help you in the challenges you will encounter!', 'Le jeu offre également la possibilité de remplir des objectifs qui sont indiqués par des étoiles, ce qui vous permet d\'avancer dans les niveaux existants du jeu, tout en vous récompensant avec une somme fictive d\'argent afin que vous puissiez acheter des objets dans le magasin pour vous aider dans les défis que vous rencontrerez!');
            translateTextContent('For more details, access the "Help" option in the game\'s main menu and have a good game!', 'Pour plus de détails, accédez à l\'option "Aide" dans le menu principal du jeu et amusez-vous bien!');
            translateTextContent('This game was created just for fun, therefore it is not intended for profit or commercialization, it is literally a game made with love and dedication!', 'Ce jeu a été créé juste pour le plaisir, il n\'est donc pas destiné à un profit ou à une commercialisation, c\'est littéralement un jeu fait avec amour et dévouement!');
            translateTextContent('But if you liked the game and want to help the developer who created this project, you can donate', 'Mais si vous avez aimé le jeu et que vous voulez aider le développeur qui a créé ce projet, vous pouvez faire un don');
            translateTextContent('Congratulations, you managed to level up and as a reward you got the following item:', 'Félicitations, vous avez réussi à passer au niveau supérieur et en récompense, vous avez obtenu l\'objet suivant:');
            translateTextContent('by clicking here!', 'en cliquant ici!');
            //all game translation
            translateTextContent('Welcome Back', 'Bienvenue');
            translateTextContent('Game Settings', 'Paramètres du jeu');
            translateTextContent('Level Up!', 'Passer au niveau supérieur!');
            translateTextContent('How to Play', 'Comment jouer');
            translateTextContent('Donate', 'Faire un don');
            translateTextContent('Before Start', 'Avant de commencer');
            translateTextContent('This game uses your browser\'s cookies and local storage to store data about your gameplay', 'Ce jeu utilise les cookies de votre navigateur et le stockage local pour stocker des données sur votre jeu');
            translateTextContent('Player\'s Name', 'Nom du joueur');
            translateTextContent('More Time', 'Plus de temps');
            translateTextContent('Time Freeze', 'Blocage du temps');
            translateTextContent('Double Points', 'Points Doublés');
            translateTextContent('Perfect Roll', 'Lancer Parfait');
            translateTextContent('Powers Disabled', 'Pouvoirs désactivés');
            translateTextContent('Powers Enabled', 'Pouvoirs activés');
            translateTextContent('Activating powers in: ', 'Activation des pouvoirs dans: ');
            translateTextContent('Save', 'Enregistrer');
            translateTextContent('Back', 'Retour');
            translateTextContent('Exit', 'Quitter');
            translateTextContent('Play', 'Jouer');
            translateTextContent('Continue', 'Continuer');
            translateTextContent('Language', 'Langue');
            translateTextContent('Start Game', 'Démarrer le jeu');
            translateTextContent('Shopping', 'Achats');
            translateTextContent('Help', 'Aide');
            translateTextContent('Music', 'Musique');
            translateTextContent('Volume', 'Volume');
            translateTextContent('Sound FX Volume', 'Volume des effets sonores');
            translateTextContent('The button below will erase ALL STORAGE DATA from your device', 'Le bouton ci-dessous effacera TOUTES LES DONNÉES DE STOCKAGE de votre appareil');
            translateTextContent('All data deleted with successful! (Refresh the game to apply)', 'Toutes les données ont été supprimées avec succès! (Rafraîchissez le jeu pour appliquer)');
            translateTextContent('Clear all Data', 'Effacer toutes les données');
            translateTextContent('World of Colors', 'Monde des Couleurs');
            translateTextContent('World of Snow', 'Monde de la Neige');
            translateTextContent('World of Water', 'Monde de l\'Eau');
            translateTextContent('World of Space', 'Monde de l\'Espace');
            translateTextContent('World of Jungle', 'Monde de la Jungle');
            translateTextContent('Challenges', 'Défis');
            translateTextContent('level', 'niveau');
            translateTextContent('page', 'page');
            translateTextContent('Find all', 'Trouvez tous les');
            translateTextContent('Items', 'Objets');
            translateTextContent(' Itens within ', ' Objets dans ');
            translateTextContent('Do your best time and score in this mode', 'Faites votre meilleur temps et votre meilleur score dans ce mode');
            translateTextContent('Your Time: ', 'Votre temps: ');
            translateTextContent('time.', '');
            translateTextContent('score', 'score');
            translateTextContent('hits', 'coups');
            translateTextContent('Star acquired!', 'Étoile acquise!');
            translateTextContent('Ooops!', 'Oups!');
            translateTextContent('max errors: ', 'erreurs maximales: ');
            translateTextContent('errors', 'erreurs');
            translateTextContent('acceptable', 'acceptable');
            translateTextContent('congratulations', 'Félicitations');
            translateTextContent('Select a World Stage', 'Sélectionnez une étape mondiale');
            translateTextContent('needed', 'nécessaires');
            translateTextContent('goals', 'objectifs');
            translateTextContent('starting in: ', 'démarrage dans: ');
            translateTextContent('start', 'Démarrer');
            translateTextContent('Up to ', 'Jusqu\'à ');
            translateTextContent('Left: ', 'Restant: ');
            translateTextContent('New Best', 'Nouveau Meilleur');
            break;
        case 'it':
            //powers translations
            translateTextContent('Add more time to your game.', 'Aggiungi più tempo al tuo gioco.');
            translateTextContent('Freeze the time to obtain more squares and points.', 'Congela il tempo per ottenere più quadrati e punti.');
            translateTextContent('Double your score points and money!', 'Duplica i tuoi punti e i tuoi soldi!');
            translateTextContent('If the match is hard, use this to auto select all the squares.', 'Se la partita è difficile, usa questo per selezionare automaticamente tutti i quadrati.');
            translateTextContent('Cooldown', 'Tempo di recupero');
            translateTextContent('Effect', 'Effetto');
            translateTextContent('Buy', 'Acquista');
            //tutorial home page translate
            translateTextContent('The game is based on challenging the player in increasingly difficult levels, focusing on speed and precision.', 'Il gioco si basa sulla sfida del giocatore in livelli sempre più difficili, concentrandosi sulla velocità e la precisione.');
            translateTextContent('Your objective is to find all the frames/objects that will be drawn randomly in each level within a stipulated time limit.', 'Il tuo obiettivo è trovare tutti i frame/oggetti che saranno disegnati casualmente in ogni livello entro un limite di tempo prestabilito.');
            translateTextContent('Also, the game will reset the position of the frames from time to time, forcing the player to be precise and attentive when selecting each frame.', 'Inoltre, il gioco reimposterà la posizione dei frame di tanto in tanto, costringendo il giocatore ad essere preciso e attento nella selezione di ogni frame.');
            translateTextContent('The game also has the possibility of completing objectives that are shown by stars, which allows you to advance in the existing levels within the game, as well as rewarding you with a fictitious amount of money so that you can buy items in the store to help you in the challenges you will encounter!', 'Il gioco offre anche la possibilità di completare obiettivi che vengono mostrati dalle stelle, ciò ti permette di avanzare nei livelli esistenti all\'interno del gioco, oltre a ricompensarti con una quantità di denaro fittizia in modo da poter acquistare oggetti nel negozio per aiutarti nelle sfide che incontrerai!');
            translateTextContent('For more details, access the "Help" option in the game\'s main menu and have a good game!', 'Per ulteriori dettagli, accedi all\'opzione "Aiuto" nel menu principale del gioco e buon divertimento!');
            translateTextContent('This game was created just for fun, therefore it is not intended for profit or commercialization, it is literally a game made with love and dedication!', 'Questo gioco è stato creato solo per divertimento, quindi non è inteso per scopi di lucro o commercializzazione, è letteralmente un gioco fatto con amore e dedizione!');
            translateTextContent('But if you liked the game and want to help the developer who created this project, you can donate', 'Ma se ti è piaciuto il gioco e vuoi aiutare lo sviluppatore che ha creato questo progetto, puoi fare una donazione');
            translateTextContent('Congratulations, you managed to level up and as a reward you got the following item:', 'Congratulazioni, sei riuscito a salire di livello e come ricompensa hai ottenuto il seguente oggetto:');
            translateTextContent('by clicking here!', 'cliccando qui!');
            //all game translation
            translateTextContent('Welcome Back', 'Benvenuto');
            translateTextContent('Game Settings', 'Impostazioni di gioco');
            translateTextContent('Level Up!', 'Salire di livello!');
            translateTextContent('How to Play', 'Come giocare');
            translateTextContent('Donate', 'Donare');
            translateTextContent('Before Start', 'Prima di iniziare');
            translateTextContent('This game uses your browser\'s cookies and local storage to store data about your gameplay', 'Questo gioco utilizza i cookie del tuo browser e lo storage locale per archiviare i dati sul tuo gameplay');
            translateTextContent('Player\'s Name', 'Nome del giocatore');
            translateTextContent('More Time', 'Più tempo');
            translateTextContent('Time Freeze', 'Congela tempo');
            translateTextContent('Double Points', 'Punti doppi');
            translateTextContent('Perfect Roll', 'Lancio perfetto');
            translateTextContent('Powers Disabled', 'Poteri disattivati');
            translateTextContent('Powers Enabled', 'Poteri abilitati');
            translateTextContent('Activating powers in: ', 'Attivazione dei poteri in: ');
            translateTextContent('Save', 'Salva');
            translateTextContent('Back', 'Indietro');
            translateTextContent('Exit', 'Esci');
            translateTextContent('Play', 'Gioca');
            translateTextContent('Continue', 'Continua');
            translateTextContent('Language', 'Lingua');
            translateTextContent('Start Game', 'Avvia gioco');
            translateTextContent('Shopping', 'Negozio');
            translateTextContent('Help', 'Aiuto');
            translateTextContent('Music', 'Musica');
            translateTextContent('Volume', 'Volume');
            translateTextContent('Sound FX Volume', 'Volume effetti sonori');
            translateTextContent('The button below will erase ALL STORAGE DATA from your device', 'Il pulsante sottostante cancellerà TUTTI I DATI DI ARCHIVIAZIONE dal tuo dispositivo');
            translateTextContent('All data deleted with successful! (Refresh the game to apply)', 'Tutti i dati cancellati con successo! (Aggiorna il gioco per applicare)');
            translateTextContent('Clear all Data', 'Cancella tutti i dati');
            translateTextContent('World of Colors', 'Mondo dei Colori');
            translateTextContent('World of Snow', 'Mondo della Neve');
            translateTextContent('World of Water', 'Mondo dell\'Acqua');
            translateTextContent('World of Space', 'Mondo dello Spazio');
            translateTextContent('World of Jungle', 'Mondo della Giungla');
            translateTextContent('Challenges', 'Sfide');
            translateTextContent('level', 'livello');
            translateTextContent('page', 'pagina');
            translateTextContent('Find all', 'Trova tutti gli');
            translateTextContent('Items', 'Oggetti');
            translateTextContent(' Itens within ', ' Oggetti entro ');
            translateTextContent('Do your best time and score in this mode', 'Fai del tuo meglio in termini di tempo e punteggio in questa modalità');
            translateTextContent('Your Time: ', 'Il tuo tempo: ');
            translateTextContent('time.', '');
            translateTextContent('score', 'punteggio');
            translateTextContent('hits', 'colpi');
            translateTextContent('Star acquired!', 'Stella acquisita!');
            translateTextContent('Ooops!', 'Ops!');
            translateTextContent('max errors: ', 'errori massimi: ');
            translateTextContent('errors', 'errori');
            translateTextContent('acceptable', 'accettabili');
            translateTextContent('congratulations', 'Congratulazioni');
            translateTextContent('Select a World Stage', 'Seleziona una fase del mondo');
            translateTextContent('needed', 'necessari');
            translateTextContent('goals', 'obiettivi');
            translateTextContent('starting in: ', 'inizio in: ');
            translateTextContent('start', 'Inizia');
            translateTextContent('Up to ', 'Fino a ');
            translateTextContent('Left: ', 'Rimasti: ');
            translateTextContent('New Best', 'Nuovo Record');
            break;
        case 'pl':
            //powers translations
            translateTextContent('Add more time to your game.', 'Dodaj więcej czasu do gry.');
            translateTextContent('Freeze the time to obtain more squares and points.', 'Zamroź czas, aby zdobyć więcej kwadratów i punktów.');
            translateTextContent('Double your score points and money!', 'Podwój swoje punkty i pieniądze!');
            translateTextContent('If the match is hard, use this to auto select all the squares.', 'Jeśli mecz jest trudny, użyj tej funkcji, aby automatycznie wybrać wszystkie kwadraty.');
            translateTextContent('Cooldown', 'Czas odnowienia');
            translateTextContent('Effect', 'Efekt');
            translateTextContent('Buy', 'Kup');
            //tutorial home page translate
            translateTextContent('The game is based on challenging the player in increasingly difficult levels, focusing on speed and precision.', 'Gra polega na wyzwaniu gracza w coraz trudniejszych poziomach, skupiając się na szybkości i precyzji.');
            translateTextContent('Your objective is to find all the frames/objects that will be drawn randomly in each level within a stipulated time limit.', 'Twoim celem jest znalezienie wszystkich ramek/obiektów, które będą losowo rysowane na każdym poziomie w określonym czasie.');
            translateTextContent('Also, the game will reset the position of the frames from time to time, forcing the player to be precise and attentive when selecting each frame.', 'Gra będzie również od czasu do czasu resetować pozycję ramek, zmuszając gracza do precyzyjnego i uważnego wybierania każdej ramki.');
            translateTextContent('The game also has the possibility of completing objectives that are shown by stars, which allows you to advance in the existing levels within the game, as well as rewarding you with a fictitious amount of money so that you can buy items in the store to help you in the challenges you will encounter!', 'Gra daje także możliwość ukończenia celów, które są pokazywane gwiazdkami, co pozwala ci awansować w istniejących poziomach w grze, a także nagradza cię fikcyjną ilością pieniędzy, dzięki którym możesz kupować przedmioty w sklepie, aby pomóc ci w wyzwaniach, które napotkasz!');
            translateTextContent('For more details, access the "Help" option in the game\'s main menu and have a good game!', 'Aby uzyskać więcej informacji, skorzystaj z opcji "Pomoc" w głównym menu gry i miłej zabawy!');
            translateTextContent('This game was created just for fun, therefore it is not intended for profit or commercialization, it is literally a game made with love and dedication!', 'Ta gra została stworzona tylko dla zabawy, dlatego nie ma na celu osiągnięcia zysku ani komercjalizacji, jest to dosłownie gra stworzona z miłością i oddaniem!');
            translateTextContent('But if you liked the game and want to help the developer who created this project, you can donate', 'Ale jeśli spodobała ci się gra i chcesz pomóc twórcy tego projektu, możesz dokonać darowizny');
            translateTextContent('Congratulations, you managed to level up and as a reward you got the following item:', 'Gratulacje, udało ci się zdobyć kolejny poziom, a jako nagrodę otrzymujesz następujący przedmiot:');
            translateTextContent('by clicking here!', 'klikając tutaj!');
            //all game translation
            translateTextContent('Welcome Back', 'Witamy z powrotem');
            translateTextContent('Game Settings', 'Ustawienia gry');
            translateTextContent('Level Up!', 'Podwyżka poziomu!');
            translateTextContent('How to Play', 'Jak grać');
            translateTextContent('Donate', 'Wesprzyj');
            translateTextContent('Before Start', 'Przed rozpoczęciem');
            translateTextContent('This game uses your browser\'s cookies and local storage to store data about your gameplay', 'Ta gra używa plików cookie przeglądarki i pamięci lokalnej do przechowywania danych o twojej rozgrywce');
            translateTextContent('Player\'s Name', 'Imię gracza');
            translateTextContent('More Time', 'Więcej czasu');
            translateTextContent('Time Freeze', 'Zamrożenie czasu');
            translateTextContent('Double Points', 'Podwojenie punktów');
            translateTextContent('Perfect Roll', 'Doskonałe trafienie');
            translateTextContent('Powers Disabled', 'Wyłączone umiejętności');
            translateTextContent('Powers Enabled', 'Włączone umiejętności');
            translateTextContent('Activating powers in: ', 'Aktywacja umiejętności za: ');
            translateTextContent('Save', 'Zapisz');
            translateTextContent('Back', 'Powrót');
            translateTextContent('Exit', 'Wyjdź');
            translateTextContent('Play', 'Graj');
            translateTextContent('Continue', 'Kontynuuj');
            translateTextContent('Language', 'Język');
            translateTextContent('Start Game', 'Rozpocznij grę');
            translateTextContent('Shopping', 'Sklep');
            translateTextContent('Help', 'Pomoc');
            translateTextContent('Music', 'Muzyka');
            translateTextContent('Volume', 'Głośność');
            translateTextContent('Sound FX Volume', 'Głośność dźwięków');
            translateTextContent('The button below will erase ALL STORAGE DATA from your device', 'Poniższy przycisk usunie WSZYSTKIE DANE Z PAMIĘCI TWOJEGO URZĄDZENIA');
            translateTextContent('All data deleted with successful! (Refresh the game to apply)', 'Wszystkie dane zostały pomyślnie usunięte! (Odśwież grę, aby zastosować zmiany)');
            translateTextContent('Clear all Data', 'Wyczyść wszystkie dane');
            translateTextContent('World of Colors', 'Świat Kolorów');
            translateTextContent('World of Snow', 'Świat Śniegu');
            translateTextContent('World of Water', 'Świat Wody');
            translateTextContent('World of Space', 'Świat Kosmosu');
            translateTextContent('World of Jungle', 'Świat Dżungli');
            translateTextContent('Challenges', 'Wyzwania');
            translateTextContent('level', 'poziom');
            translateTextContent('page', 'strona');
            translateTextContent('Find all', 'Znajdź wszystkie');
            translateTextContent('Items', 'Przedmioty');
            translateTextContent(' Itens within ', ' Przedmiotów w ciągu ');
            translateTextContent('Do your best time and score in this mode', 'Osiągnij jak najlepszy czas i wynik w tym trybie');
            translateTextContent('Your Time: ', 'Twój czas: ');
            translateTextContent('time.', '');
            translateTextContent('score', 'wynik');
            translateTextContent('hits', 'trafienia');
            translateTextContent('Star acquired!', 'Zdobyta gwiazdka!');
            translateTextContent('Ooops!', 'Ups!');
            translateTextContent('max errors: ', 'maksymalna liczba błędów: ');
            translateTextContent('errors', 'błędy');
            translateTextContent('acceptable', 'akceptowalne');
            translateTextContent('congratulations', 'Gratulacje');
            translateTextContent('Select a World Stage', 'Wybierz świat');
            translateTextContent('needed', 'potrzebne');
            translateTextContent('goals', 'cele');
            translateTextContent('starting in: ', 'rozpoczyna się za: ');
            translateTextContent('start', 'Start');
            translateTextContent('Up to ', 'Do ');
            translateTextContent('Left: ', 'Pozostało: ');
            translateTextContent('New Best', 'Nowy rekord');
            break;
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
            translateTextContent('Congratulations, you managed to level up and as a reward you got the following item:', 'Parabéns, você conseguiu subir de nível e como recompensa você ganhou o seguinte item:');
            translateTextContent('by clicking here!', 'clicando aqui!');
            //all game translation
            translateTextContent('Welcome Back', 'Bem-Vindo de Volta');
            translateTextContent('Game Settings', 'Ajustes de Jogo');
            translateTextContent('Level Up!', 'Subiu de Nível!');
            translateTextContent('How to Play', 'Como Jogar');
            translateTextContent('Donate', 'Doe aqui');
            translateTextContent('Before Start', 'Antes de Começar');
            translateTextContent('This game uses your browser\'s cookies and local storage to store data about your gameplay', 'Este jogo usa os cookies do seu navegador e armazenamento local para armazenar dados sobre o seu jogo');
            translateTextContent('Player\'s Name', 'Nome de Jogador');
            translateTextContent('More Time', 'Tempo Extra');
            translateTextContent('Time Freeze', 'Congela Tempo');
            translateTextContent('Double Points', 'Pontos Dobrados');
            translateTextContent('Perfect Roll', 'Rodada Perfeita');
            translateTextContent('Powers Disabled', 'Poderes Inativos');
            translateTextContent('Powers Enabled', 'Poderes Ativos');
            translateTextContent('Activating powers in: ', 'Ativando poderes em: ');
            translateTextContent('Save', 'Salvar');
            translateTextContent('Back', 'Voltar');
            translateTextContent('Exit', 'Sair');
            translateTextContent('Play', 'Jogar');
            translateTextContent('Continue', 'Continuar');
            translateTextContent('Language', 'Idioma');
            translateTextContent('Start Game', 'Inicar Jogo');
            translateTextContent('Shopping', 'Loja');
            translateTextContent('Help', 'Ajuda');
            translateTextContent('Music', 'Música');
            translateTextContent('Volume', 'Volume');
            translateTextContent('Sound FX Volume', 'Volume SFX');
            translateTextContent('The button below will erase ALL STORAGE DATA from your device', 'O botão abaixo apagará TODOS OS DADOS DE ARMAZENAMENTO do seu dispositivo');
            translateTextContent('All data deleted with successful! (Refresh the game to apply)', 'Todos os dados excluídos com sucesso! (Atualize o jogo para aplicar)');
            translateTextContent('Clear all Data', 'Limpar Dados');
            translateTextContent('World of Colors', 'Mundo das Cores');
            translateTextContent('World of Snow', 'Mundo do Gelo');
            translateTextContent('World of Water', 'Mundo da Água');
            translateTextContent('World of Space', 'Mundo do Espaço');
            translateTextContent('World of Jungle', 'Mundo da Floresta');
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
            translateTextContent('Star acquired!', 'Estrela Obtida!');
            translateTextContent('Ooops!', 'Ooops!');
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