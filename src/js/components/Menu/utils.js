function generateHTML(menuData) {
  return menuData
    .map(
      ({ id, name, emoji, ingredients, price }) => `
        <li class="menu-item">
              <p class="menu-item__emoji">${emoji}</p>
              <div class="menu-item__content">
                <h3 class="menu-item__name fw-400">${name}</h3>
                <p class="menu-item__ingredients">${ingredients}</p>
                <p class="menu-item__price">$${price}</p>
              </div>
              <button class="menu-item__add" data-add="${id}">+</button>
         </li>`
    )
    .join("\n");
}

export { generateHTML };
