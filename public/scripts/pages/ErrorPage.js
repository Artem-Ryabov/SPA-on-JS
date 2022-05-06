import Component from "../classes/Component.js";

export default class ErrorPage extends Component {
  constructor() {
    super();

    const template = `
      <div class="flex flex-center error">
        <span>Page is not found</span>
      </div>
      <style>
        @import "../../styles/reset.css";
        @import "../../styles/utilities.css";
        @import "../../styles/pages/error.css";
      </style>
    `;

    this.init(template);
  }
}

customElements.define("js-error", ErrorPage)