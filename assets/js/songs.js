const AUDIO = document.getElementById('song');
const SFX = document.getElementById('soundFx');

function startSFX(songPath){
    SFX.src = "songs/" + (songPath.replace("songs/", "")).replace("/songs/", "");
    SFX.addEventListener('canplaythrough', function () {
        SFX.play();
    });
    SFX.load();
}

function startSong(songPath){
    if(getBaseUrl()+"songs/"+songPath != AUDIO.src){
        AUDIO.src = "songs/"+(songPath.replace("songs/", "")).replace("/songs/", "");
        AUDIO.addEventListener('canplaythrough', function() {
            AUDIO.play();
        });
        AUDIO.load();
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

function changeVolume(volume) {
    AUDIO.volume = volume == "10" ? 1 : "0."+volume;
}