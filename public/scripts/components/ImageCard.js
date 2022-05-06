import Component from "../classes/Component.js";

export default class ImageCard extends Component {
  constructor() {
    super();

    const template = `
      <div class="flex flex-v flex-start img-card">
        <img src="${this.getAttribute("imgurl")}">
        <span>${this.getAttribute("title")}</span>
      </div>
      <style>
        @import "../../styles/reset.css";
        @import "../../styles/utilities.css";
        @import "../../styles/components/imageCard.css";
      </style>
    `;

    this.init(template);
  }
}

customElements.define("js-img-card", ImageCard);