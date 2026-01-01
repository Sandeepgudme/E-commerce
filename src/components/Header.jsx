import { Link } from "react-router-dom";     // Used for client-side navigation
import { useSelector } from "react-redux";  // Hook to access Redux state

export default function Header() {
  // Access cart data from Redux store
  const cart = useSelector((state) => state.cart);

  return (
    <header className="header">
      {/* Logo section: navigates to home page */}
      <Link to="/" className="logo">
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/web-design-e-commerce-store-3d-icon-png-download-6525844.png"
          alt="ShoppyGlobe logo"
        />
        <h3>ShoppyGlobe</h3>
      </Link>

      {/* Navigation menu */}
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>

      {/* Shopping cart icon with item count */}
      <Link to="/cart" className="cart">
        🛒 <span>{cart.length}</span>
      </Link>
    </header>
  );
}
