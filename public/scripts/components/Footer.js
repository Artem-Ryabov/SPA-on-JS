import Component from "../classes/Component.js";

export default class Footer extends Component {
  constructor() {
    super();

    const template = `
      <div class="flex flex-v flex-sp-a footer container-p-in">
        <span>This website was created by using only JavaScript</span>
        <span>Created by Ryabov Artem</span>
      </div>
      <style>
        @import "../../styles/reset.css";
        @import "../../styles/utilities.css";
        @import "../../styles/components/footer.css";
      </style>
    `;

    this.init(template);
  }
}

customElements.define("js-footer", Footer);
