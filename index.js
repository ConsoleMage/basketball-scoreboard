// Home Section

let plusOne = document.getElementById("home-plus-one");
let plusTwo = document.getElementById("home-plus-two");
let plusThree = document.getElementById("home-plus-three");

let homeScore = document.getElementById("home-score");
let homeCount = parseInt(homeScore.textContent);

function homeAdd() {
    homeScore.textContent = (homeCount += 1);
}

function homeAdd2() {
    homeScore.textContent = (homeCount += 2);
}

function homeAdd3() {
    homeScore.textContent = (homeCount += 3);
}

// Guest Section

let guestPlusOne = document.getElementById("guest-plus-one");
let guestPlusTwo = document.getElementById("guest-plus-two");
let guestPlusThree = document.getElementById("guest-plus-three");

let guestScore = document.getElementById("guest-score");
let guestCount = parseInt(guestScore.textContent);

function guestAdd() {
    guestScore.textContent = (guestCount += 1);
}

function guestAdd2() {
    guestScore.textContent = (guestCount += 2);
}

function guestAdd3() {
    guestScore.textContent = (guestCount += 3);
}

// Winning Team

function winningHome() { 
    if (homeCount > guestCount) {
        document.getElementsByClassName("home")[0].classList.add("glowing-border");    
    } else {
        document.getElementsByClassName("home")[0].classList.remove("glowing-border");  
    }
}

function winningGuest() { 
    if (guestCount > homeCount) {
        document.getElementsByClassName("guest")[0].classList.add("glowing-border");    
    } else {
        document.getElementsByClassName("guest")[0].classList.remove("glowing-border"); 
    }
}
