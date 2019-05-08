var navbar = document.getElementById("nav");
var intro_text = document.getElementById("intro_first");

function resize() {
    navbar.style.width = document.documentElement.clientWidth + "px";
    // intro_text.style.marginTop = navbar.offsetHeight + "px";
}

resize();

window.onresize = function () {
    navbar.style.width = document.documentElement.clientWidth + "px";
    // intro_text.style.marginTop = navbar.offsetHeight*4.1 + "px";
};

var btn1 = document.getElementById("sel-1");
var btn2 = document.getElementById("sel-2");
var btn3 = document.getElementById("sel-3");


function f1() {
    $("#aguitar").collapse("toggle");
}

function f2() {
    $("#avocal").collapse("toggle");
}

function f3() {
    $("#eguitar").collapse("toggle");
}

var active = 1;

btn1.onclick = function () {
    if (active !== 1){
        if (active === 2){
            btn2.classList.remove("active");
            btn1.classList.add("active");
            f2();
        }
        else {
            btn3.classList.remove("active");
            btn1.classList.add("active");
            f3();
        }
        active = 1;
    }
    else {
        btn1.classList.remove("active");
        active = 0;
        f1();
    }
}

btn2.onclick = function () {
    if (active !== 2){
        if (active === 1){
            btn1.classList.remove("active");
            btn2.classList.add("active");
            f1();
        }
        else {
            btn3.classList.remove("active");
            btn2.classList.add("active");
            f3();
        }
        active = 2;
    }
    else {
        btn2.classList.remove("active");
        active = 0;
        f2();
    }
}

btn3.onclick = function () {
    if (active !== 3){
        if (active === 2){
            btn2.classList.remove("active");
            btn3.classList.add("active");
            f2();
        }
        else {
            btn1.classList.remove("active");
            btn3.classList.add("active");
            f1();
        }
        active = 3;
    }
    else {
        btn3.classList.remove("active");
        active = 0;
        f3();
    }
}


// $("#sel-1").click(function () {
//     if (active != 1){
//         if (active == 2){
//             $('#avocal').collapse("hide");
//         }
//         else {
//
//         }
//         $('#aguitar').collapse("show");
//         active = 1;
//     }
//     else {
//         $('#aguitar').collapse("hide");
//     }
// })
//
// $("#sel-2").click(function () {
//     if (active != 2){
//         if (active == 1){
//             $('#aguitar').collapse("hide");
//         }
//         else {
//
//         }
//         $('#avocal').collapse("show");
//         active = 1;
//     }
//     else {
//         $('#avocal').collapse("hide");
//     }
// })

