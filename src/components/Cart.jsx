import { useSelector } from "react-redux"; // Hook to read data from Redux store
import CartItem from "./CartItem";         // Component to display individual cart items
import { Link } from "react-router-dom";   // Used for navigation without page reload

export default function Cart() {
  // Access cart state from Redux store
  const cart = useSelector((state) => state.cart);

  // If cart is empty, show a message instead of cart items
  if (cart.length === 0) return <h2>Cart is empty</h2>;

  return (
    <div className="container">
      {/* Loop through cart items and render CartItem component for each */}
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      {/* Link to checkout page */}
      <Link to="/checkout">
        <br />
        <button>Checkout</button>
      </Link>
    </div>
  );
}
