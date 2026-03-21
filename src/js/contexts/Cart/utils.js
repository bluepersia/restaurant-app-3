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

export { addToCart };
