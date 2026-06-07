In this coding challenge, the candidate needs to build a board game that has a grid of 12x12 and allows two players to compete.

Requirements
Layout

The UI should be divided into two sections:

Game Board (on the left): a 12x12 grid.
Information Panel (on the right): displays game status and history.
Gameplay Mechanics

The game is turn-based and supports two players:

Player One: Red
Player Two: Green
On a player’s turn, they can click an empty circle on the grid to place their marker (a filled circle of their color).

Once placed, a circle cannot be changed.

Game Logic

Players alternate turns.

The first player to align five consecutive circles in any direction (horizontal, vertical, or diagonal) wins.

When a player wins:

Display the winner in the Information Panel.
Disable further interaction with the board.
Information Panel Features

Show the current turn and winner (if any).
Maintain a history of all moves.
Allow users to navigate to any past move to see the board state at that point.
Include an option to reverse the move history (e.g., most recent move shown first or last).