document.addEventListener("DOMContentLoaded", () => {
    const btnScrollTop = document.getElementById("btnScrollTop");
    const btnTheme = document.getElementById("btnTheme");

    // Lógica Scroll: Botón subir y Revelado de elementos
    window.addEventListener("scroll", () => {
        // Botón subir
        if (window.scrollY > 300) {
            btnScrollTop.style.display = "flex";
        } else {
            btnScrollTop.style.display = "none";
        }

        // Animaciones Reveal
        const reveals = document.querySelectorAll(".reveal");
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                element.classList.add("active");
            }
        });
    });

    // Subir al inicio
    btnScrollTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Cambio de Tema (Luna/Sol)
    btnTheme.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const icon = btnTheme.querySelector("i");
        if (document.body.classList.contains("dark-mode")) {
            icon.classList.replace("fa-moon", "fa-sun");
            btnTheme.style.background = "#f1c40f";
            btnTheme.style.color = "#333";
        } else {
            icon.classList.replace("fa-sun", "fa-moon");
            btnTheme.style.background = "#333";
            btnTheme.style.color = "white";
        }
    });
});