if (document !== undefined){
    let homeEl = document.getElementById("home-el")
    let guestEl = document.getElementById("guest-el")
    let newGameEL = document.getElementById("new-game")
    let homeCount = 0
    let guestCount = 0
    homeEl.textContent = 0
    
    function homePlusOne() {
        homeCount += 1
        homeEl.textContent = homeCount
    }
    homePlusOne()

    function homePlusTwo() {
        homeCount += 2
        homeEl.textContent = homeCount
    }
    homePlusTwo()

    function homePlusThree() {
        homeCount += 3
        homeEl.textContent = homeCount
    }
    homePlusThree()



    guestEl.textContent = 0
    function guestPlusOne() {
        guestCount += 1
        guestEl.textContent = guestCount
    }
    guestPlusOne()

    function guestPlusTwo() {
        guestCount += 2
        guestEl.textContent = guestCount
    }
    guestPlusTwo()

    function guestPlusThree() {
        guestCount += 3
        guestEl.textContent = guestCount
    }
    guestPlusThree()

    newGameEL.addEventListener("click",function () {
        homeEl.textContent = 0
        guestEl.textContent = 0
        homeCount = 0
        guestCount = 0
    })
}