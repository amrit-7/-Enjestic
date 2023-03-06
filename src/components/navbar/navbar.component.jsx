import "./navbar.styles.scss";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import pic from "../../assets/enjestic.png";
import { useContext } from "react";
import { userContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { cartContext } from "../../context/cart.context";
const Nav = () => {
  const { currentUser, setCurrentUser } = useContext(userContext);
  const { isCartOpen } = useContext(cartContext);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
  return (
    <>
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
          <Link className="navlink" to="">
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
    </>
  );
};
export default Nav;
