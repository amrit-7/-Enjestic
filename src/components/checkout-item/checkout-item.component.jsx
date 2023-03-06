import "./checkout-item.styles.scss";
import { useContext } from "react";
import { cartContext } from "../../context/cart.context";
const CheckoutItem = ({ cartItem }) => {
  const { removeItemToCart, addItemToCart, deleteItemToCart } =
    useContext(cartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  const deleteProduct = () => {
    deleteItemToCart(cartItem);
  };
  const removeProduct = () => removeItemToCart(cartItem);
  const addProduct = () => addItemToCart(cartItem);
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
