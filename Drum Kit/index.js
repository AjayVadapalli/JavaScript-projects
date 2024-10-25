function onclick(){
    var audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
    const originalColor = this.style.color;
    this.style.color = "white";
    var buttunhtml = this.innerHTML;
    makeSound(buttunhtml);
    buttonAnimation(buttunhtml);
    setTimeout(function() {
        this.style.color = originalColor
    }.bind(this), 100);
}

var c = document.querySelectorAll(".drum").length;
var i=0;
while(i<c){
    document.querySelectorAll(".drum")[i].addEventListener("click",onclick);
    i++;
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
})

function makeSound(key){

    switch (key) {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
        break;
        case "a":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
        break;
        case "s":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
        break;  
        case "d":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
        break; 
        case "j":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
        break;
        case "k":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
        break;
        case "l":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
        break;
        default : console.log(key);
    }
}

function buttonAnimation(currentKey){
    var active = document.querySelector("."+currentKey);
    active.classList.add("pressed"); 
    setTimeout(function(){
        active.classList.remove("pressed")
    },100);
}
