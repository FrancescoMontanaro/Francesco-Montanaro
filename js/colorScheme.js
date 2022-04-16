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


function setColorScheme(){
    let color_scheme = localStorage.getItem("colorScheme");
    let html = document.getElementsByTagName('html')[0];

    if(color_scheme === "dark"){
        html.classList.add("dark-mode");
        document.getElementsByName('theme-color')[0].setAttribute("content", "#222226");
    }
    else{
        html.classList.remove("dark-mode");
        document.getElementsByName('theme-color')[0].setAttribute("content", "#ffffff");
    }
}


setColorScheme();