if (window.screen.width <= 428){
    document.documentElement.style.setProperty("--coloumn_count","repeat(1)");
}

function resizeGrid(){
    if (window.innerWidth < 600){
        document.getElementsByClassName("wrapper")[0].style.gridTemplateColumns = "repeat(1, 1fr)";
    }
}
window.onresize = resizeGrid;