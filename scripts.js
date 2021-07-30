let keys = {"KeyA": "A", "KeyS": "S", "KeyD": "D", "KeyF": "F", "KeyG": "G", "KeyH": "H", "KeyJ": "J",
"KeyW": "W", "KeyE": "E", "KeyT": "T", "KeyY": "Y", "KeyU": "U"};

document.addEventListener("keydown", function(event){
    let keyPushed = event.code;

    if (keyPushed in keys){
        console.log("The '" + keys[keyPushed] + "' key is pressed");
        let audio = new Audio("media/" + keys[keyPushed] + ".mp3")
        audio.play();
    } else{
        console.log("Bad key");
    }
});
