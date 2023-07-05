/*
|-------------------------------------
|   CONSTANTS TO CONTROL DE SOUNDS
|-------------------------------------
|
|*/
const AUDIO = document.querySelector('#song');
const SFX = document.querySelector('#soundFx');

/*
|-------------------------------------
|   GLOBAL VARS TO CONTROL AUDIOS
|-------------------------------------
|
|*/
var AUDIO_VOLUME = getPlayerSettings('main_volume');

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

    //Set Audio Volume by History
    /*if(document.querySelector("#master-volume")){
        let audioValue = AUDIO_VOLUME == 1 ? 10 : AUDIO_VOLUME.toString().replace("0.", "");
        document.querySelector("#master-volume").value = audioValue;
        changeVolume(audioValue);
    }*/
    let audioValue = AUDIO_VOLUME == 1 ? 10 : AUDIO_VOLUME.toString().replace("0.", "");
    changeVolume(audioValue);
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
        } else {
            e.children[0].classList.add('fa-play');
            e.children[0].classList.remove('fa-pause');
            audioElement.pause();
        }
    }
}

function changeVolume(volume = AUDIO_VOLUME, anotherElement = false) {
    let audioElement = anotherElement ? document.querySelector(anotherElement) : AUDIO;

    volume = volume.toString().replace("0.", "");
    audioElement.volume = volume == "10" ? 1 : "0."+volume;

    AUDIO_VOLUME = audioElement.volume;
    savePlayerSettings('main_volume', audioElement.volume);
}