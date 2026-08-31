import "./App.css";
import CartColumm from "./components/CartColumm";
import ProductColumm from "./components/ProductColumm";

const App = () => {
  return (
    <div id="container">
      <div id="wrapper">

        <ProductColumm />

        <CartColumm />

      </div>
    </div>
  );
};

export default App;