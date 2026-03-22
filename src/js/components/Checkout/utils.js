function generateSubmissionHTML(name) {
  return `
        <p class="order__submitted-text">Thanks ${name}! Your order is on its way!</p>
    `;
}

export { generateSubmissionHTML };
