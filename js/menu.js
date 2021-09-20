function toggleButton(button){
    button.classList.toggle("active");
    button.classList.toggle("not-active");

    if(button.classList.contains("active")){
        document.getElementById('menu').style.display = "flex";
    }
    else{
        document.getElementById('menu').style.display = "none";
    }
}