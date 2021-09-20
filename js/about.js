let string = '"Computers are incredibly fast, accurate and stupid; humans are incredibly slow, inaccurate and brilliant; together they are powerful beyond imagination."';
let string_chars = string.split("");
let shell = document.getElementById("shell");


function write_to_shell(shell, string_chars){
    let iterator = 0;
    shell.innerHTML = "|";

    const interval = setInterval(function(){
    if(iterator >= string_chars.length){
        clearInterval(interval);

        let dash_iterations = 0;
        const dash_interval = setInterval(function(){
            if(dash_iterations % 2 == 0)
                shell.innerHTML = string.substring(0, string.length);
            else
                shell.innerHTML = shell.innerHTML + "|";
            if(dash_iterations >= 2){
                clearInterval(dash_interval);
                setTimeout(function(){
                    shell.innerHTML += "<br>- Albert Einstein";
                }, 500);
            }
            dash_iterations ++;
        },500);
    }
    else{
        shell.innerHTML = string.substring(0, iterator + 1) + "|";
        iterator ++;
    }
    },100);
}

write_to_shell(shell, string_chars);
setInterval(function(){
    write_to_shell(shell, string_chars);
}, 25000);