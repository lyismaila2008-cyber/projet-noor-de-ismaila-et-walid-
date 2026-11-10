// Menu de navigation sur téléphone

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuButton.setAttribute(
    "aria-expanded",
    String(isOpen)
  );
});

// Fermer le menu après avoir cliqué sur un lien

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Sélection automatique de la formule

document.querySelectorAll("[data-package]").forEach(link => {
  link.addEventListener("click", () => {
    const trip = document.querySelector("#trip");

    const value = link.dataset.package.includes("Hajj")
      ? "Hajj"
      : "Omra";

    trip.value = value;
  });
});

// Formulaire de réservation de démonstration

document.querySelector("#booking-form").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.querySelector('[name="name"]').value.trim();

  document.querySelector("#form-message").textContent =
    `Merci ${name} ! Votre demande de démonstration a bien été prise en compte. Aucun message n'a été envoyé.`;

  event.target.reset();
});