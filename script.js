let submitBtn = document.getElementById("submit-btn");
let okBtn = document.getElementById("ok-btn");
let popup = document.querySelector(".pop-up");

function showPopup(){
    popup.classList.add("showpopup");
}

function hidePopup() {
    popup.classList.remove("showpopup");
}