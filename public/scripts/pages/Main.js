import Component from "../classes/Component.js";
import { changeRoute } from "../Router.js";

export default class Main extends Component {
  constructor() {
    super();

    const template = `
      <span>This is a main page</span>
      <input type="button" value="redirect to" />
      <style>
        @import '../../styles/reset.css';
      </style>
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