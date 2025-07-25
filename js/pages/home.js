export function init() {
  console.log("Page d'accueil (home.js) initialisée");

  // Exemple : animation d’accueil ou appel API
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.classList.add('show');
  }
}
