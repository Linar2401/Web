var navbar = document.getElementById("nav");
var intro_text = document.getElementById("intro_first");

function resize() {
    navbar.style.width = document.documentElement.clientWidth + "px";
    intro_text.style.marginTop = navbar.offsetHeight + "px";
}

resize();

window.onresize = function () {
    navbar.style.width = document.documentElement.clientWidth + "px";
    intro_text.style.marginTop = navbar.offsetHeight*1.1 + "px";
};

var btn1 = document.getElementById("sel-1");
var btn2 = document.getElementById("sel-2");
var btn3 = document.getElementById("sel-3");

var active = 0;

btn1.onclick = function () {
    if (active != 1){
        if (active == 2){
            btn2.classList.remove("active");
            btn1.classList.add("active");

        }
        else {
            btn3.classList.remove("active");
            btn1.classList.add("active");
        }
        active = 1;
    }
    else {
        btn1.classList.remove("active");
        active = 0;
    }
}

btn2.onclick = function () {
    if (active != 2){
        if (active == 1){
            btn1.classList.remove("active");
            btn2.classList.add("active");
        }
        else {
            btn3.classList.remove("active");
            btn2.classList.add("active");
        }
        active = 2;
    }
    else {
        btn2.classList.remove("active");
        active = 0;
    }
}

btn3.onclick = function () {
    if (active != 3){
        if (active == 2){
            btn2.classList.remove("active");
            btn3.classList.add("active");
        }
        else {
            btn1.classList.remove("active");
            btn3.classList.add("active");
        }
        active = 3;
    }
    else {
        btn3.classList.remove("active");
        active = 0;
    }
}

