const fetchProducts = async () => {
    const response = await fetch('http://localhost:8080/products');
    const products = await response.json();
    return products;
}

export { fetchProducts };