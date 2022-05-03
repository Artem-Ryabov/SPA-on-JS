export default class _Component extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
  }

  init(template) {
    this.shadowRoot.innerHTML = template;
  }

  connectedCallback() {}

  disconnectedCallback() {}

  attributeChangedCallback(name, oldValue, newValue) {}
}