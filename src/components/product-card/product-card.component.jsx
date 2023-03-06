import { useContext } from "react";
import { cartContext } from "../../context/cart.context";
import "./product-card.style.scss";
import { AddToCartButton } from "../button/button.component";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(cartContext);
  const addToCart = () => {
    addItemToCart(product);
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
