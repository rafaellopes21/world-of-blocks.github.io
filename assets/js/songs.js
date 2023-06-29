var AUDIO_VOLUME = 6;
const AUDIO = document.querySelector('#song');
const SFX = document.querySelector('#soundFx');

function startSFX(songPath){
    SFX.src = "songs/" + (songPath.replace("songs/", "")).replace("/songs/", "");
    SFX.addEventListener('canplaythrough', function () {
        SFX.play();
    });
    SFX.load();
}

function startSong(songPath){
    //If has song with different source from audio, then start to play
    if(getBaseUrl()+"songs/"+songPath != AUDIO.src){
        AUDIO.src = "songs/"+(songPath.replace("songs/", "")).replace("/songs/", "");
        AUDIO.addEventListener('canplaythrough', function() {
            AUDIO.play();
        });
        AUDIO.load();
    }

    //Set Audio Volume by History
    if(document.querySelector("#master-volume")){
        let audioValue = AUDIO_VOLUME == 1 ? 10 : AUDIO_VOLUME.toString().replace("0.", "");
        document.querySelector("#master-volume").value = audioValue;
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
    AUDIO.volume = volume == "10" ? 1 : "0."+volume;
    AUDIO_VOLUME = AUDIO.volume;
}