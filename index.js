
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

let playerOneStarCounter = 0
let playerTwoStarCounter = 0
let playerThreeStarCounter = 0

let playerOneName = ""
let playerTwoName = ""
let playerThreeName = ""

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
    let p1NameDisplay = document.querySelector("#player-name-display")
    p1NameDisplay.innerText = `Player 1: ${playerOneName}`
    document.querySelector("#onep-scorekeeper").style.display = "grid"
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
                console.log(vip.name)
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
                for(let button of multChoiceBtns) {
                    let someRandoMan = randomMan()
                    if (!button.innerText) {
                        while (someRandoMan === vipSelect.name) {
                            console.log("gotcha dupe correct answer")
                            someRandoMan = randomMan()
                        }
                        for (let btn of filledBtn) {
                            while (btn === someRandoMan) {
                                console.log("gotcha dupe btn")
                                someRandoMan = randomMan()
                            }
                        }
                        button.innerText = someRandoMan
                        filledBtn.push(someRandoMan)
                    } 
                }
                vipPic.addEventListener("click", () => {
                    document.querySelector("#multiple-choice").style.display = "grid"
                    document.querySelector(".the-card").style.transform = "rotateY(180deg)"
                    document.querySelector(".main-container").style.width = "400px"
                    document.querySelector(".main-container").style.height = "400px"
                })

            } else {
                let vipPic = document.querySelector("#vip-pic")
                vipPic.src = vipSelect.photo
                let rightAnswer = multChoiceBtn5
                correctAnswer = rightAnswer.value
                for(let button of multChoiceBtns) {
                    let someRandoMan = randomMan()
                    if (!button.innerText) {
                        while (someRandoMan === vipSelect.name) {
                            console.log("gotcha dupe correct answer")
                            someRandoMan = randomMan()
                        }
                        for (let btn of filledBtn) {
                            while (btn === someRandoMan) {
                                console.log("gotcha dupe btn")
                                someRandoMan = randomMan()
                            }
                        }
                        button.innerText = someRandoMan
                        filledBtn.push(someRandoMan)
                    } 
                }
                vipPic.addEventListener("click", () => {
                    document.querySelector("#multiple-choice").style.display = "grid"
                    document.querySelector(".the-card").style.transform = "rotateY(180deg)"
                    document.querySelector(".main-container").style.width = "400px"
                    document.querySelector(".main-container").style.height = "400px"
                })
            }
        } else if (vipSelect.gender === "female") {
            if (vipSelect.check === true) {
                let vipPic = document.querySelector("#vip-pic")
                vipPic.src = vipSelect.photo
                let rightAnswer = randomMultChoiceBtn()
                correctAnswer = rightAnswer.value
                rightAnswer.innerText = vipSelect.name
                for(let button of multChoiceBtns) {
                    let someRandoWoman = randomWoman()
                    if (!button.innerText) {
                        while (someRandoWoman === vipSelect.name) {
                            console.log("gotcha dupe correct answer")
                            someRandoWoman = randomWoman()
                        }
                        for (let btn of filledBtn) {
                            while (btn === someRandoWoman) {
                                console.log("gotcha dupe btn")
                                someRandoWoman = randomWoman()
                            }
                        }
                        button.innerText = someRandoWoman
                        filledBtn.push(someRandoWoman)
                    } 
                }
                vipPic.addEventListener("click", () => {
                    document.querySelector("#multiple-choice").style.display = "grid"
                    document.querySelector(".the-card").style.transform = "rotateY(180deg)"
                    document.querySelector(".main-container").style.width = "400px"
                    document.querySelector(".main-container").style.height = "400px"
                })

            } else {
                let vipPic = document.querySelector("#vip-pic")
                vipPic.src = vipSelect.photo
                let rightAnswer = multChoiceBtn5
                correctAnswer = rightAnswer.value
                for(let button of multChoiceBtns) {
                    let someRandoWoman = randomWoman()
                    if (!button.innerText) {
                        while (someRandoWoman === vipSelect.name) {
                            console.log("gotcha dupe correct answer")
                            someRandoWoman = randomWoman()
                        }
                        for (let btn of filledBtn) {
                            while (btn === someRandoWoman) {
                                console.log("gotcha dupe btn")
                                someRandoWoman = randomWoman()
                            }
                        }
                        button.innerText = someRandoWoman
                        filledBtn.push(someRandoWoman)
                    } 
                }
                vipPic.addEventListener("click", () => {
                    document.querySelector("#multiple-choice").style.display = "grid"
                    document.querySelector(".the-card").style.transform = "rotateY(180deg)"
                    document.querySelector(".main-container").style.width = "400px"
                    document.querySelector(".main-container").style.height = "400px"
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

const incrementStars = () => {
    if (numberOfPlayers === 1) {
        playerOneStarCounter += 1
        let currentStar = document.querySelectorAll(".p1-1p")
        for (let star of currentStar) {
            if (star.id === "p1-1p-star" + playerOneStarCounter) {
                star.style.visibility = "visible"
            }
        }
    }
}

const displayCorrect = () => {
    console.log("That was correct")
    document.querySelector("#multiple-choice").style.display = "none"
    let correct = document.createElement("h1")
    correct.innerText = "CORRECT!"
    correct.id = "display-right-wrong"
    let page = document.querySelector("#page5")
    page.append(correct)
    setTimeout(nextQuestion1p, 3000)
}

const displayIncorrect = () => {
    console.log("That's wrong")
    document.querySelector("#multiple-choice").style.display = "none"
    let wrong = document.createElement("h1")
    wrong.innerText = "INCORRECT!"
    wrong.id = "display-right-wrong"
    let page = document.querySelector("#page5")
    page.append(wrong)
}

const nextQuestion1p = () => {
    let rightWrong = document.querySelector("#display-right-wrong")
    rightWrong.parentNode.removeChild(rightWrong)
    document.querySelector(".the-card").style.transform = ""
    document.querySelector(".main-container").style.width = "600px"
    document.querySelector(".main-container").style.height = "600px"
    onePlayerGame()
}

