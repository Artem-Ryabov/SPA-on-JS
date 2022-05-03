import _Component from "../classes/_Component.js";
import { changeRoute } from "../Router.js";

export default class Main extends _Component {
  constructor() {
    super();

    const template = `
      <span class="highlight">This is a main page</span>
      <input type="button" value="redirect to" />
    `;

    this.init(template);
  }

  redirectTo() {
    changeRoute("/image-info");
  }

  connectedCallback() {
    this.shadowRoot.querySelector("input").addEventListener("click", this.redirectTo);
  }
}

customElements.define("js-main", Main);