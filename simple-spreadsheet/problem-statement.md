## Problem Statement

Build a basic Google Sheets–like UI mock using React. This is not a full spreadsheet application. The goal is to create a simple, editable grid that supports dynamically adding rows and columns.

The grid should behave like a 2D sheet where each cell is editable, and users can expand the sheet using buttons.

### Requirements
- Grid-Based UI
  - Display a grid of rows and columns similar to a spreadsheet.
  - The grid should be rendered dynamically based on the underlying data structure. Default you can render 3x3 grid.

- Initial State
  - Start with a predefined number of rows and columns (for example, a small square grid).

- Editable Cells
  - Each cell in the grid should be editable by the user.
  - Updating a cell should reflect immediately in the UI.

- Dynamic Row Management
  - Provide a way to add new rows to the grid.
  - Newly added rows should align with the existing column structure.

- Dynamic Column Management
  - Provide a way to add new columns to the grid.
  - Newly added columns should appear consistently across all existing rows.

- User Interface
  - Keep the UI simple and intuitive.
  - Basic styling is sufficient; visual polish is not the focus.

- Scope Limitation
  - Advanced spreadsheet features (formulas, sorting, validation, persistence, etc.) are out of scope.