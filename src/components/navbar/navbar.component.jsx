import "./navbar.styles.scss";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import pic from "../../assets/enjestic.png";
// import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
// import { cartContext } from "../../context/cart.context";
import { useSelector } from "react-redux";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { Fragment } from "react";
const Nav = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutHandler = async () => {
    await signOutUser();
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <div>
            <img src={pic} alt="" width={"130px"} height={"130px"} />
          </div>
        </Link>
        <div className="navlink-container">
          <Link className="navlink" to="/shop">
            Shop
          </Link>
          <Link
            className="navlink"
            to=""
            style={{ color: "lightGray", cursor: "no-drop" }}
          >
            Contact Us
          </Link>
          {currentUser ? (
            <span className="navlink" onClick={signOutHandler}>
              Logout
            </span>
          ) : (
            <Link className="navlink" to="/login">
              Log In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Nav;
