import { useDispatch } from "react-redux";      // Hook to dispatch actions to Redux store
import { removeFromCart } from "../redux/cartSlice"; // Action to remove item from cart

export default function CartItem({ item }) {
  // Get dispatch function to send actions to Redux store
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      {/* Product title */}
      <h3>{item.title}</h3>

      {/* Quantity of the product */}
      <p>Qty: {item.qty}</p>

      {/* Total price for this item (price × quantity) */}
      <p>₹{item.price * item.qty}</p>

      {/* Remove item from cart */}
      <button onClick={() => dispatch(removeFromCart(item.id))}>
        Remove
      </button>
    </div>
  );
}
