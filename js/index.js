let string = 'console.log("Hello, World!");';

document.addEventListener('DOMContentLoaded', () => {
    const shell = document.getElementById('shell');
    let index = 0;
  
    function type() {
      if (index < string.length) {
        shell.textContent += string[index];
        index++;
        setTimeout(type, 100);
      }
      else{
        setTimeout(function(){
            shell.innerHTML += "<br>>>> Hello, World!";
        }, 500);
      }
    }
  
    type();
});