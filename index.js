// i want to play the sound with clicj and keyboard
// when sounf is played i want to chand the opacity


let numberOfDrums = document.getElementsByClassName("drum").length;

for(let i=0; i<numberOfDrums; i++){
    let sounds = document.getElementsByClassName("drum")[i];
    sounds.addEventListener("click",function(){
       
        playSounds(this.innerHTML);
        styles(this.innerHTML);
        
    });
}

document.addEventListener("keydown", (event) => {
    playSounds(event.key);
    styles(event.key);
});

function styles(args){
   let inputs =  document.querySelector("."+args);

   inputs.classList.add("pressed");
   
   setTimeout (() => {
    inputs.classList.remove("pressed");
   }, 150);

   
}


function playSounds(theKey){
    switch(theKey){
        case "w":
            new Audio("sounds/crash.mp3").play();
            
            break;
        case "a":
             new Audio("sounds/kick-bass.mp3").play();
             break;
        case "s":
            new Audio("sounds/snare.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-1.mp3").play();
            break;
         case "j":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "k":
            new Audio("sounds/tom-3.mp3").play();
            break;         
        case "l":
            new Audio("sounds/tom-4.mp3").play();
            break;
    }
}