const navtoggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navtoggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    if(navMenu.classList.contains("nav-menu_visible")){
        navtoggle.setAttribute("arial-label", "cerrar menu");
    }else{
        navtoggle.setAttribute("aria-label2", "abrir menu");
    }
});