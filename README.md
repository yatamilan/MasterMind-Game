# Mastermind Game

## Overview
Mastermind is a classic code-breaking game where players attempt to guess a secret sequence of digits. The objective is to deduce the correct sequence within a limited number of attempts. After each guess, the game provides feedback indicating how many digits are correctly positioned and how many digits are correct but in the wrong position.

## Features
- **Player Name Input**: Players can enter their name at the start of the game, adding a personal touch.
- **Random Code Generation**: The game randomly generates a 4-digit secret code for each session.
- **Feedback Mechanism**: After each guess, players receive feedback to help them refine their subsequent guesses.
- **End Screen**: The game displays an end screen that shows the player's name along with a win or lose message.
- **Hint Option**: Players have the option to request hints during the game for additional assistance.

## File Structure
The project has the following structure:
Project Folder
│
├── index.html
│ 
└── scr ├── style.css 
        └── script.js

### File Descriptions
- **index.html**: This is the main HTML file that contains the structure and layout of the Mastermind game interface.
- **scr/style.css**: This stylesheet controls the visual presentation and layout of the game elements.
- **scr/script.js**: This JavaScript file contains the game logic, including functions for starting the game, generating the secret code, processing player guesses, and managing the game's state.

## Example Code
Here are some example snippets of code to give you an idea of how the game is implemented.

### HTML Snippet (index.html)
```html
<div id="welcome-screen">
    <h1>Welcome to Mastermind!</h1>
    <label for="player-name">Enter your name:</label>
    <input type="text" id="player-name" placeholder="Your Name">
    <button onclick="startGame()">Start Game</button>
</div>
