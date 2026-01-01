import { useEffect, useState } from "react";        // React hooks for side effects and state
import { useParams } from "react-router-dom";      // Used to read URL parameters
import { useDispatch } from "react-redux";         // Hook to dispatch Redux actions
import { addToCart } from "../redux/cartSlice";    // Action to add product to cart

export default function ProductDetail() {
  // Get product id from URL (e.g., /product/5)
  const { id } = useParams();

  // State to store single product details
  const [product, setProduct] = useState(null);

  // State to handle fetch errors
  const [error, setError] = useState(null);

  // Redux dispatch function
  const dispatch = useDispatch();

  // Fetch product details when component mounts or id changes
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct)
      .catch(() => setError("Failed to load product"));
  }, [id]); // Dependency ensures API call runs when id changes

  // Show error message if API call fails
  if (error) return <h2>{error}</h2>;

  // Show loading message while product data is being fetched
  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="detail">
      {/* Product image */}
      <img src={product.thumbnail} alt={product.title} />

      {/* Product title */}
      <h2>{product.title}</h2>

      {/* Product description */}
      <p>{product.description}</p>

      {/* Product price */}
      <h3>₹{product.price}</h3>

      {/* Add product to cart using Redux */}
      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
  );
}
