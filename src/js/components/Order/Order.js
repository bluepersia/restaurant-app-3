import menuData from "../../data/menuData.js";
import { calculateOrder, generateHTML } from "./utils.js";

export default function Order(root, cartContext) {
  const contentEl = root.querySelector("[data-content]");
  const completeBtn = root.querySelector("[data-complete]");

  root.style.display = "none";

  contentEl.addEventListener("click", handleContentClick);
  completeBtn.addEventListener("click", handleCompleteClick);
  cartContext.cartChanged.push(handleCartChanged);

  function handleContentClick(e) {
    if (e.target.dataset.remove) {
      cartContext.removeItem(Number(e.target.dataset.remove));
    }
  }

  function handleCompleteClick() {
    document.getElementById("checkout-modal").style.display = "block";
  }

  function handleCartChanged(cart) {
    root.style.display = cart.length > 0 ? "block" : "none";

    if (cart.length > 0) {
      renderOrder(calculateOrder(cart, menuData));
    }
  }

  const renderOrder = (order) => {
    contentEl.innerHTML = generateHTML(order);
  };
}
