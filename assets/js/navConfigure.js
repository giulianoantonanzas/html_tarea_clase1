function menuPhone() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
}


window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementById("nav").style.marginBottom = "-8px";
        document.getElementById("nav").style.marginTop = "-8px";
        document.getElementById("nav").style.transition="0.4s";
        document.getElementById("nav").style.backgroundColor="rgba(0, 0, 0, 0.212)";
    } else {
        document.getElementById("nav").style.margin = "0px 0px";
        document.getElementById("nav").style.transition="0.4s";
        document.getElementById("nav").style.backgroundColor="transparent";
    }
}
