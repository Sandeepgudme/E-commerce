import { Link } from "react-router-dom";        // Used for navigation to product detail page
import { useDispatch } from "react-redux";     // Hook to dispatch Redux actions
import { addToCart } from "../redux/cartSlice"; // Action to add product to cart

export default function ProductItem({ product }) {
  // Get dispatch function to send actions to Redux store
  const dispatch = useDispatch();

  return (
    <div className="card">
      {/* Product image */}
      <img src={product.thumbnail} alt={product.title} />

      {/* Product title */}
      <h3>{product.title}</h3>

      {/* Product price */}
      <p>₹{product.price}</p>

      {/* Add product to cart */}
      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>

      {/* Navigate to product detail page */}
      <Link to={`/product/${product.id}`}>
        <button style={{ margin: "5px" }}>
          View Details
        </button>
      </Link>
    </div>
  );
}
