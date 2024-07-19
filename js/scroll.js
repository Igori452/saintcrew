const navigation = document.querySelectorAll(".level-list a");

navigation.forEach(nav_elem => {
    nav_elem.addEventListener("click", function(event) {
        event.preventDefault();

        const id_nav_elem = nav_elem.getAttribute("href");
        const elem_id = document.querySelector(id_nav_elem);

        let marginMobile = 0;
        if (window.innerWidth < 800) marginMobile = 50;

        window.scroll({
            top : elem_id.offsetTop - document.querySelector("header").offsetHeight - 20 - marginMobile,
            behavior: 'smooth'
        });
    });
});