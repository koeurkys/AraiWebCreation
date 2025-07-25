import { getProducts } from '../services/api.js';

export async function init() {
  const products = await getProducts();
  console.log(products);
  
  const container = document.getElementById('include-card');

  products.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <h3>${product.name}</h3>
      <h3>${product.email}</h3>
      <p>${product.body}€</p>
    `;
    container.appendChild(card);
  });
}
