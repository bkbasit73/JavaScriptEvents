// Mouse events: Hover over button
const mouseButton = document.getElementById('mouseButton');
const mouseMessage = document.getElementById('mouseMessage');
mouseButton.addEventListener('mouseover', () => {
    mouseMessage.textContent = "Button is being hovered!";
});
mouseButton.addEventListener('mouseout', () => {
    mouseMessage.textContent = "Hover effect ended!";
});








