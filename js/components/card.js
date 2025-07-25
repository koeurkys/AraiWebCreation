export function loadCard() {
  fetch('../components/card.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('include-card').innerHTML = data;

      const header = document.getElementById('main-header');
      const containerProduct = document.querySelector('.container-card');

      if (header && containerProduct) {
        const headerHeight = header.offsetHeight;
        containerProduct.style.marginTop = `-${headerHeight}px`;
        containerProduct.style.paddingTop = `${headerHeight}px`;
      }
    });
}
