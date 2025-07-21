// Mouse Events
const hoverBtn = document.getElementById('hoverBtn');
const hoverMsg = document.getElementById('hoverMsg');

hoverBtn.addEventListener('mouseover', () => {
  hoverMsg.textContent = 'Mouse is over the button!';
});

hoverBtn.addEventListener('mouseout', () => {
  hoverMsg.textContent = 'Mouse left the button!';
});

// Keyboard Events
const keyInput = document.getElementById('keyInput');
const keyMsg = document.getElementById('keyMsg');

keyInput.addEventListener('keyup', (e) => {
  keyMsg.textContent = `You pressed: ${e.key}`;
});


// Form Events
const form = document.getElementById('myForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent reload
  formMsg.textContent = 'Form submitted successfully!';
});

// Focus and Blur Events
const focusInput = document.getElementById('focusInput');
const focusMsg = document.getElementById('focusMsg');

focusInput.addEventListener('focus', () => {
  focusMsg.textContent = 'Input is focused!';
});

focusInput.addEventListener('blur', () => {
  focusMsg.textContent = 'Input lost focus!';
});


// Event Delegation
const btnContainer = document.getElementById('btnContainer');
const delegateMsg = document.getElementById('delegateMsg');

btnContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    delegateMsg.textContent = `You clicked ${e.target.textContent}`;
  }
});