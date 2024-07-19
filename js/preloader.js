window.addEventListener("load", function () {
    const preloader = document.querySelector(".modal-wrapper-preloader");
    const doc = document.querySelector("html");
    preloader.classList.add("modal-wrapper-preloader-hidden");
    setTimeout(function () {
         preloader.style.display = 'none'
         doc.classList.remove("overflow-hidden");
    }, 500);
});