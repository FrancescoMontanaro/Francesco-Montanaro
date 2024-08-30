let string = '"Computers are incredibly fast, accurate and stupid; humans are incredibly slow, inaccurate and brilliant; together they are powerful beyond imagination."';

document.addEventListener('DOMContentLoaded', () => {
    const shell = document.getElementById('shell');
    let index = 0;
  
    function type() {
      if (index < string.length) {
        shell.textContent += string[index];
        index++;
        setTimeout(type, 100);
      }
    }
  
    type();
});