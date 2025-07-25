import { getPanier } from '../services/storage.js';

export function init() {
  const items = getPanier();
  console.log("Produits dans le panier :", items);
}

