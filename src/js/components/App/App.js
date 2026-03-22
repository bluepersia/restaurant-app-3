import Cart from "../../contexts/Cart/Cart.js";
import menuData from "../../data/menuData.js";
import Menu from "../Menu/Menu.js";
import Order from "../Order/Order.js";

export default function App() {
  const cartContext = Cart();

  Menu(document.getElementById("menu"), cartContext, menuData);
  Order(document.getElementById("order"), cartContext);
}
