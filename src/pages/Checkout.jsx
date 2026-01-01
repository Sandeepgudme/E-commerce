import { useSelector, useDispatch } from "react-redux"; // Hooks to access and update Redux store
import { removeFromCart, clearCart } from "../redux/cartSlice"; // Cart actions
import { Link } from "react-router-dom"; // Used for navigation

export default function Checkout() {
  // Get all cart items from Redux store
  const cartItems = useSelector((state) => state.cart);

  // Dispatch function to trigger Redux actions
  const dispatch = useDispatch();

  // If cart is empty, show message and navigation link
  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Your cart is empty</h2>
        <Link to="/">Go back to shopping</Link>
      </div>
    );
  }

  // Calculate total price of all cart items
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto" }}>
      {/* Checkout heading */}
      <h2>Checkout</h2>

      {/* Display each cart item */}
      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
            padding: "10px",
            border: "1px solid #ddd",
          }}
        >
          {/* Product details */}
          <div>
            <h4>{item.title}</h4>
            <p>₹{item.price}</p>
            <p>Quantity: {item.qty}</p>
          </div>

          {/* Remove individual item from cart */}
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      {/* Display total price */}
      <h3>Total: ₹{totalPrice}</h3>

      {/* Clear all items from cart */}
      <button
        onClick={() => dispatch(clearCart())}
        style={{ marginTop: "20px" }}
      >
        Clear Cart
      </button>
    </div>
  );
}
