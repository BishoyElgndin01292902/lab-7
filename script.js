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