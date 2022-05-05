import Component from "../classes/Component.js";

export default class ImageInfo extends Component {
  constructor() {
    super();

    const template = `
      <span>Image info</span>
      <style>
        @import '../../styles/reset.css';
      </style>
    `;

    this.init(template);
  }
}

customElements.define("js-img-info", ImageInfo);