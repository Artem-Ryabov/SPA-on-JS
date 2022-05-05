import Component from "../classes/Component.js";

export default class Footer extends Component {
  constructor() {
    super();

    const template = `
      <div class="footer">
        <span>This is a footer</span>
        <p>help me help me help me help me help me help me help me help me help me help me help me help me help me</p>
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

customElements.define("js-footer", Footer);
