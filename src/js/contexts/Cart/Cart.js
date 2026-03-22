import { addToCart, removeFromCart } from "./utils.js";

export default function Cart() {
  let state = {
    cart: [],
  };

  const cartChanged = [];

  const addItem = (id) => {
    state = addToCart(state, id);

    cartChanged.forEach((el) => el(state.cart));
  };

  const removeItem = (id) => {
    state = removeFromCart(state, id);

    cartChanged.forEach((el) => el(state.cart));
  };

  const getCart = () => state.cart;

  return {
    addItem,
    removeItem,
    cartChanged,
    getCart,
  };
}
