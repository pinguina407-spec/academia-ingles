document.addEventListener("DOMContentLoaded", () => {
    const btnScrollTop = document.getElementById("btnScrollTop");
    const btnTheme = document.getElementById("btnTheme");
    const menuToggle = document.getElementById("mobile-menu");
    const navMenu = document.getElementById("nav-menu");

    // 1. Menú Móvil
    if(menuToggle) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // 2. Control de Scroll (Botón subir y Animaciones)
    window.addEventListener("scroll", () => {
        if (btnScrollTop) {
            btnScrollTop.style.display = window.scrollY > 300 ? "flex" : "none";
        }

        document.querySelectorAll(".reveal").forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add("active");
            }
        });
    });

    if(btnScrollTop) {
        btnScrollTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 3. Modo Oscuro
    if(btnTheme) {
        btnTheme.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const icon = btnTheme.querySelector("i");
            if(document.body.classList.contains("dark-mode")) {
                icon.classList.replace("fa-moon", "fa-sun");
            } else {
                icon.classList.replace("fa-sun", "fa-moon");
            }
        });
    }
});

// Función para el juego (usada en games.html)
function checkAnswer() {
    const answer = document.getElementById('game-input').value.toLowerCase().trim();
    const feedback = document.getElementById('game-feedback');
    if (answer === "breakfast") {
        feedback.innerHTML = "🎉 Correct! Well done!";
        feedback.style.color = "green";
    } else {
        feedback.innerHTML = "❌ Try again!";
        feedback.style.color = "red";
    }
}