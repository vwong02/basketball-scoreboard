//HOME POINTS

let homePointsEl = document.getElementById("home-points-display")
let homePoints = 0 


function homeAddOne() {
    homePoints += 1
    homePointsEl.textContent = homePoints
}

function homeAddTwo() {
    homePoints += 2
    homePointsEl.textContent = homePoints
}

function homeAddThree() {
    homePoints += 3
    homePointsEl.textContent = homePoints
}

//GUEST POINTS

let guestPointsEl = document.getElementById("guest-points-display")
let guestPoints = 0 


function guestAddOne() {
    guestPoints += 1
    guestPointsEl.textContent = guestPoints
}

function guestAddTwo() {
    guestPoints += 2
    guestPointsEl.textContent = guestPoints
}

function guestAddThree() {
    guestPoints += 3
    guestPointsEl.textContent = guestPoints
}

//NEW GAME


function resetScore() {
    homePoints = 0
    homePointsEl.textContent = homePoints
    guestPoints = 0
    guestPointsEl.textContent = guestPoints
}
