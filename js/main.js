document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    const closeMenu = () => {
        if (!nav || !menuToggle) {
            return;
        }

        nav.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
    };

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("menu-open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (!targetSection) {
                return;
            }

            e.preventDefault();
            closeMenu();

            const headerOffset = header ? header.offsetHeight + 12 : 0;
            const targetPosition =
                targetSection.getBoundingClientRect().top + window.scrollY - headerOffset;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navLinks && navLinks.offsetHeight > 0) {
            closeMenu();
        }
    });
});
