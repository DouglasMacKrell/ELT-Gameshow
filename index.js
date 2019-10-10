
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM has loaded")
    setUpBtnListener1()
    setUpBtnListener2()
    setUpBtnListener3()
    setUpBtnListener4()
})

document.addEventListener("submit", (event) => {
    event.preventDefault()
}) 

const setUpBtnListener1 = () => {
    const flipPage = document.querySelector("#start-game")
    flipPage.addEventListener("click", turnPage1)
}

const turnPage1 = () => {
    document.querySelector("#page1").style.display = "none"
    document.querySelector("#page2").style.display = "grid"
    console.log(vip[23].name)
}


const setUpBtnListener2 = () => {
    const onePlayer = document.querySelector("#one-player")
    onePlayer.addEventListener("click", turnPage2one)
    const twoPlayers = document.querySelector("#two-players")
    twoPlayers.addEventListener("click", turnPage2two)
    const threePlayers = document.querySelector("#three-players")
    threePlayers.addEventListener("click", turnPage2three)
}

let numberOfPlayers = 0

const turnPage2one = () => {
    numberOfPlayers = 1
    let playerOne = document.createElement("input");
    playerOne.setAttribute("type", "text")
    playerOne.setAttribute("id", "player-one")
    playerOne.setAttribute("placeholder", "Enter Name")
    let labelOne = document.createElement("label")
    labelOne.setAttribute("for", "player-one")
    labelOne.innerText = "Player 1: "
    let inputForm = document.querySelector("#name-input")
    inputForm.append(labelOne)
    inputForm.append(playerOne)
    document.querySelector("#page2").style.display = "none"
    document.querySelector("#page3").style.display = "grid"
    document.querySelector('#page4').style.display = "none"
}

const turnPage2two = () => {
    numberOfPlayers = 2
    let playerOne = document.createElement("input");
    playerOne.setAttribute("type", "text")
    playerOne.setAttribute("id", "player-one")
    playerOne.setAttribute("placeholder", "Enter Name")
    let labelOne = document.createElement("label")
    labelOne.setAttribute("for", "player-one")
    labelOne.innerText = "Player 1: "
    let playerTwo = document.createElement("input");
    playerTwo.setAttribute("type", "text")
    playerTwo.setAttribute("id", "player-two")
    playerTwo.setAttribute("placeholder", "Enter Name")
    let labelTwo = document.createElement("label")
    labelTwo.setAttribute("for", "player-two")
    labelTwo.innerText = "Player 2: "
    let inputForm = document.querySelector("#name-input")
    inputForm.append(labelOne)
    inputForm.append(playerOne)
    inputForm.append(labelTwo)
    inputForm.append(playerTwo)
    document.querySelector("#page2").style.display = "none"
    document.querySelector("#page3").style.display = "grid"
    document.querySelector('#page4').style.display = "none"
}

const turnPage2three = () => {
    numberOfPlayers = 3
    let playerOne = document.createElement("input");
    playerOne.setAttribute("type", "text")
    playerOne.setAttribute("id", "player-one")
    playerOne.setAttribute("placeholder", "Enter Name")
    let labelOne = document.createElement("label")
    labelOne.setAttribute("for", "player-one")
    labelOne.innerText = "Player 1: "
    let playerTwo = document.createElement("input");
    playerTwo.setAttribute("type", "text")
    playerTwo.setAttribute("id", "player-two")
    playerTwo.setAttribute("placeholder", "Enter Name")
    let labelTwo = document.createElement("label")
    labelTwo.setAttribute("for", "player-two")
    labelTwo.innerText = "Player 2: "
    let playerThree = document.createElement("input");
    playerThree.setAttribute("type", "text")
    playerThree.setAttribute("id", "player-three")
    playerThree.setAttribute("placeholder", "Enter Name")
    let labelThree = document.createElement("label")
    labelThree.setAttribute("for", "player-three")
    labelThree.innerText = "Player 3: "
    let inputForm = document.querySelector("#name-input")
    inputForm.append(labelOne)
    inputForm.append(playerOne)
    inputForm.append(labelTwo)
    inputForm.append(playerTwo)
    inputForm.append(labelThree)
    inputForm.append(playerThree)
    document.querySelector("#page2").style.display = "none"
    document.querySelector("#page3").style.display = "grid"
    document.querySelector('#page4').style.display = "none"
}

const setUpBtnListener3 = () => {
    let formSubmit = document.querySelector("#name-input")
    formSubmit.addEventListener("submit", saveNames)
}

const saveNames = () => {
    let name1 = document.querySelector("#player-one")
    let name2 = document.querySelector("#player-two")
    let name3 = document.querySelector("#player-three")
    if (name1 && !name2 && !name3) {
        playerOneName = name1.value
        document.querySelector("#page3").style.display = "none"
        document.querySelector("#page4").style.display = "grid"
    } else if (name1 && name2 && !name3) {
        playerOneName = name1.value
        playerTwoName = name2.value
        document.querySelector("#page3").style.display = "none"
        document.querySelector("#page4").style.display = "grid"
    } else {
        playerOneName = name1.value
        playerTwoName = name2.value  
        playerThreeName = name3.value
        document.querySelector("#page3").style.display = "none"
        document.querySelector("#page4").style.display = "grid"    
    }
    console.log(numberOfPlayers)
}

let playerOneName = ""
let playerTwoName = ""
let playerThreeName = ""

const setUpBtnListener4 = () => {
    let beginGame = document.querySelector("#begin-challenge")
    beginGame.addEventListener("click", startGame)
}

const startGame = () => {
    document.querySelector("#page4").style.display = "none"
    document.querySelector("#page5").style.display = "grid"
    document.querySelector("#music").style.display = "none"
    let audio = document.querySelector("#theme-song")
    audio.pause()
    console.log(randomVip().name)
    if (numberOfPlayers === 1) {
        onePlayerGame()
    } else if (numberOfPlayers === 2) {
        twoPlayerGame()
    } else {
        threePlayerGame()
    }
}

let usedVip = []

const randomIndex = (arr) => {
    let random = Math.floor(Math.random() * arr.length)
    return random
}

const randomVip = () => {
    return vip[randomIndex(vip)]
}

const randomWoman = () => {
    return women[randomIndex(women)]
}

const randomMan = () => {
    return men[randomIndex(men)]
}

const onePlayerGame = () => {
    if (usedVip.length < 30) {
        let vipSelect = randomVip()
        
    } else {
        endGame()
    }
}