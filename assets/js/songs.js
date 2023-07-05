/*
|-------------------------------------
|   CONSTANTS TO CONTROL DE SOUNDS
|-------------------------------------
|
|*/
const AUDIO = document.querySelector('#song');
const SFX = document.querySelector('#soundFx');

function playSFX(songPath, anotherElement = false){
    let audioElement = anotherElement ? document.querySelector(anotherElement) : SFX;

    songPath = (songPath.replace("songs/", "")).replace("/songs/", "");
    audioElement.src = "songs/sound_fx/" + (songPath.replace("sound_fx/", "")).replace("/sound_fx/", "");
    audioElement.addEventListener('canplaythrough', function () {
        audioElement.play();
    });
    audioElement.load();
}

function playSong(songPath, anotherElement = false){
    let audioElement = anotherElement ? document.querySelector(anotherElement) : AUDIO;

    //If has song with different source from audio, then start to play
    if(getBaseUrl()+"songs/"+songPath != audioElement.src){
        audioElement.src = "songs/"+(songPath.replace("songs/", "")).replace("/songs/", "");
        audioElement.addEventListener('canplaythrough', function() {
            audioElement.play();
        });
        audioElement.load();
    }

    changeMasterVolume(PLAYER.getMainVolume());
    changeFxVolume(PLAYER.getFxVolume());
}

function stopStartSong(anotherElement = false){
    let audioElement = anotherElement ? document.querySelector(anotherElement) : AUDIO;

    if (audioElement.paused) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
}

function togglePlayback(e, anotherElement = false) {
    let audioElement = anotherElement ? document.querySelector(anotherElement) : AUDIO;
    if(audioElement){
        if (audioElement.paused) {
            e.children[0].classList.remove('fa-play');
            e.children[0].classList.add('fa-pause');
            audioElement.play();
            PLAYER.setPauseMainVolume(0);
        } else {
            e.children[0].classList.add('fa-play');
            e.children[0].classList.remove('fa-pause');
            audioElement.pause();
            PLAYER.setPauseMainVolume(1);
        }
    }
}

function changeMasterVolume(volume, anotherElement = false) {
    let audioElement = anotherElement ? document.querySelector(anotherElement) : AUDIO;

    volume = volume.toString().replace("0.", "");
    audioElement.volume = volume == "10" ? 1 : "0."+volume;

    PLAYER.setMainVolume(volume);
}

function changeFxVolume(volume, anotherElement = false) {
    let audioElement = anotherElement ? document.querySelector(anotherElement) : SFX;

    volume = volume.toString().replace("0.", "");
    audioElement.volume = volume == "10" ? 1 : "0." + volume;

    PLAYER.setFxVolume(volume);
}
