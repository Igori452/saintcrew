const languageButtonRu = document.querySelector(".ru-button");
const languageButtonEn = document.querySelector(".en-button");

function changeLanguage (flagLanguage) {
    const textRu = document.querySelectorAll(".ru-wraper");
    const textEn = document.querySelectorAll(".en-wraper");

    if (flagLanguage == "RU") {
        languageButtonRu.classList.add("active-color");
        languageButtonEn.classList.remove("active-color");

        textRu.forEach(textElement => {
            textElement.classList.add("language-wraper-active");
            textElement.classList.remove("language-wraper-none");
        });

        textEn.forEach(textElement => {
            textElement.classList.add("language-wraper-none");
            textElement.classList.remove("language-wraper-active");
        });
    }
    else if (flagLanguage == "EN") {
        languageButtonEn.classList.add("active-color");
        languageButtonRu.classList.remove("active-color");

        textEn.forEach(textElement => {
            textElement.classList.add("language-wraper-active");
            textElement.classList.remove("language-wraper-none");
        });

        textRu.forEach(textElement => {
            textElement.classList.add("language-wraper-none");
            textElement.classList.remove("language-wraper-active");
        });
    }
}

window.addEventListener("load", function() { changeLanguage("EN"); }); //default language

languageButtonRu.addEventListener("click", function () { changeLanguage("RU"); });

languageButtonEn.addEventListener("click", function () { changeLanguage("EN"); });