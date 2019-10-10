
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM has loaded")
    setUpBtnListener1()
    setUpBtnListener2()
    setUpBtnListener3()
    setUpBtnListener4()
    setUpMultChoiceBtn1()
    setUpMultChoiceBtn2()
    setUpMultChoiceBtn3()
    setUpMultChoiceBtn4()
    setUpMultChoiceBtn5()
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
    if (numberOfPlayers === 1) {
        onePlayerGame()
    } else if (numberOfPlayers === 2) {
        twoPlayerGame()
    } else {
        threePlayerGame()
    }
}

let usedVip = []
let correctAnswer = 0

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

const randomMultChoiceBtn = () => {
    let multChoiceBtn1 = document.querySelector("#choice-one")
    let multChoiceBtn2 = document.querySelector("#choice-two")
    let multChoiceBtn3 = document.querySelector("#choice-three")
    let multChoiceBtn4 = document.querySelector("#choice-four")
    let multChoiceBtns = [multChoiceBtn1, multChoiceBtn2, multChoiceBtn3, multChoiceBtn4]
    let randomButton = multChoiceBtns[randomIndex(multChoiceBtns)]
    return randomButton
}

const onePlayerGame = () => {
    if (usedVip.length < 30) {
        let multChoiceBtn1 = document.querySelector("#choice-one")
        let multChoiceBtn2 = document.querySelector("#choice-two")
        let multChoiceBtn3 = document.querySelector("#choice-three")
        let multChoiceBtn4 = document.querySelector("#choice-four")
        let multChoiceBtn5 = document.querySelector("#choice-five")
        let multChoiceBtns = [multChoiceBtn1, multChoiceBtn2, multChoiceBtn3, multChoiceBtn4]
        let filledBtn = []
        let vipSelect = randomVip()
        for (vip of usedVip) {
            while (vip.name === vipSelect.name) {
                vipSelect = randomVip()
            }
        }
        usedVip.push(vipSelect)
        console.log(usedVip)
        if (vipSelect.gender === "male") {
            if (vipSelect.check === true) {
                let vipPic = document.querySelector("#vip-pic")
                vipPic.src = vipSelect.photo
                let rightAnswer = randomMultChoiceBtn()
                correctAnswer = rightAnswer.value
                rightAnswer.innerText = vipSelect.name
                for(button of multChoiceBtns) {
                    if (!button.innerText) {
                        let someRandoMan = randomMan()
                        while (someRandoMan === vipSelect.name) {
                            console.log("gotcha correct repeat")
                            someRandoMan = randomMan()
                        }
                        filledBtn.push(someRandoMan)
                        if (someRandoMan === button.innerText) {
                            console.log("gotcha btn dupe")
                            someRandoMan =  randomMan()
                            button.innerText = someRandoMan
                        }
                        button.innerText = someRandoMan
                    } 
                }
                vipPic.addEventListener("click", () => {
                    document.querySelector("#multiple-choice").style.display = "grid"
                    document.querySelector(".the-card").style.transform = "rotateY(180deg)"
                })

            } else {
                let vipPic = document.querySelector("#vip-pic")
                vipPic.src = vipSelect.photo
                let rightAnswer = multChoiceBtn5
                correctAnswer = rightAnswer.value
                for(button of multChoiceBtns) {
                    if (!button.innerText) {
                        let someRandoMan = randomMan()
                        while (someRandoMan === vipSelect.name) {
                            console.log("gotcha correct repeat")
                            someRandoMan = randomMan()
                        }
                        filledBtn.push(someRandoMan)
                        if (someRandoMan === button.innerText) {
                            console.log("gotcha btn dupe")
                            someRandoMan =  randomMan()
                            button.innerText = someRandoMan
                        }
                        button.innerText = someRandoMan
                    } 
                }
                vipPic.addEventListener("click", () => {
                    document.querySelector("#multiple-choice").style.display = "grid"
                    document.querySelector(".the-card").style.transform = "rotateY(180deg)"
                })
            }
        } else if (vipSelect.gender === "female") {
            if (vipSelect.check === true) {
                let vipPic = document.querySelector("#vip-pic")
                vipPic.src = vipSelect.photo
                let rightAnswer = randomMultChoiceBtn()
                correctAnswer = rightAnswer.value
                rightAnswer.innerText = vipSelect.name
                for(button of multChoiceBtns) {
                    if (!button.innerText) {
                        let someRandoWoman = randomWoman()
                        while (someRandoWoman === vipSelect.name) {
                            console.log("gotcha correct repeat")
                            someRandoWoman = randomWoman()
                        }
                        filledBtn.push(someRandoWoman)
                        if (someRandoWoman === button.innerText) {
                            console.log("gotcha btn dupe")
                            someRandoWoman =  randomWoman()
                            button.innerText = someRandoWoman
                        }
                        button.innerText = someRandoWoman
                    } 
                }
                vipPic.addEventListener("click", () => {
                    document.querySelector("#multiple-choice").style.display = "grid"
                    document.querySelector(".the-card").style.transform = "rotateY(180deg)"
                })

            } else {
                let vipPic = document.querySelector("#vip-pic")
                vipPic.src = vipSelect.photo
                let rightAnswer = multChoiceBtn5
                correctAnswer = rightAnswer.value
                for(button of multChoiceBtns) {
                    if (!button.innerText) {
                        let someRandoWoman = randomWoman()
                        while (someRandoWoman === vipSelect.name) {
                            console.log("gotcha correct repeat")
                            someRandoWoman = randomWoman()
                        }
                        filledBtn.push(someRandoWoman)
                        if (someRandoWoman === button.innerText) {
                            console.log("gotcha btn dupe")
                            someRandoWoman =  randomWoman()
                            button.innerText = someRandoWoman
                        }
                        button.innerText = someRandoWoman
                    } 
                }
                vipPic.addEventListener("click", () => {
                    document.querySelector("#multiple-choice").style.display = "grid"
                    document.querySelector(".the-card").style.transform = "rotateY(180deg)"
                })
            }
        }
    } else {
        endGame()
    }
}

const setUpMultChoiceBtn1 = () => {
    let btn1 = document.querySelector("#choice-one")
    btn1.addEventListener("click", () => {        
        if (btn1.value === correctAnswer) {
            incrementStars()
            displayCorrect()
        } else {
            displayIncorrect()
        }
    })
}

const setUpMultChoiceBtn2 = () => {
    let btn2 = document.querySelector("#choice-two")
    btn2.addEventListener("click", () => {
        if (btn2.value === correctAnswer) {
            incrementStars()
            displayCorrect()
        } else {
            displayIncorrect()
        }
    })
}

const setUpMultChoiceBtn3 = () => {
    let btn3 = document.querySelector("#choice-three")
    btn3.addEventListener("click", () => {
        if (btn3.value === correctAnswer) {
            incrementStars()
            displayCorrect()
        } else {
            displayIncorrect()
        }
    })
}

const setUpMultChoiceBtn4 = () => {
    let btn4 = document.querySelector("#choice-four")
    btn4.addEventListener("click", () => {
        if (btn4.value === correctAnswer) {
            incrementStars()
            displayCorrect()
        } else {
            displayIncorrect()
        }
    })
}

const setUpMultChoiceBtn5 = () => {
    let btn5 = document.querySelector("#choice-five")
    btn5.addEventListener("click", () => {
        if (btn5.value === correctAnswer) {
            incrementStars()
            displayCorrect()
        } else {
            displayIncorrect()
        }
    })
}
