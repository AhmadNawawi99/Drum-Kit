const buttonRegister = document.querySelectorAll(".drum");


// Adding "click" Event listener to ALL BUTTONS
for(let i = 0; i < buttonRegister.length; i++){
     buttonRegister[i].addEventListener("click", function(){
         let buttonText = this.classList[0];
         //let buttonText = this.textContent;
         caseCheck(buttonText);
         buttonAnimation(buttonText);
     });
     
     
};

document.addEventListener("keydown", function(event){
     caseCheck(event.key);
     buttonAnimation(event.key);
})

// document.addEventListener("keydown", caseCheck);
// If you want to use this, add event.key in switch in caseCheck function

function caseCheck(event){


     switch (event) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();          
            break;

        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        
        case "j":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "l":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

  }
}

function buttonAnimation(current){
    let active = document.querySelector("." + current);
    active.classList.add("pressed");
    
    setTimeout(function(){
        active.classList.remove("pressed");
    }, 200);
    
}

