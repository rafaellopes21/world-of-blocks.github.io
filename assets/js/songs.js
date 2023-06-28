const AUDIO = document.getElementById('song');
const SFX = document.getElementById('soundFx');

function startSFX(songPath){
    SFX.src = songPath;
    SFX.play();
}

function startSong(songPath){
    AUDIO.src = songPath;
    AUDIO.play();
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