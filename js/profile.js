var nav_bar = document.getElementById("nav");

function resize() {
    nav_bar.style.width = document.documentElement.clientWidth + "px";
}

resize();

window.onresize = function () {
    nav_bar.style.width = document.documentElement.clientWidth + "px";
    spec_text.style.borderRadius = spec_text.offsetHeight/2 + "px";
    spec_text.style.width = dropdown_btn1.offsetWidth + "px";
    spec_text2.style.borderRadius = spec_text2.offsetHeight/2 + "px";
    spec_text2.style.width = dropdown_btn2.offsetWidth + "px";
    schedule_main.style.height = schedule_main.offsetWidth/2  + "px";
    dropdown_btn3.style.borderRadius = dropdown_btn3.offsetHeight/2 + "px";
    dropdown_btn4.style.borderRadius = dropdown_btn4.offsetHeight/2 + "px";
}
var schedule_main = document.getElementById("schedule_main");

var spec_text = document.getElementById("spec_text");
var spec_btn1 = document.getElementById("spec_btn1");
var spec_btn2 = document.getElementById("spec_btn2");
var spec_btn3 = document.getElementById("spec_btn3");
var dropdown_btn1 = document.getElementById("dropdown_btn1");

var spec_text2 = document.getElementById("spec_text2");
var spec_btn4 = document.getElementById("spec_btn4");
var spec_btn5 = document.getElementById("spec_btn5");
var spec_btn6 = document.getElementById("spec_btn6");
var dropdown_btn2 = document.getElementById("dropdown_btn2");

var dropdown_btn3 = document.getElementById("dropdown_btn3");
var dropdown_btn4 = document.getElementById("dropdown_btn4");

dropdown_btn3.style.borderRadius = dropdown_btn3.offsetHeight/2 + "px";
dropdown_btn4.style.borderRadius = dropdown_btn4.offsetHeight/2 + "px";

schedule_main.style.height = schedule_main.offsetWidth/2  + "px";

spec_text.style.borderRadius = spec_text.offsetHeight/2 + "px";
spec_text.style.width = dropdown_btn1.offsetWidth + "px";

spec_btn1.onclick = function () {
    spec_text.innerText = spec_btn1.innerText;
}

spec_btn2.onclick = function () {
    spec_text.innerText = spec_btn2.innerText;
}

spec_btn3.onclick = function () {
    spec_text.innerText = spec_btn3.innerText;
}

spec_text2.style.borderRadius = spec_text.offsetHeight/2 + "px";
spec_text2.style.width = dropdown_btn2.offsetWidth + "px";

spec_btn4.onclick = function () {
    spec_text2.innerText = spec_btn4.innerText;
}

spec_btn5.onclick = function () {
    spec_text2.innerText = spec_btn5.innerText;
}

spec_btn6.onclick = function () {
    spec_text2.innerText = spec_btn6.innerText;
}

var btn1 = document.getElementById("aboutMeBTN");
var btn2 = document.getElementById("scheduleBTN");
var btn3 = document.getElementById("eventBTN");
var btn4 = document.getElementById("settingsBTN");

var active = 2;

function close() {
    f1();
    f2();
    f3();
    f4();
}

function f2() {
    $("#schedule").collapse("hide");
}

function f1() {
    $("#aboutMe").collapse("hide");
}

function f4() {
    $("#settings").collapse("hide");
}

function f3() {
    $("#event").collapse("hide");
}

btn1.onclick = function () {
    if (active !==1){
        switch (active) {
            case 2:
                btn2.classList.remove("active");
                f2();
                break;
            case 3:
                btn3.classList.remove("active");
                f3();
                break;
            case 4:
                btn4.classList.remove("active");
                f4();
                break;
        }
        btn1.classList.add("active");
        active = 1;
    }
}

btn2.onclick = function () {
    if (active !==2){
        switch (active) {
            case 1:
                btn1.classList.remove("active");
                f1();
                break;
            case 3:
                btn3.classList.remove("active");
                f3();
                break;
            case 4:
                btn4.classList.remove("active");
                f4();
                break;
        }
        btn2.classList.add("active");
        active = 2;
    }
}


btn3.onclick = function () {
    if (active !==3){
        switch (active) {
            case 2:
                btn2.classList.remove("active");
                f2();
                break;
            case 1:
                btn1.classList.remove("active");
                f1();
                break;
            case 4:
                btn4.classList.remove("active");
                f4();
                break;
        }
        btn3.classList.add("active");
        active = 3;
    }
}


btn4.onclick = function () {
    if (active !==4){
        switch (active) {
            case 2:
                btn2.classList.remove("active");
                f2();
                break;
            case 3:
                btn3.classList.remove("active");
                f3();
                break;
            case 1:
                btn1.classList.remove("active");
                f1();
                break;
        }
        btn4.classList.add("active");
        active = 4;
    }
}




