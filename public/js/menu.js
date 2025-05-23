const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const iconoMenu = document.getElementById("icono-menu");

// Abrir/cerrar menú
function toggleMenu() {
  const abierto = mobileMenu.classList.contains("block-nav");

  if (abierto) {
    mobileMenu.classList.remove("block-nav");
    mobileMenu.classList.add("hidden-nav");
    iconoMenu.classList.remove("fa-times");
    iconoMenu.classList.add("fa-bars");
    document.body.style.overflow = "auto";
  } else {
    mobileMenu.classList.remove("hidden-nav");
    mobileMenu.classList.add("block-nav");
    iconoMenu.classList.remove("fa-bars");
    iconoMenu.classList.add("fa-times");
    document.body.style.overflow = "hidden";
  }
}

mobileMenuButton?.addEventListener("click", toggleMenu);

// Cerrar menú al hacer clic en un enlace
mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("block-nav");
    mobileMenu.classList.add("hidden-nav");
    iconoMenu.classList.remove("fa-times");
    iconoMenu.classList.add("fa-bars");
    document.body.style.overflow = "auto";
  });
});
