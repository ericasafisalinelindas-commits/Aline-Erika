const menuToggle = document.querySelector("#menuToggle");
const menu = document.querySelector("#menu");

menuToggle.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  menuToggle.setAttribute("aria-expanded", String(aberto));
  menuToggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  menuToggle.textContent = aberto ? "✕" : "☰";
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuToggle.textContent = "☰";
  });
});
