import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { Button } from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartTotal = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const handleProceed = () => {
    navigate("/proceed");
  };
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span> Product </span>
        </div>
        <div className="header-block">
          <span> Description</span>
        </div>
        <div className="header-block">
          <span> Quantity </span>
        </div>
        <div className="header-block">
          <span> Price </span>
        </div>
        <div className="header-block">
          <span> Remove </span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem cartItem={cartItem} />;
      })}
      <span className="total"> Total :{cartTotal} </span>

      <Button onClick={handleProceed}>Confirm and proceed</Button>
    </div>
  );
};
export default Checkout;
