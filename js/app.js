import * as App from './index.js';

App.loadHeader();
App.loadFooter();

switch (true) {
  case location.pathname.includes('index'):
  case location.pathname === '/':
    App.initHome();
    break;

  case location.pathname.includes('products'):
    App.initProducts();
    break;

  case location.pathname.includes('contact'):
    App.initContact();
    break;

  case location.pathname.includes('about'):
    App.initAbout();
    break;

  case location.pathname.includes('cart'):
    App.initCart();
    break;

  case location.pathname.includes('checkout'):
    App.initCheckout();
    break;
}
