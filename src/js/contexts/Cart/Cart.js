import { addToCart } from "./utils.js";

export default function Cart() {
  let state = {
    cart: [],
  };

  const addItem = (id) => {
    state = addToCart(state, id);
  };

  return {
    addItem,
  };
}
