import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
// import { useContext } from "react";
// import { cartContext } from "../../context/cart.context";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../store/cart/cart.actions";
import { ReactComponent as CheckoutLogo } from "../../assets/check.svg";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false));
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
