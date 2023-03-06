import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Nav from "./components/navbar/navbar.component";
import Shop from "./routes/shop/shop.component";
import Authentic from "./routes/authentication/auth.component";
import Checkout from "./routes/checkout/checkout.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/login" element={<Authentic />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
