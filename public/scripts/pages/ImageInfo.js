import _Component from "../classes/_Component.js";

export default class ImageInfo extends _Component {
  constructor() {
    super();

    const template = `
      <span>Image info</span>
    `;

    this.init(template);
  }
}

customElements.define("js-img-info", ImageInfo);