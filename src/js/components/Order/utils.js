function generateHTML(order) {
  return `
    <ul class="order__items-list list-reset">
              ${order.items
                .concat(order.discounts)
                .map(
                  (item) => `<li class="order__item">
                <h3 class="order__item-name fw-400">${item.name} ${
                    item.quantity > 1 ? `(${item.quantity})` : ""
                  }</h3>
                <button class="order__item-remove" data-remove="${
                  item.id
                }">remove</button>
                <p class="order__item-price">$${item
                  .getSubtotal()
                  .toFixed(2)}</p>
              </li>`
                )
                .join("\n")}
            </ul>

            <div class="order__item order__total-item">
              <h3 class="order__item-name fw-400">Total price:</h3>
              <p class="order__item-price">$${order.total.toFixed(2)}</p>
            </div>`;
}

function calculateOrder(cart, menuData) {
  const items = cart.map((item) => ({
    ...item,
    ...menuData.find((menuItem) => menuItem.id === item.id),
    getSubtotal: function () {
      return this.price * this.quantity;
    },
  }));

  const discounts = calculateDiscounts(items);

  return {
    items,
    discounts,
    total:
      items.reduce((prev, curr) => prev + curr.getSubtotal(), 0) -
      discounts.reduce((prev, curr) => prev + curr.total, 0),
  };
}

function calculateDiscounts(items) {
  const discounts = [];

  const comboDiscount = calculateComboDiscount(items);

  if (comboDiscount) {
    discounts.push(comboDiscount);
  }

  return discounts;
}

function calculateComboDiscount(items) {
  const combos = [];

  for (let item of items) {
    if (item.name === "Pizza" || item.name === "Hamburger") {
      for (let i = 0; i < item.quantity; i++) {
        combos.push({
          food: item,
          drink: null,
        });
      }
    }
  }

  for (let item of items) {
    if (item.name === "Beer") {
      for (let i = 0; i < item.quantity; i++) {
        const match = combos.find((other) => other.drink === null);
        if (match) {
          match.drink = item;
        }
      }
    }
  }

  const total = combos.reduce((prev, curr) => {
    if (curr.food && curr.drink) {
      return prev + 0.15 * (curr.food.price + curr.drink.price);
    }
    return prev;
  }, 0);

  if (total > 0) {
    return {
      total,
      name: "Food+Drink Combo",
      getSubtotal: function () {
        return this.total;
      },
    };
  }
  return null;
}

export { generateHTML, calculateOrder };
