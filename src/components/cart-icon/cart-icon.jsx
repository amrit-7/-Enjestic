import "./cart-icon.scss";
import { useContext } from "react";
import { cartContext } from "../../context/cart.context";
import { ReactComponent as BagIcon } from "../../assets/carticon.svg";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(cartContext);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <BagIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};
export default CartIcon;
