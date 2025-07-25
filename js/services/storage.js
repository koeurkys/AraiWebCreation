const KEY = "panier";

export function getPanier() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function savePanier(panier) {
  localStorage.setItem(KEY, JSON.stringify(panier));
}

export function addToPanier(produit) {
  const panier = getPanier();
  panier.push(produit);
  savePanier(panier);
}

export function clearPanier() {
  localStorage.removeItem(KEY);
}
