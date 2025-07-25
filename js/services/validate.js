export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validateText(text, minLength = 1) {
  return typeof text === "string" && text.trim().length >= minLength;
}

export function validateNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
