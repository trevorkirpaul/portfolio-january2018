const btnClose = document.getElementById('closeButton');
const terminalWindow = document.getElementById('terminalWindow');
const closeMessage = document.getElementById('close-message');

btnClose.addEventListener("click", () => {
  terminalWindow.style.display = 'none';
  closeMessage.style.display = 'inline-block';
});

closeMessage.addEventListener("click", () => {
  terminalWindow.style.display = 'block';
  closeMessage.style.display = 'none';
})