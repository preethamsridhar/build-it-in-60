Problem Statement
Design and implement a Voting Poll UI component. The component should allow users to vote on one of four options. Every time a vote is cast, the UI must immediately reflect the updated vote counts and percentage distribution.

Functional Requirements
Display a voting poll with four distinct options.

Each option must be represented by a clickable button.

Clicking a button should:

Increment the vote count for the selected option.
Recalculate the total votes.
Update the percentage distribution across all options.
Each option must display a progress bar representing its percentage share of total votes.

Progress bars should:

Update in real time when votes change.
Animate smoothly during percentage changes.
Each option’s progress bar should have a distinct color.

Display either:

Percentage labels per option, and/or
A total votes counter.