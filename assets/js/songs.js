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
    if(document.querySelector("#master-volume")){
        let audioValue = AUDIO_VOLUME == 1 ? 10 : AUDIO_VOLUME.toString().replace("0.", "");
        document.querySelector("#master-volume").value = audioValue;
        changeVolume(audioValue);
    }
}

function togglePlayback(e) {
    if (AUDIO.paused) {
        e.innerHTML = "<i class='fa-solid fa-pause fix-icon-btn'></i> Music";
        AUDIO.play();
    } else {
        e.innerHTML = "<i class='fa-solid fa-play fix-icon-btn'></i> Music";
        AUDIO.pause();
    }
}

function changeVolume(volume = AUDIO_VOLUME) {
    volume = volume.toString().replace("0.", "");
    AUDIO.volume = volume == "10" ? 1 : "0."+volume;
    AUDIO_VOLUME = AUDIO.volume;
    savePlayerSettings('main_volume', AUDIO.volume);
}