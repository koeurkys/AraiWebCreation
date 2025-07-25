const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/comments?_limit=7`);
  const data = await res.json();  
  return data;
}
