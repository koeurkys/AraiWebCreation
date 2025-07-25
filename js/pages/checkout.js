export function init() {
  console.log("Page checkout (checkout.js) initialisée");

  const button = document.querySelector('#validate-order');
  if (button) {
    button.addEventListener('click', () => {
      alert("Commande validée !");
    });
  }
}
