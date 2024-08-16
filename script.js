let bidanBtn = document.querySelector("#bidan_fun_fact");
let kaedinBtn = document.querySelector("#kaedin_fun_fact");
let chieckBtn = document.querySelector("#chieck_fun_fact");
let adamBtn = document.querySelector("#adam_fun_fact");
let omarBtn = document.querySelector("#omar_fun_fact");

let popup = document.querySelector("#popup");
let popupimg = document.querySelector("#popupIMG");
let x_button = document.querySelector("button")

bidanBtn.onclick = function() {
    popup.style.visibility = "visible";
    popupimg.src = "images/bidan_running.jpg";
}

kaedinBtn.onclick = function() {
    popup.style.visibility = "visible";
    popupimg.src = "images/pasta.jpg";
}

chieckBtn.onclick = function() {
    popup.style.visibility = "visible";
    popupimg.src = "images/singing.jpg";
}

adamBtn.onclick = function() {
    popup.style.visibility = "visible";
    popupimg.src = "images/gaming.jpg";
}

omarBtn.onclick = function() {
    popup.style.visibility = "visible";
    popupimg.src = "images/basketball.jpg";
}

x_button.onclick = function() {
    popup.style.visibility = "hidden";
}