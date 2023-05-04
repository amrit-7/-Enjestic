import React from "react";
import "./success.scss";
import { Button } from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
const Success = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="successPage">
      <div className="successHome">
        <Button onClick={handleHome}> Continue Exploring</Button>
      </div>
      <h1 className="headingg"> Order placed Successfully</h1>
      <img
        src={require("../../assets/74644-add-to-basket.gif")}
        alt="animation-img"
      />
    </div>
  );
};

export default Success;
