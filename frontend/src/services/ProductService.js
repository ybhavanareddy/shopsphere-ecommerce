const BASE_URL = "https://shopsphere-backend-xs4m.onrender.com/api/products";

export async function fetchProducts(){
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
}

export async function fetchProductById(id){
  const response = await fetch(`${BASE_URL}/${id}`);
  const data = await response.json();
  return data;
}

export async function fetchCategories(){
  const response = await fetch(`${BASE_URL}/categories`);
  const data = await response.json();
  return data.map(cat => ({
    slug:cat,
    name:cat
  }));
}

