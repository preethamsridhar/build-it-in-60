In this coding challenge, we need to build an interactive feature where circles are drawn on the screen in response to user clicks. The circles will have specific behaviors based on user actions such as dragging, clicking, and overlapping. The application should dynamically update the circle's size during a drag operation and detect when two circles overlap, changing the color of the second circle in such cases.

Functional Requirements
Left Mouse Button (Primary Circle):

When the user clicks and drags with the left mouse button, a circle should be drawn at the initial click position. The radius of the circle should adjust in real time as the user drags the mouse.
Once the user releases the left mouse button, the circle should be finalized.
If the user left clicks without dragging, left circle should be cleared from the screen.
Right Mouse Button (Secondary Circle):

The same functionality should apply to the right mouse button, allowing the user to place a second circle by clicking and dragging.
The circle should adjust in real time as the user drags the mouse and be finalized upon releasing the right mouse button.
If the user right clicks without dragging, right circle should be cleared from the screen.
Circle Overlap Detection:

If circles overlap, the later circle in the sequence (the one that was created second) should change its color.
The overlap should be recalculated every time a circle is created or updated.
Replacing Circles:

Each time the user draws a circle with the left or right mouse button, the existing circle for that button should be replaced with the new one.
Mockups
Non-overlapping circles
non-overlapping circles

Overlapping circles
overlapping circles

Demo and Solution

Submission
Start the timer, complete your solution, test your solution against the test cases provided by the platform, and submit it. Ideally, you should finish this question within 90 mins.