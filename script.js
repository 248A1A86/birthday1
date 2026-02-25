
function showSurprise(){
    document.getElementById("surprise").style.display = "block";
    var media = document.getElementById("music");
    media.muted = false;
    media.play();
}
