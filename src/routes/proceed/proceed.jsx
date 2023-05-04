import React from "react";
import FormInput from "../../components/form-input/forminput.component";
import "./proceed.scss";
import { ReactComponent as Logo } from "../../assets/check.svg";
import { useNavigate } from "react-router-dom";

const Proceed = () => {
  const navigate = useNavigate();
  const success = () => {
    navigate("/success");
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="proceedForm">
      <div>
        <form>
          <h3>Enter your billing details</h3>
          <FormInput
            placeholder="Address"
            type="text"
            required
            onChange={handleChange}
            name="address"
          />
          <FormInput
            placeholder="State"
            type="text"
            required
            onChange={handleChange}
            name="pincode"
          />
          <FormInput
            placeholder="Zipcode"
            type="text"
            required
            onChange={handleChange}
            name="pincode"
          />
          <select className="payment">
            <option>Select payment method</option>
            <option>Cash on Delivery</option>
            <option>Credit/Debit Card</option>
            <option>EMI</option>
          </select>
          <br></br>
          <button onClick={success} className="cta order">
            <span className="hover-underline-animation">Confirm and Order</span>
            <Logo />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Proceed;
