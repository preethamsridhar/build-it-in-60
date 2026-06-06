## Problem Statement
In this question, the candidate needs to build an interactive word search game application (Boggle Dictionary). You would be provided with a list of pre-defined words. Each character of the word needs to randomly place in a grid. The user of the game should be able to select characters in a sequence (horizontally, vertically, or diagonally). They can check if the selected sequence of characters form a valid word from the pre-defined list. The game should go on till they are able to identify all the words in the grid.

## Requirements
Core Functionality
Grid Generation

Create a dynamic N×N grid where N is user-configurable (default: 8×8)
Randomly place all the words on the grid. You can select a subset of the words based on the grid size i.e. use 4 words if grid is 8x8 and so on.
Remaining cells should contain a random letter (A-Z)
Grid should be visually appealing and responsive
User Input

Provide an input field where users can specify grid size (N)
Add a "Generate Grid" button to create a new grid
Include a "Check Word" button
Word Selection

Users can click on cells to select letters
Selected cells should be visually highlighted
Display the currently selected word as user clicks
Support word selection in multiple directions:
Horizontal (left-to-right)
Vertical (top-to-bottom)
Diagonal (both directions)
Word Validation

When "Check Word" is clicked, validate if the selected word exists in the dictionary
Provide visual feedback (success/error states)
Keep track of found words
Reset Functionality

"Reset Selection" button to clear current selection
"Reset Grid" button to generate a new grid
"Reset Game" button to clear all found words