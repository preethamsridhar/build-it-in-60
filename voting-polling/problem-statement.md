# A convesation in the interviewer

**Interviewer**: Alright, so today we're going to build a small piece of a collaborative whiteboard tool. Think of something like Figma or Excalidraw, but we're only going to focus on one specific feature.
So here's what I want you to do — I'm going to give you an array of shapes. Each shape has an id, a type — which can be either a rectangle or a circle — and it has x, y, width, height, and a color. Your job is to render these shapes on a canvas area.
Once you've done that, I want you to make them selectable. So when I click on a shape, it should show some kind of visual indicator that it's selected — could be a dashed border, handles, whatever you think makes sense. Clicking on empty space should deselect it.
After that, I want the selected shape to be draggable. So I should be able to click and hold on a shape and drag it around the canvas. Make sure it doesn't go outside the canvas boundary.
One thing I want to be clear about — don't use any drag and drop libraries. Implement the mouse events yourself. And don't use the canvas API either, just use regular DOM elements and CSS.
Once you're done with that, we can talk about how you'd extend this further.
Any questions before you start?

**Preetham**: Does the board have to be full screen?

**Interviewer**: No, it doesn't have to be full screen. Just give it a fixed width and height — something like 800×600 is fine. The important thing is that shapes can't be dragged outside of whatever boundary you define

**Preetham**: I'm thinking of rendering a background grid — like graph paper — so the canvas has visible grid lines. The x and y values in the shape data will map directly to pixel coordinates on that grid. So if a shape has x: 100, y: 200, it renders 100px from the left and 200px from the top of the canvas. I might also add snapping later so shapes align to the grid when dropped.

**Interviewer**: Yeah that works. The coordinate system is up to you as long as it's consistent. Grid background is a nice touch too — keep it subtle so it doesn't distract from the shapes.

