// Mouse events: Hover over button
const mouseButton = document.getElementById('mouseButton');
const mouseMessage = document.getElementById('mouseMessage');
mouseButton.addEventListener('mouseover', () => {
    mouseMessage.textContent = "Button is being hovered!";
});
mouseButton.addEventListener('mouseout', () => {
    mouseMessage.textContent = "Hover effect ended!";
});
// Keyboard events: Track last key pressed
const keyboardInput = document.getElementById('keyboardInput');
const keyboardMessage = document.getElementById('keyboardMessage');

keyboardInput.addEventListener('keydown', (event) => {
    keyboardMessage.textContent = `Last key pressed: ${event.key}`;
});








