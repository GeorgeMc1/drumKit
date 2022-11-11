console.log("Hello There!");
let buttons = document.querySelectorAll("#buttons div");
playSound = (ev) =>{
    new Audio("sounds/" + ev.id + ".wav").play();
    // ev.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    // ev.style.boxShadow = "0px 0px 30px rgb(255, 255, 255)";
    ev.classList.add("flash")
    timeOut(ev.id);
}
timeOut = (sound) =>{
    setTimeout(() => {
        selected = document.getElementById(sound);
        // selected.style.backgroundColor = "rgb(20, 20, 20)";
        // selected.style.boxShadow = "none";
        selected.classList.remove("flash")
    }, 300);
};
buttons.forEach((button) =>{
    button.addEventListener("click", () =>{
        playSound(button);
    });
})
buttons.forEach((button) =>{
    document.addEventListener("keypress", (e) =>{
        if(e.key == button.role){
            playSound(button);
        }
    });
})