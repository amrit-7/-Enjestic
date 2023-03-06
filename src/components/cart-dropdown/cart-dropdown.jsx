import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { cartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CheckoutLogo } from "../../assets/check.svg";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(cartContext);
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout");
    setIsCartOpen(false);
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <button className="cta">
        <span className="hover-underline-animation" onClick={checkout}>
          Checkout
        </span>
        <CheckoutLogo />
      </button>
    </div>
  );
};
export default CartDropdown;
