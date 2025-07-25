export function loadForm(selector = '#include-form') {
  fetch('/components/form.html')
    .then(res => res.text())
    .then(data => {
      console.log(document);
      
      const target = document.querySelector(selector);
      if (target) {
        target.innerHTML = data;
        attachFormEvents();
      } else {
        
        console.warn(`Aucun élément trouvé pour ${selector}`);
      }
    });
}


function attachFormEvents() {
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = form.querySelector('input[type="email"]')?.value || '';
      const message = form.querySelector('textarea')?.value || '';

      if (!email || !message) {
        alert("Veuillez remplir tous les champs.");
        return;
      }

      if (!window.validateEmail(email)) {
        alert("Adresse e-mail invalide.");
        return;
      }

      alert("Formulaire envoyé !");
      form.reset();
    });
  }
}
