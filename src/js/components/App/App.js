import Cart from "../../contexts/Cart/Cart.js";
import menuData from "../../data/menuData.js";
import Checkout from "../Checkout/Checkout.js";
import Menu from "../Menu/Menu.js";
import Order from "../Order/Order.js";

export default function App() {
  const cartContext = Cart();

  Menu(document.getElementById("menu"), cartContext, menuData);
  const orderRoot = document.getElementById("order");
  Order(orderRoot, cartContext);
  Checkout(
    document.getElementById("checkout-modal"),
    orderRoot.querySelector("[data-order-inner]")
  );
}
