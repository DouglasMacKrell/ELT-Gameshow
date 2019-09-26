This is where I'll make my game!

PFIZER ELT GAMESHOW

Players should be greeted by a splash page with a lOGO for the game and a START buton

Once the button is pressed, players will be asked first how many players will be active. The game should account for 1 - 3 players.

After the number of players are selected, the players will be asked to input their names. The number of inputs should adjust depending on the number of active players selected previously.

The game will then display a splash page with the rules of the game. This also gives breathing room for a host/presenter to vamp before starting the game in earnest. The bottom of this page should have a START button.

The game will then proceed in rounds. Players will be presented with a photo and five buttons to select a correct answer from. A static answer at the bottom of the list of buttons will be "Not an ELT/BOD member".

A meter for every player will remain active at the bottom of the screen, and will update with correct answers from the player - dispalying a star for every right answer.

Each round will consist of one quiestion per player, then loop back to Player 1 for the next round. A single player will be asked to identify all 30 possible entries (24 ELT/BOD & 6 Fakes)

Ultimately, when a single player is queried on all 30 possible variables, their correct answers will be tallied and a letter grade will be displayed.

If multiple players are active, then the name of the player or players with the largest amount of correct answers will be displayed as the game's winner.

A button asking if players want to play again will be displayed in both cases.

If the user clicks the button, it will first load a screen asking if the same players will be playing again
    if yes
        then reuse their player names and number of active players and restart the game
    if no
        then return to the page asking players to select the number of active players.

The INTRO/LANDING screen should have 3 things:
* The LOGO (img)
* A button that reads "START" (button)
* static music player set to autoplay and visibility:none;



The gameplay screen should have [] things: 
* A HEADER that lets us know which player is active
* A picture of the ELT/BOD/Rando in question
* Five (5) buttons
    * 3 - 4 of these buttons will have random names propigated from the list of ELT/BOD members and will not match with the picture (depending on if they are or are not a Rando)
    * 1 button (hard coded to the 5th/bottom position) will let the player select "Not an ELT/BOD member"
    * 1 random button will have the correct answer - if the correct answer is not "Not an ELT/BOD member"
* Meter/Meters
    * Up to 3 evenly spaced bars will show on the bottom and record correct answers with stars 

* Components
    * Logo (img)
    * Header (h1)
    * 
    * Five buttons w/ELT & BOD names on them (button)
        * Array of ELT/BOD Member picture links and names 
    * ELT picture display
        * Array of ELT/BOD Member picture links and names
* Endpoints
* Wireframe
* Build HTML/JS/CSS skeleton