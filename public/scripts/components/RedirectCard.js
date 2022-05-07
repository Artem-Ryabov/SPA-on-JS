import Component from "../classes/Component.js";
import changeRoute from "../Router.js";

export default class RedirectCard extends Component {
  constructor() {
    super();

    const template = `
      <div id="card" path="${this.getAttribute("path")}">
        <slot></slot>
      </div>
      <style>
        @import "../../styles/reset.css";
        @import "../../styles/utilities.css";
        @import "../../styles/components/redirectCard.css";
      </style>
    `;

    this.init(template);
  }

  redirectTo() {
    changeRoute(this.getAttribute("path"));
  }

  connectedCallback() {
    this.shadowRoot.querySelector("#card").addEventListener("click", this.redirectTo);
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("#card").removeEventListener("click", this.redirectTo);
  }
}

customElements.define("js-redirect-card", RedirectCard);