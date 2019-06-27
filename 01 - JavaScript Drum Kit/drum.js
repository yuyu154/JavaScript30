function removeTransition(event) {
    const div = event.target;   
    if (event.type != "transitionend") {
        return;
    }
    div.classList.remove("playing");
}

function playSound(event) {
    const keyCode = event.keyCode;
    const div = document.querySelector(`div[data-key="${keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

    if (!audio) {
        return;
    }

    div.classList.add('playing');
    
    audio.currentTime = 0;
    audio.play();
    console.log(div);
    console.log(audio);
}

const keys = Array.from(document.querySelectorAll('.keys'));
console.log(keys);
keys.forEach(key => key.addEventListener("transitionend", removeTransition))
window.addEventListener("keydown", playSound);