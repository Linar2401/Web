var block = document.getElementById("MainContent")
var carousel = document.getElementById("carouselExampleControls");
var navbar = document.getElementById("nav");
var arrOfImg = document.getElementsByClassName("img-direction");
var enterTTC = document.getElementsByClassName("enterToTheCourses");
var btn = document.getElementById("Courses");
// block.style.marginTop = carousel.offsetHeight - navbar.offsetHeight + "px";
// alert(carousel.offsetHeight)
f1();
btn.style.top = enterTTC[0].offsetHeight/2 - btn.offsetHeight/2  + block.offsetHeight + carousel.offsetHeight + "px";
btn.style.left = enterTTC[0].offsetWidth/2 - btn.offsetWidth/2 + "px";
function f1() {
    btn.style.zIndex = "1000";
    btn.style.top = enterTTC[0].offsetHeight/2 - btn.offsetHeight/2 + block.offsetHeight + "px";
    btn.style.left = enterTTC[0].offsetWidth/2 - btn.offsetWidth/2 + "px";
    enterTTC[0].style.width = carousel.offsetWidth + "px";
    enterTTC[0].style.height = (carousel.offsetWidth/40)*11 + "px";
    navbar.style.width = carousel.offsetWidth + "px";
    for (let i = 0; i < arrOfImg.length; i++){
        arrOfImg[i].style.width = carousel.offsetWidth/4 + "px";
        arrOfImg[i].style.height = carousel.offsetWidth/4 + "px";
    }
}
window.onresize= function(){
    navbar.style.width = carousel.offsetWidth + "px";
    enterTTC[0].style.height = (carousel.offsetWidth/40)*11 + "px";
    enterTTC[0].style.width = carousel.offsetWidth + "px";
    for (var i = 0; i < arrOfImg.length; i++){
        arrOfImg[i].style.width = carousel.offsetWidth/5 + "px";
        arrOfImg[i].style.height = carousel.offsetWidth/5 + "px";
    }
    btn.style.top = enterTTC[0].offsetHeight/2 - btn.offsetHeight/2  + block.offsetHeight + carousel.offsetHeight + "px";
    btn.style.left = enterTTC[0].offsetWidth/2 - btn.offsetWidth/2 + "px";
}

document.getElementById("logbtn").onclick = function () {
    document.location.href = "profile.html";
}

document.getElementById("reg").onclick = function () {
    document.location.href = "profile.html";
}

function IncorrectEntet() {
    alert("Выполнен не корректный вход/регистрация. Пожалуйста, попробуйте еще раз.")
}
