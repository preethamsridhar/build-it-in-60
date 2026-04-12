## Grid Lights
You are given a 3×3 grid where certain cells are highlighted to form a C shape.
■ ■ ■
■ _ _
■ ■ ■

### Phase 1 — Activation

The highlighted cells are clickable
When a user clicks a highlighted cell, it lights up (changes color)
A cell can only be clicked once
Clicking an already-lit cell does nothing

### Phase 2 — Deactivation

Once all highlighted cells are lit, the deactivation phase begins automatically
The cells turn off one by one, in the reverse order they were clicked
There should be a 200ms delay between each cell turning off