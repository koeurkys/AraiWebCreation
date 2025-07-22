// Inclure header
fetch('components/header.html')
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
  });

// Inclure footer
fetch('components/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('include-footer').innerHTML = data;
  });
