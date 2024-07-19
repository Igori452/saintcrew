const inputSearch = document.querySelector("#searchInput");
const placeholderSpan = document.querySelectorAll(".placeholder-wraper span");

function placeholderFunctionInput() {
    let flag = 0
    for(let element = 0; element < placeholderSpan.length; element++) {
        if (placeholderSpan[element].classList.contains("input-span-none")) {
            flag = 1
            break
        }
    }
    if (flag == 1 && inputSearch.value.length == 0) { 
        placeholderSpan.forEach(placeholderSpanElement => { 
            placeholderSpanElement.classList.remove("input-span-none"); 
        });
    }
    else if (flag == 0 && inputSearch.value.length != 0) {
        placeholderSpan.forEach(placeholderSpanElement => {
            placeholderSpanElement.classList.add("input-span-none");
        });
    }
}

window.addEventListener("load", function() { placeholderFunctionInput(); }); 
inputSearch.addEventListener("input", function() { placeholderFunctionInput(); });