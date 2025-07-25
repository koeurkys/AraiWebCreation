// 📦 Composants (UI ou structure)
export { loadHeader } from "./components/header.js";
export { loadFooter } from "./components/footer.js";
export { loadCard } from "./components/card.js";
export { loadForm } from "./components/form.js";

// 🛠️ Services (data, stockage, etc.)
export { getProducts } from "./services/api.js";
export { savePanier, getPanier, addToPanier, clearPanier } from "./services/storage.js";

// 🧪 Validations & utilitaires
export { formatPrice } from "./utils/helpers.js";
export { validateEmail, validateText, validateNumber } from "./services/validate.js";

// 🚀 Initialisation des pages
export { init as initHome } from "./pages/home.js";
export { init as initProducts } from "./pages/products.js";
export { init as initContact } from "./pages/contact.js";
export { init as initAbout } from "./pages/about.js";
export { init as initCart } from "./pages/cart.js";
export { init as initCheckout } from "./pages/checkout.js";
