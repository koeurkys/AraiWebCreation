export function loadHeader() {
  fetch('../components/header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('include-header').innerHTML = data;

      const header = document.getElementById('main-header');
      const hero = document.querySelector('.hero');

      if (header && hero) {
        const headerHeight = header.offsetHeight;
        hero.style.marginTop = `-${headerHeight}px`;
        hero.style.paddingTop = `${headerHeight}px`;
      }

      highlightActiveLink(); // Appelé après injection du header
    });
}

// Fonction utilitaire pour activer le lien courant
function highlightActiveLink() {
  const thisPage = window.location.pathname;
  const links = document.querySelectorAll(".link");

  links.forEach((link) => {
    if (thisPage === link.pathname) {
      link.classList.add("active");
    }
  });
}
