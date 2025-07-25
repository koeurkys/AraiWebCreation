export function init() {
  console.log("Page about (about.js) initialisée");

  const info = document.querySelector('.about-info');
  if (info) {
    info.style.opacity = 1;
  }
}
