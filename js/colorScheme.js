function changeColorScheme(){
    let html = document.getElementsByTagName('html')[0];
    html.classList.toggle('dark-mode');

    if(html.classList.contains('dark-mode')){
        localStorage.setItem("colorScheme", "dark");
        document.getElementsByName('theme-color')[0].setAttribute("content", "#222226");
    }
    else{
        localStorage.setItem("colorScheme", "light");
        document.getElementsByName('theme-color')[0].setAttribute("content", "#ffffff");
    }
}


function colorScheme(){
    let color_scheme = localStorage.getItem("colorScheme");
    let html = document.getElementsByTagName('html')[0];

    if(color_scheme === "dark"){
        html.classList.add("dark-mode");
        document.getElementsByName('theme-color')[0].setAttribute("content", "#222226");
    }
    else if(color_scheme === "light"){
        html.classList.remove("dark-mode");
        document.getElementsByName('theme-color')[0].setAttribute("content", "#ffffff");
    }
    else{
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            html.classList.remove("dark-mode");
            document.getElementsByName('theme-color')[0].setAttribute("content", "#ffffff");
        }
        else{
            html.classList.add("dark-mode");
            document.getElementsByName('theme-color')[0].setAttribute("content", "#222226");
        }
    }
}


window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const new_color_scheme = event.matches ? "dark" : "light";
    let html = document.getElementsByTagName('html')[0];
    
    if (new_color_scheme === "dark"){
        localStorage.setItem("colorScheme", "dark");
        html.classList.add("dark-mode");
        document.getElementsByName('theme-color')[0].setAttribute("content", "#222226");
    }
    else{
        localStorage.setItem("colorScheme", "light");
        html.classList.remove("dark-mode");
        document.getElementsByName('theme-color')[0].setAttribute("content", "#ffffff");
    }
});


colorScheme();