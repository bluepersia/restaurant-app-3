function addToCart(state, id) {
  const { cart } = state;

  const newCart = [...cart];
  const itemInCart = cart.find((item) => item.id === id);

  if (itemInCart) {
    newCart[cart.indexOf(itemInCart)] = {
      id,
      quantity: itemInCart.quantity + 1,
    };
  } else {
    newCart.push({
      id,
      quantity: 1,
    });
  }
  return {
    ...state,
    cart: newCart,
  };
}

function removeFromCart(state, id) {
  const itemInCart = state.cart.find((item) => item.id === id);

  const newItem = {
    ...itemInCart,
    quantity: itemInCart.quantity - 1,
  };

  if (newItem.quantity <= 0) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== id),
    };
  }
  const newCart = [...state.cart];

  newCart[state.cart.indexOf(itemInCart)] = newItem;

  return {
    ...state,
    cart: newCart,
  };
}
export { addToCart, removeFromCart };
