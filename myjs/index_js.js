window.οnlοad=function(){
var himg = document.querySelector(".huangfu");
var gimg = document.querySelector(".body_box");
himg.onclick = function(){
    console.log("himg");
    for(var i = 1; i<=6; i++){
        gimg.style.background = "url(../imgs/bodyimg/pic"+i+".jpg)";

    }
}
}