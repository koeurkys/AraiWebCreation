/**
 * Formate un prix en euros (ex : 12.99 → "12,99 €")
 */
export function formatPrice(price) {
  return parseFloat(price).toFixed(2).replace('.', ',') + ' €';
}

/**
 * Capitalise la première lettre d’un mot
 */
export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Tronque un texte à une longueur donnée
 */
export function truncate(str, maxLength = 100) {
  return str.length > maxLength ? str.slice(0, maxLength) + '…' : str;
}
