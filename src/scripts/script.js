const btnClose = document.getElementById('closeButton');
const btnMax = document.getElementById('maxButton');
const btnMin = document.getElementById('minButton');
const inpBash = document.getElementById('bashInp');
const terminalWindow = document.getElementById('terminalWindow');
const terminalPanel = document.getElementById('terminalPanel');
const closeMessage = document.getElementById('close-message');

// used in button  actions 
let maxToggle = false;
let minToggle = false;
const original_height = terminalPanel.style.height;
const original_width = terminalWindow.style.width;

// button actions
btnMin.addEventListener("click", () => {
  if (!minToggle) {
    
    terminalPanel.style.display = 'none';
    minToggle = !minToggle;
  } else {
    terminalPanel.style.display = 'block';
    minToggle = !minToggle;
  }
})
btnClose.addEventListener("click", () => {
  terminalWindow.style.display = 'none';
  closeMessage.style.display = 'inline-block';
});
btnMax.addEventListener("click", () => {
  // check if maxButton has been clicked
  // then changes size of terminal window
  if (!maxToggle) {
    terminalWindow.style.width = '90%';
    terminalPanel.style.height = '90vh';
    maxToggle = !maxToggle;
  } else {
    terminalWindow.style.width = original_width;
    terminalPanel.style.height = original_height;
    maxToggle = !maxToggle;
  }
})

// terminal input actions
inpBash.addEventListener("keydown", (e) => {
  // get all terminalWindow lines
  const consoleLines = [
    ...document.getElementsByClassName('console-text'),
    ...document.getElementsByClassName('console-return')
  ];
  
  const val = e.target.value;

  if (e.keyCode === 13) {
    if (val.includes('help')) {
      console.log('console commands:');
      console.log('clear: clears screen');
    };
    val === '--v' && console.log('Trevorbuntu 16.04 LTS'); 
    val === 'clear' && consoleLines.forEach(line => line.style.display = 'none');
    
    e.target.value = '';
  }
})


closeMessage.addEventListener("click", () => {
  terminalWindow.style.display = 'block';
  closeMessage.style.display = 'none';
})

