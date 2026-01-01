import { useState } from "react";                 // React hook to manage local component state
import ProductItem from "./ProductItem";          // Component to display individual product cards
import { useFetchProducts } from "../hooks/useFetchProducts"; 
// Custom hook that uses useEffect to fetch products from API
// The API call runs once when the component mounts

export default function ProductList() {
  // Get products and error state from custom hook
  const { products, error } = useFetchProducts();

  // State to store search input value
  const [search, setSearch] = useState("");

  // Filter products based on search input
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // Show error message if product fetch fails
  if (error) return <h2>{error}</h2>;

  return (
    <div className="container">
      <br />

      {/* Search input to filter products by title */}
      <input
        className="search"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Grid layout to display multiple products */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
