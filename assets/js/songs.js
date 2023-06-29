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
var AUDIO_VOLUME = getVolume();

function playSFX(songPath){
    songPath = (songPath.replace("songs/", "")).replace("/songs/", "");
    SFX.src = "songs/sound_fx/" + (songPath.replace("sound_fx/", "")).replace("/sound_fx/", "");
    SFX.addEventListener('canplaythrough', function () {
        SFX.play();
    });
    SFX.load();
}

function playSong(songPath, anotherId = false){
    let audioElement = anotherId ? document.querySelector(anotherId) : AUDIO;

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
        saveVolume(audioValue);
        document.querySelector("#master-volume").value = getVolume();
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
    saveVolume(AUDIO.volume);
}

function saveVolume(volume){
    localStorage.setItem("main_volume", volume);
}

function getVolume(){
    let newVolume = localStorage.getItem("main_volume") ? localStorage.getItem("main_volume") : 6;
    changeVolume(newVolume);
    return newVolume;
}