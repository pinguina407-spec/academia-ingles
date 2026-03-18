document.addEventListener("DOMContentLoaded", () => {

    const btnScrollTop = document.getElementById("btnScrollTop");
    const btnTheme = document.getElementById("btnTheme");
    const menuToggle = document.getElementById("mobile-menu");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    window.addEventListener("scroll", () => {

        btnScrollTop.style.display =
            window.scrollY > 300 ? "flex" : "none";

        document.querySelectorAll(".reveal").forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add("active");
            }
        });
    });

    btnScrollTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    btnTheme.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

});