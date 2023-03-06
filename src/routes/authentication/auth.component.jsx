import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";
import "./auth.styles.scss";

const Authentic = () => {
  return (
    <div className="forms">
      <SignIn />
      <div>
        <SignUp />
      </div>
    </div>
  );
};

export default Authentic;
