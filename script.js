// ACCESS CSS PROPERTIES VIA JS

//EVENTS: onmouseover, onmouseout, onmousedown, onmouseup

let changeBackground = function(){

    let box1 = document.getElementById("block1");
    let box2 = document.getElementById("block2");
    let box3 = document.getElementById("block3");

    box1.style.backgroundColor = "aqua";
    box2.style.backgroundColor = "saddlebrown";
    box3.style.backgroundColor = "lightgreen";

    box1.innerText = "Bruh";
    box2.innerText = "My name";
    box3.innerText = "Jeff";


};

let setOriginal = function(){

    let box1 = document.getElementById("block1");
    let box2 = document.getElementById("block2");
    let box3 = document.getElementById("block3");

    box1.style.backgroundColor = "red";
    box2.style.backgroundColor = "red";
    box3.style.backgroundColor = "red";

    box1.innerText = "F";
    box2.innerText = "F";
    box3.innerText = "F";

};

let mouseOver = function(id){

    id.style.backgroundColor = "yellow";
    id.innerText = "Hello";


};

let mouseOut = function(id){

    id.style.backgroundColor = "red";
    if(id === document.getElementById('block1')){
        id.innerText = "OVER";
    }else if(id === document.getElementById("block2")){
        id.innerText = "ENTER"
    }else
        id.innerText = "DOWN";
};

let addClass = function(id){
  id.classList.add("blueBigBold");
};

let removeClass = function(id){
    id.classList.remove("blueBigBold");
};

let toggleClass = function(id){
    id.classList.toggle("blueBigBold");
};

let showHidden = function(){
    document.getElementById("hidden").innerText = "You've found the secret";
};