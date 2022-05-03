import _Component from "../classes/_Component.js";

export default class ErrorPage extends _Component {
  constructor() {
    super();

    const template = `
      <span>Page is not found</span>
    `;

    this.init(template);
  }
}

customElements.define("js-error", ErrorPage)