var nav_bar = document.getElementById("nav");
var list_btn = document.getElementsByClassName("groups_btn");

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
    // schedule_main.style.height = schedule_main.offsetWidth/2  + "px";
    dropdown_btn3.style.borderRadius = dropdown_btn3.offsetHeight/2 + "px";
    dropdown_btn4.style.borderRadius = dropdown_btn4.offsetHeight/2 + "px";
    card_of_groups.style.width = card_of_groups.parentElement.offsetWidth*0.95 + "px";
    resize2();
}
// var schedule_main = document.getElementById("schedule_main");

var card_of_groups = document.getElementById("card_of_groups");
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

// schedule_main.style.height = schedule_main.offsetWidth/2  + "px";

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
    $("#schedule").collapse("toggle");
}

function f1() {
    $("#aboutMe").collapse("toggle");
}

function f4() {
    $("#settings").collapse("toggle");
}

function f3() {
    $("#event").collapse("toggle");
}

btn1.onclick = function () {
    if (active !==1){
        f1();
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
        f2();
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
        f3();
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
        f4();
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

var btn_edit = document.getElementById("edit_about_me");
var btn_save = document.getElementById("edit_save");

var fields_about_me = document.getElementsByClassName("my_profile");

btn_edit.onclick = function () {
    for (var i = 0; i < fields_about_me.length; i++){
        if (fields_about_me[i].hasAttribute("readonly")){
            fields_about_me[i].removeAttribute("readonly");
        }
    }
}

btn_save.onclick = function () {
    var flag = true;
    for (var i = 0; i < fields_about_me.length; i++){
        if (!fields_about_me[i].hasAttribute("readonly")){
            fields_about_me[i].setAttribute("readonly" , null);
        }
        else {
            flag = false;
        }
    }
    if (flag){
        alert("Данные успешно обновлены")
    }
}

function resize2() {
    for (var i = 0; i < list_btn.length; i++){
        list_btn[i].style.borderRadius = list_btn[i].offsetHeight/2 + "px"
    }
}

var list_close_btn = document.getElementsByClassName("close_std");
var deliting_field;
var close_btn = document.getElementById("close_btn");

// for (var i = 0; i < list_close_btn.length; i++){
//     list_close_btn[i].onclick = function () {
//         // this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
//         deliting_field = this.parentNode.parentNode;
//     }
// }

$('html').on('click','.close_std', function () {
    deliting_field = $(this).parent().parent();
});

// close_btn.onclick = function () {
//     // deliting_field.remove();
//
// }

$('html').on('click','#close_btn', function () {
    $(deliting_field).remove();
});

var list_adding_chk_boxes = document.getElementsByClassName("add_std");
var add_std_btn = document.getElementById("add_std_btn");
var list_of_std_in_group = document.getElementById("list_of_std_in_group");

add_std_btn.onclick = function () {
    for (var d = 0; d < list_adding_chk_boxes.length; d++){
        if (list_adding_chk_boxes[d].checked){
            var templ = document.createElement("div");
            var tmp_btn = document.createElement("button");
            var tmp_col_btn = document.createElement("div");
            var tmp_col_btn2 = document.createElement("div");
            templ.className = "row m-2 justify-content-between border-top";
            tmp_btn.className = "close_std close";
            tmp_btn.setAttribute("type","button");
            tmp_btn.setAttribute("data-dismiss","modal");
            tmp_btn.setAttribute("data-target","#confirm");
            tmp_btn.setAttribute("data-toggle","modal");
            tmp_btn.innerHTML = "<span aria-hidden=\"true\">&times;</span>";

            tmp_col_btn.className = "col";
            tmp_col_btn2.className = "col";
            tmp_col_btn.appendChild(tmp_btn);
            tmp_col_btn2.innerHTML = "<a href=\"#\"><p>" + list_adding_chk_boxes[d].nextElementSibling.textContent + "</p></a>"
            templ.appendChild(tmp_col_btn2);
            templ.appendChild(tmp_col_btn);
            list_of_std_in_group.appendChild(templ);

            // list_of_std_in_group.innerHTML += "<div class=\"row m-2 justify-content-between border-top\">\n" +
            //     "                    <div class=\"col\">\n" +
            //     "                        <a href=\"#\">\n" +
            // "                            <p>" + list_adding_chk_boxes[d].nextElementSibling.textContent + "</p>\n" +
            // "                        </a>\n" +
            //     "                    </div>\n" +
            //     "                    <div class=\"col\">\n" +
            //     "                        <button type=\"button\" class=\"close_std close\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#confirm\">\n" +
            //     "                            <span aria-hidden=\"true\">&times;</span>\n" +
            //     "                        </button>\n" +
            //     "                    </div>\n" +
            //     "                </div>";
            list_close_btn = document.getElementsByClassName("close_std");
            console.log(list_close_btn);
        }
    } 
}


function insert() {
    list_of_std_in_group.innerHTML += 100;
}

function makeSTD() {
    var ss = document.getElementsByClassName("teacher");
    for (var h = 0; h < ss.length; h++){
        ss[h].classList.add("d-none");
    }
}

function makeT() {
    var ss = document.getElementsByClassName("teacher");
    for (var h = 0; h < ss.length; h++){
        ss[h].classList.remove("d-none");
    }
}

var btn_req = document.getElementById("btn_request");

btn_req.onclick = function () {
    alert("Ваша заявка успешно принято в обработку.");
}








