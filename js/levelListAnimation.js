const element = document.querySelectorAll(".title-section");
const headerHeight = document.querySelector("header").offsetHeight;
let index = 0;
let flag = 0;

function LevelListAnimationAdd(ind) {
    const line = document.querySelectorAll(".line");
    const text = document.querySelectorAll(".level-text a");
    const element = document.querySelectorAll(".title-section");
    for(let i = 0; i < ind; i++) {
        if (!text[i].classList.contains("active-color")) {
            text[i].classList.add("active-color");
            line[i+1].classList.add("active-color-bg");
        }
    }
}

function LevelListAnimationRemove() {
    const line = document.querySelectorAll(".line");
    const text = document.querySelectorAll(".level-text a");
    for(let i = line.length - 1; i > 0; i--) {
        if (line[i].classList.contains("active-color-bg")) {
            line[i].classList.remove("active-color-bg");
            text[i-1].classList.remove("active-color");
            break;
        }
    }
}

function changeColorIconFooter(flag) {
    if(flag == 1) document.querySelector(".level-icon-bottom svg").classList.add("level-icon-bottom-active");
    else document.querySelector(".level-icon-bottom svg").classList.remove("level-icon-bottom-active");
}

function scrollAnimated () {
    let marginMobile = 0;
    const documentEnd = document.querySelector("body").offsetHeight - window.innerHeight;
    const titleHeight = document.querySelector(".title-section").offsetHeight;
    if (window.innerWidth < 800) marginMobile = 70;
    while (index < element.length && window.scrollY >= (element[index].offsetTop - headerHeight - titleHeight - marginMobile)) {
        index++;
        LevelListAnimationAdd(index);
    }
    if(index > 0 && window.scrollY < (element[index-1].offsetTop - headerHeight - titleHeight - marginMobile)) {
        index--;
        LevelListAnimationRemove();
    }
    if(flag == 0 && window.scrollY >= (documentEnd - marginMobile - 20)) {
        flag = 1;
        changeColorIconFooter(flag);
    }
    else if (flag == 1 && window.scrollY < (documentEnd - marginMobile - 20)) {
        flag = 0;
        changeColorIconFooter(flag);
    }
}

window.addEventListener("load", function() {
    scrollAnimated();
});

window.onscroll = function () {
    scrollAnimated();
};