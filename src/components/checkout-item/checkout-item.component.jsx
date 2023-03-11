import "./checkout-item.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  deleteItemToCart,
  removeItemToCart,
} from "../../store/cart/cart.actions";
const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const deleteProduct = () => {
    dispatch(deleteItemToCart(cartItems, cartItem));
  };
  const removeProduct = () => dispatch(removeItemToCart(cartItems, cartItem));
  const addProduct = () => dispatch(addItemToCart(cartItems, cartItem));
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeProduct}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addProduct}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={deleteProduct}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
