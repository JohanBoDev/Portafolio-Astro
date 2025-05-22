const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const botonContacto = document.getElementById("contactame");

function toggleMenu() {
  mobileMenu.classList.toggle("show");

  if (mobileMenu.classList.contains("show")) {
    botonContacto && (botonContacto.style.zIndex = "-1");
    document.body.style.overflow = "hidden";
  } else {
    botonContacto && (botonContacto.style.zIndex = "0");
    document.body.style.overflow = "auto";
  }
}

mobileMenuButton?.addEventListener("click", toggleMenu);

const menuLinks = mobileMenu?.querySelectorAll("a");
menuLinks?.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    botonContacto && (botonContacto.style.zIndex = "0");
    document.body.style.overflow = "auto";
  });
});
