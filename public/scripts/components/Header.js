import Component from "../classes/Component.js";

export default class Header extends Component {
  constructor() {
    super();

    const template = `
      <div class="flex header container-p-in">
        <div class="flex header__title">
          <img class="header__title_logo" src="../../assets/icons/diaphragm-orng.png" alt="logo" />
          <span class="header__title_text">Gallery Pure js</span>
        </div>
        <div class="toggle-theme flex">
          <label class="toggle-theme__label">Change theme</label><input class="toggle-theme__button" type="checkbox" id="toggle-theme" />
        </div>
      </div>
      <style>
        @import "../../styles/reset.css";
        @import "../../styles/utilities.css";
        @import "../../styles/components/header.css";
      </style>
    `;

    this.init(template);
  }

  toggleTheme() {
    document.body.classList.toggle("dark-theme");
  }

  connectedCallback() {
    this.shadowRoot.querySelector("#toggle-theme").addEventListener("change", this.toggleTheme);
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("#toggle-theme").removeEventListener("change", this.toggleTheme);
  }
}

customElements.define("js-header", Header);