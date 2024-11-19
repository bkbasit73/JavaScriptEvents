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


// Form events: Prevent default submit behavior
const form = document.getElementById('myForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = "Form submitted successfully!";
});

// Focus events: Handle focus and blur
const focusInput = document.getElementById('focusInput');
const focusMessage = document.getElementById('focusMessage');

focusInput.addEventListener('focus', () => {
    focusMessage.textContent = "Input field is focused!";
});

focusInput.addEventListener('blur', () => {
    focusMessage.textContent = "Input field lost focus!";
});

// Event delegation: Handle clicks inside a container
const buttonContainer = document.getElementById('buttonContainer');
const delegationMessage = document.getElementById('delegationMessage');

buttonContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('containerButton')) {
        delegationMessage.textContent = `You clicked on: ${event.target.textContent}`;
    }
});




