import _Component from "../classes/_Component.js";

export default class Footer extends _Component {
  constructor() {
    super();

    const template = `
      <div>
        <span>${this.getAttribute("name")}</span>
        <p>This is a ${this.getAttribute("name")}</p>
      </div>
    `;

    this.init(template);
  }
}

customElements.define("js-footer", Footer);
