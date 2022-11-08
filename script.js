console.log("Hello There!");
timeOut = (sound) =>{
    setTimeout(() => {
        selected = document.getElementById(sound);
        selected.style.backgroundColor = "rgb(20, 20, 20)";
        selected.style.boxShadow = "none";
    }, 200);
};
document.addEventListener("keydown", (e) =>{
    if(e.key == "a"){
        new Audio("sounds/boom.wav").play();
        boom.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        boom.style.boxShadow = "0px 0px 30px rgb(255, 255, 255)";
        timeOut("boom");
    } else if(e.key == "s"){
        new Audio("sounds/clap.wav").play();
        clap.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        clap.style.boxShadow = "0px 0px 30px rgb(255, 255, 255)";
        timeOut("clap");
    } else if(e.key == "d"){
        new Audio("sounds/hihat.wav").play();
        hihat.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        hihat.style.boxShadow = "0px 0px 30px rgb(255, 255, 255)";
        timeOut("hihat");
    } else if(e.key == "f"){
        new Audio("sounds/kick.wav").play();
        kick.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        kick.style.boxShadow = "0px 0px 30px rgb(255, 255, 255)";
        timeOut("kick");
    } else if(e.key == "g"){
        new Audio("sounds/openhat.wav").play();
        openhat.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        openhat.style.boxShadow = "0px 0px 30px rgb(255, 255, 255)";
        timeOut("openhat");
    } else if(e.key == "h"){
        new Audio("sounds/ride.wav").play();
        ride.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        ride.style.boxShadow = "0px 0px 30px rgb(255, 255, 255)";
        timeOut("ride");
    } else if(e.key == "j"){
        new Audio("sounds/snare.wav").play();
        snare.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        snare.style.boxShadow = "0px 0px 30px rgb(255, 255, 255)";
        timeOut("snare");
    } else if(e.key == "k"){
        new Audio("sounds/tink.wav").play();
        tink.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        tink.style.boxShadow = "0px 0px 30px rgb(255, 255, 255)";
        timeOut("tink");
    } else if(e.key == "l"){
        new Audio("sounds/tom.wav").play();
        tom.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        tom.style.boxShadow = "0px 0px 30px rgb(255, 255, 255)";
        timeOut("tom");
    }
})
document.addEventListener("click", (e) =>{
    // for(i = 0; i < buttons.length; i++){
    //     if(buttons[i] == e.target){
    //         sounds[i].play();
    //     }
    // }
    if(e.target == boom){
        new Audio("sounds/boom.wav").play();
        boom.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        boom.style.boxShadow = "0px 0px 30px rgb(255, 255, 255)";
        timeOut("boom");
    } else if(e.target == clap){
        new Audio("sounds/clap.wav").play();
        clap.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        clap.style.boxShadow = "0px 0px 30px rgb(255, 255, 255)";
        timeOut("clap");
    } else if(e.target == hihat){
        new Audio("sounds/hihat.wav").play();
        hihat.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        hihat.style.boxShadow = "0px 0px 30px rgb(255, 255, 255)";
        timeOut("hihat");
    } else if(e.target == kick){
        new Audio("sounds/kick.wav").play();
        kick.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        kick.style.boxShadow = "0px 0px 30px rgb(255, 255, 255)";
        timeOut("kick");
    } else if(e.target == openhat){
        new Audio("sounds/openhat.wav").play();
        openhat.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        openhat.style.boxShadow = "0px 0px 30px rgb(255, 255, 255)";
        timeOut("openhat");
    } else if(e.target == ride){
        new Audio("sounds/ride.wav").play();
        ride.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        ride.style.boxShadow = "0px 0px 30px rgb(255, 255, 255)";
        timeOut("ride");
    } else if(e.target == snare){
        new Audio("sounds/snare.wav").play();
        snare.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        snare.style.boxShadow = "0px 0px 30px rgb(255, 255, 255)";
        timeOut("snare");
    } else if(e.target == tink){
        new Audio("sounds/tink.wav").play();
        tink.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        tink.style.boxShadow = "0px 0px 30px rgb(255, 255, 255)";
        timeOut("tink");
    } else if(e.target == tom){
        new Audio("sounds/tom.wav").play();
        tom.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        tom.style.boxShadow = "0px 0px 30px rgb(255, 255, 255)";
        timeOut("tom");
    }
})