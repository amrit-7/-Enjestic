import "./cart-icon.scss";
// import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.actions";
// import { cartContext } from "../../context/cart.context";
import { ReactComponent as BagIcon } from "../../assets/carticon.svg";
const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(cartContext);
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleCart = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <BagIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};
export default CartIcon;
