
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

let usedVip = []
let correctAnswer = 0
let vipSelect = {}

let currentPlayer = "player1"


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
    playGame()
}


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

const checkUsedVip = (arr) => {
    for (const element of arr) {
        while (element.name === vipSelect.name) {
            console.log("gotcha dupe new random select")
            vipSelect = randomVip()
            checkUsedVip(arr)
        }
    }
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

const playGame = () => {
    console.log("running One Player Game")
    if (numberOfPlayers === 1) {
        document.querySelector("#onep-scorekeeper").style.display = "grid"
        let p1NameDisplay = document.querySelector("#player-name-display")
        p1NameDisplay.innerText = `Player 1: ${playerOneName}`
    } else if (numberOfPlayers === 2) {
        document.querySelector("#twop-scorekeeper").style.display = "grid"
        if (currentPlayer === "player1") {
            let p1NameDisplay = document.querySelector("#player-name-display")
            p1NameDisplay.innerText = `Player 1: ${playerOneName}`
        } else {
            let p2NameDisplay = document.querySelector("#player-name-display")
            p2NameDisplay.innerText = `Player 2: ${playerTwoName}`
        }
    } else {
        document.querySelector("#threep-scorekeeper").style.display = "grid"
        if (currentPlayer === "player1") {
            let p1NameDisplay = document.querySelector("#player-name-display")
            p1NameDisplay.innerText = `Player 1: ${playerOneName}`
        } else if (currentPlayer === "player2") {
            let p2NameDisplay = document.querySelector("#player-name-display")
            p2NameDisplay.innerText = `Player 2: ${playerTwoName}`
        } else {
            let p3NameDisplay = document.querySelector("#player-name-display")
            p3NameDisplay.innerText = `Player 3: ${playerThreeName}`
        }
    }
    if (usedVip.length < 30) {
        let multChoiceBtn1 = document.querySelector("#choice-one")
        multChoiceBtn1.innerText = ""
        let multChoiceBtn2 = document.querySelector("#choice-two")
        multChoiceBtn2.innerText = ""
        let multChoiceBtn3 = document.querySelector("#choice-three")
        multChoiceBtn3.innerText = ""
        let multChoiceBtn4 = document.querySelector("#choice-four")
        multChoiceBtn4.innerText = ""
        let multChoiceBtn5 = document.querySelector("#choice-five")
        let multChoiceBtns = [multChoiceBtn1, multChoiceBtn2, multChoiceBtn3, multChoiceBtn4]
        let filledBtn = []
        vipSelect = randomVip()
        checkUsedVip(usedVip)
        usedVip.push(vipSelect)
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

const twoPlayerGame = () => {

}

const setUpMultChoiceBtn1 = () => {
    let btn1 = document.querySelector("#choice-one")
    btn1.addEventListener("click", () => {        
        if (btn1.value === correctAnswer) {
            incrementStars()
            displayCorrect()
        } else {
            if (currentPlayer === "player1") {
                currentPlayer = "player2"
                displayIncorrect()
            } else if (currentPlayer === "player2") {
                currentPlayer = "player3"
                displayIncorrect()
            } else {
                currentPlayer = "player1"
                displayIncorrect()
            }
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
            if (currentPlayer === "player1") {
                currentPlayer = "player2"
                displayIncorrect()
            } else if (currentPlayer === "player2") {
                currentPlayer = "player3"
                displayIncorrect()
            } else {
                currentPlayer = "player1"
                displayIncorrect()
            }
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
            if (currentPlayer === "player1") {
                currentPlayer = "player2"
                displayIncorrect()
            } else if (currentPlayer === "player2") {
                currentPlayer = "player3"
                displayIncorrect()
            } else {
                currentPlayer = "player1"
                displayIncorrect()
            }
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
            if (currentPlayer === "player1") {
                currentPlayer = "player2"
                displayIncorrect()
            } else if (currentPlayer === "player2") {
                currentPlayer = "player3"
                displayIncorrect()
            } else {
                currentPlayer = "player1"
                displayIncorrect()
            }
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
            if (currentPlayer === "player1") {
                currentPlayer = "player2"
                displayIncorrect()
            } else if (currentPlayer === "player2") {
                currentPlayer = "player3"
                displayIncorrect()
            } else {
                currentPlayer = "player1"
                displayIncorrect()
            }
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
    } else if (numberOfPlayers === 2) {
        if (currentPlayer === "player1") {
            playerOneStarCounter += 1
            currentPlayer = "player2"
            let currentStar = document.querySelectorAll(".p1-2p")
            for (let star of currentStar) {
                if (star.id === "p1-2p-star" + playerOneStarCounter) {
                    console.log("p1 star gotcha")
                    star.style.visibility = "visible"
                }
            }
        } else {
            playerTwoStarCounter += 1
            currentPlayer = "player1"
            let currentStar = document.querySelectorAll(".p2-2p")
            for (let star of currentStar) {
                if (star.id === "p2-2p-star" + playerTwoStarCounter) {
                    console.log("p2 star gotcha")
                    star.style.visibility = "visible"
                }
            }
        }
    } else {
        if (currentPlayer === "player1") {
            playerOneStarCounter += 1
            currentPlayer = "player2"
            let currentStar = document.querySelectorAll(".p1-3p")
            for (let star of currentStar) {
                if (star.id === "p1-3p-star" + playerOneStarCounter) {
                    star.style.visibility = "visible"
                }
            }
        } else if (currentPlayer === "player2") {
            playerTwoStarCounter += 1
            currentPlayer = "player3"
            let currentStar = document.querySelectorAll(".p2-3p")
            for (let star of currentStar) {
                if (star.id === "p2-3p-star" + playerTwoStarCounter) {
                    star.style.visibility = "visible"
                }
            }
        } else {
            playerThreeStarCounter += 1
            currentPlayer = "player1"
            let currentStar = document.querySelectorAll(".p3-3p")
            for (let star of currentStar) {
                if (star.id === "p3-3p-star" + playerThreeStarCounter) {
                    star.style.visibility = "visible"
                }
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
    setTimeout(nextQuestion1p, 2000)
}

const displayIncorrect = () => {
    console.log("That's wrong")
    document.querySelector("#multiple-choice").style.display = "none"
    let wrong = document.createElement("h1")
    wrong.innerText = "INCORRECT!"
    wrong.id = "display-right-wrong"
    let page = document.querySelector("#page5")
    page.append(wrong)
    setTimeout(nextQuestion1p, 2000)
}

const nextQuestion1p = () => {
    let rightWrong = document.querySelector("#display-right-wrong")
    rightWrong.parentNode.removeChild(rightWrong)
    document.querySelector(".the-card").style.transform = ""
    document.querySelector(".main-container").style.width = "600px"
    document.querySelector(".main-container").style.height = "600px"
    playGame()
}

const endGame = () => {
    debugger
    if (numberOfPlayers === 1) {
        document.querySelector("#page5").style.display = "none"
        document.querySelector("#page6").style.display = "grid"
        document.querySelector("#end-game-display-1p").style.display = "grid"
        let grade = document.querySelector("#letter-grade")
        let feedback = document.querySelector("#end-game-text-1p")
        if (playerOneStarCounter === 30) {
            grade.innerText = "A+"
            feedback.innerText = `${playerOneStarCounter}! A perfect score! You REALLY know your BOD and ELT Members! Please help your fellow Security Officers remember these VIPs by pointing them out when you encounter them on campus.`
        } else if (playerOneStarCounter <= 29 && playerOneStarCounter >= 27) {
            grade.innerText = "A"
            feedback.innerText = `Great job! You knew ${playerOneStarCounter} out of 30 real and fake ELT and BOD Members! You REALLY know your BOD and ELT Members! Please help your fellow Security Officers remember these VIPs by pointing them out when you encounter them on campus.`
        } else if (playerOneStarCounter <= 26 && playerOneStarCounter >= 24) {
            grade.innerText = "B"
            feedback.innerText = `Those are some sharp eyes you've got! ${playerOneStarCounter} out of 30 is a decent score, but we really need you to know ALL of the ELT and BOD Members by both name and face. Please take a moment to brush up on some of the people you missed with your fellow Security Officers!`
        } else if (playerOneStarCounter <= 23 && playerOneStarCounter >= 21) {
            grade.innerText = "C"
            feedback.innerText = `You know ${playerOneStarCounter} out of 30 real and fake BOD and ELT members. That's more than 2/3rds of the BOD and ELT, but you really need to make sure you take note of VIPs you missed. Review your ELT and BOD sheet regularly so you remember both their faces and names!`
        } else if (playerOneStarCounter <= 20 && playerOneStarCounter >= 18) {
            grade.innerText = "D"
            feedback.innerText = `You know ${playerOneStarCounter} out of 30 real and fake BOD and ELT members. You may know more than half of the ELT and BOD, but we really need you to know 100%. Don't be afraid to reach out to your fellow Security Officers and Management to help you review - and be sure to take note of this website so you can keep practicing!`
        } else if (playerOneStarCounter <= 17) {
            grade.innerText = "F"
            feedback.innerText = `You know ${playerOneStarCounter} out of 30 real and fake BOD and ELT members. You're in serious need of review! As one of Pfizer's Security Officers, we need you to not only spot - but also quickly identify by name - the Pfizer Board Of Directors and Pfizer's Executive Leadership Team. Please seek out your fellow Security Officers and Management, and ask them to help you review these VIPs. Remember: It's your responsibility to know these people, and a core requirement of your daily duties.`
        }
    } else if (numberOfPlayers === 2) {
        document.querySelector("#page5").style.display = "none"
        document.querySelector("#page6").style.display = "grid"
        document.querySelector("#end-game-display-multiplayer").style.display = "grid"
        let winnerNames = document.querySelector("#winner-id")
        let winningText = document.querySelector("#end-game-text-multiplayer")
        if (playerOneStarCounter === playerTwoStarCounter) {
            winnerNames.innerText = `${playerOneName} and ${playerTwoName}`
            winningText.innerText = "A tie! Please give a huge round of applause for our two fantastic players for really knowing their ELT and BOD Members!"
        } else if (playerOneStarCounter > playerTwoStarCounter) {
            winnerNames.innerText = `${playerOneName}`
            winningText.innerText = `Please give a huge round of applause for ${playerOneName}! They really know the ELT and BOD Members!`
        } else {
            winnerNames.innerText = `${playerTwoName}`
            winningText.innerText = `Please give a huge round of applause for ${playerTwoName}! They really know the ELT and BOD Members!`
        }
    } else {
        document.querySelector("#page5").style.display = "none"
        document.querySelector("#page6").style.display = "grid"
        document.querySelector("#end-game-display-multiplayer").style.display = "grid"
        let winnerNames = document.querySelector("#winner-id")
        let winningText = document.querySelector("#end-game-text-multiplayer")
        let scores = [{
            name: playerOneName,
            score: playerOneStarCounter
        }, {
            name: playerTwoName,
            score: playerTwoStarCounter
        }, {
            name: playerThreeName,
            score: playerThreeStarCounter
        }]

        let sortedScores = scores.sort(function(a, b){return a.score - b.score});

        let grabber = 0
        for(let index in sortedScores) {
            if (sortedScores[index].score <= 5) {
                grabber += 1
                if (grabber === 3) {
                    document.querySelector("#congratulations").style.display = "none"
                    winningText.innerText = "Bad news, players - you've all scored too low for anyone to win the game! You'll all need to review the members of the Board of Directors and Executive Leadership Team. It's your responsibility to know these people by both face and name at a moment's notice! Reach out to Management and your fellow Security Officers for help and support in your review!"
                    let playAgainBtn = document.createElement("button")
                    playAgainBtn.innerText = "Play Again?"
                    playAgainBtn.id = "restart"
                    playAgainBtn.className = "player-select"
                    winningText.append(playAgainBtn)
                    let restartBtn = document.querySelector("#restart")
                    restartBtn.addEventListener("click", playAgain)
                    return
                }
            }
        }

        if (sortedScores[0].score === sortedScores[1].score && sortedScores[1].score === sortedScores[2].score) {
            winnerNames.innerText = `${sortedScores[2].name}, ${sortedScores[1].name}, and ${sortedScores[0].name}`
            winningText.innerText = "A three way tie! Please give a huge round of applause for our three fantastic players who all really know their ELT and BOD Members!"
        } else if (sortedScores[1].score === sortedScores[2].score) {
            winnerNames.innerText = `${sortedScores[2].name} and ${sortedScores[1].name}`
            winningText.innerText = "A tie! Please give a huge round of applause for our two fantastic players for really knowing their ELT and BOD Members!"
        } else if (sortedScores[0].score === sortedScores[1].score && sortedScores[1].score > sortedScores[2].score) {
            winnerNames.innerText = `${sortedScores[1].name} and ${sortedScores[0].name}`
            winningText.innerText = "A tie! Please give a huge round of applause for our two fantastic players for really knowing their ELT and BOD Members!"
        } else if (sortedScores.length === 3) {
            winnerNames.innerText = `${sortedScores[2].name}`
            winningText.innerText = `Please give a huge round of applause for ${sortedScores[2].name}! They really know the ELT and BOD Members!`
        } else if (sortedScores.length === 2) {
            winnerNames.innerText = `${sortedScores[1].name}`
            winningText.innerText = `Please give a huge round of applause for ${sortedScores[1].name}! They really know the ELT and BOD Members!`
        } else {
            winnerNames.innerText = `${sortedScores[0].name}`
            winningText.innerText = `Please give a huge round of applause for ${sortedScores[0].name}! They really know the ELT and BOD Members!`
        }

        let playAgainBtn = document.createElement("button")
        playAgainBtn.innerText = "Play Again?"
        playAgainBtn.id = "restart"
        playAgainBtn.className = "player-select"
        winningText.append(playAgainBtn)
        let restartBtn = document.querySelector("#restart")
        restartBtn.addEventListener("click", playAgain)
    }
}

const playAgain = () => {
    window.location.reload()
}