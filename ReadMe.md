Pfizer ELT Gameshow REDUX

Players should be greeted by a splash page with the logo for the game, and a START button.

Once the button is pressed, players will be asked first how many players will be active. The game should account for 1 - 3 players.

After the number of players are selected, the players will be asked to input their names. The number of inputs should adjust depending on the number of active players selected previously.

The game will then display a splash page with the rules of the game. This also gives breathing room for a host/presenter to vamp before starting the game in earnest. The bottom of this page should have a START button to proceed.

The game will them proceed in rounds, cycling from 1 to MAX before looping back to 1. 

Players will first be presented with a photo of the ELT member. By clicking on the picture it will slide the picture to the left, and display five buttons to select a correct answer from. A static answer at the bottom of the list of buttons will always read “NOT AN ELT/BOD MEMBER”.

A meter for every active player will remain at the bottom of the screen, and will update with correct answers from the individual player or players - awarding a STAR for each correct answer.

Each round will consist of one question per player, then loop back to player 1 for the next round. A single player should be asked to identify all 30 possible entries (24 ELT/BOD members, and 6 FAKES) and further split to 15 and 10 per player depending on the volume of active players.

Ultimately, wen a single player is queried on all 30 possible variables, their correct answers will be tallied and a letter grade will be displayed.

If multiple players are active, then the name of the player or players with the larges amount of correct answers (STARS) will be displayed as the games winner.

A button asking if players want to PLAY AGAIN will be displayed in both cases.

IF THE USER CLICKS “PLAY AGAIN”
* The game will load a screen asking ion the same players will be playing the game
    * IF YES
        * Then the game will keep the stored names and number of active players and restart
    * IF NO
        * The game will return to the page asking for the number of active players

1. Identify Requirements/Needs
    1. List Out App Components
        1. PAGE 1 - Attract Mode
            1. Logo (img)
            2. Start game button (button)
            3. Music player
        2. PAGE 2 - Player Select
            1. Header (div)
                1. Logo (img)
                2. Empty p tag
            2. “How many players?” (h1)
            3. 1 Player button (button)
            4. 2 Players button (button)
            5. 3 Players button (button)
        3. PAGE 3 - Player Define
            1. Header (div)
                1. Logo (div)
                2. Empty p tag
            2. “Enter player names” (h1)
            3. Three labeled text inputs for players 1, 2, and 3 (input x3)
            4. Start Game button (button)
        4. PAGE 4 - Gameplay
            1. Header (div)
                1. Logo (img)
                2. Player Name (p)
            2. ELT/BOD/FAKE profile picture (img)
            3. Name Button (button)
            4. Name Button (button)
            5. Name Button (button)
            6. Name Button (button)
            7. Not An ELT/BOD Member Button (button)
            8. Correct/Incorrect (div)
            9. 1 Player (div)
                1. Meter with 30 stars (img)
            10. 2 Players Meter (div x2)
                1. Meter with 15 stars (img)
                2. Meter with 15 stars (img)
            11. 3 Players Meter (div x3)
                1. Meter with 10 stars (img)
                2. Meter with 10 stars (img)
                3. Meter with 10 stars (img)
        5. PAGE 5 - Win/Lose/Grade
            1. Header (div)
                1. Logo (img)
                2. Empty p tag
            2. Winning Player Name (h1)
            3. Winning Player Stars Count (p1)
            4. Play Again button (button)
    2. Find Out Data Needs
        1. Array of ALL possible Persons (obj [name, gender, img])
        2. Array of MALE Persons (names)
        3. Array of FEMALE Persons (names)
        4. Logo (img)
        5. Profile Pictures (img x 30)
        6. Star (img)
2. Wireframe App
3. Build the HTML Skeleton
4. CODE
    1. Listen for when the player starts the game from the Attract Mode
    2. Listen for when the player chooses the number of players
    3. Listen for the submit button of Player Names
        1. Store names in variables