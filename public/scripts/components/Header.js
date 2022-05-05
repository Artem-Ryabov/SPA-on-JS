import Component from "../classes/Component.js";

export default class Header extends Component {
  constructor() {
    super();

    const template = `
      <div class="flex header">
        <div class="flex title">
          <img class="title__logo" src="../../assets/icons/diaphragm.png" alt="logo" />
          <span class="title__text">Common name for an app</span>
        </div>
        <span>This is a header</span>
      </div>
      <style>
        @import '../../styles/reset.css';
        @import '../../styles/utilities.css';
        @import '../../styles/components.css';
      </style>
    `;

    this.init(template);
  }
}

customElements.define("js-header", Header);