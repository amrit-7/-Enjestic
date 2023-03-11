import { addItemToCart } from "../../store/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import "./product-card.style.scss";
import { AddToCartButton } from "../button/button.component";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const addToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
      <AddToCartButton onClick={addToCart}>Add Cart</AddToCartButton>
    </div>
  );
};
export default ProductCard;
