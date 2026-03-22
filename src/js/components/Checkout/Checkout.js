import { generateSubmissionHTML } from "./utils.js";

export default function Checkout(root, orderInner) {
  const formEl = root.querySelector("[data-form]");

  formEl.addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(e) {
    root.style.display = "none";

    e.preventDefault();

    const formData = new FormData(e.target);

    orderInner.innerHTML = generateSubmissionHTML(formData.get("full-name"));
    orderInner.classList.add("order__inner--submitted");
  }
}
