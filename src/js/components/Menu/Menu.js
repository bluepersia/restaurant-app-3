import { generateHTML } from "./utils.js";

export default function Menu(root, cartContext, menuData) {
  root.innerHTML = generateHTML(menuData);

  root.addEventListener("click", function (e) {
    if (e.target.dataset.add) {
      cartContext.addItem(e.target.dataset.add);
    }
  });
}
