import { useState } from "react";
import "./signup.styles.scss";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  loginAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";
import FormInput from "../form-input/forminput.component";
import { Button } from "../button/button.component";
import { useContext } from "react";
import { userContext } from "../../context/user.context";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const { setCurrentUser } = useContext(userContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
    setCurrentUser(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await loginAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      setCurrentUser(response);
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          placeholder="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          placeholder="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
