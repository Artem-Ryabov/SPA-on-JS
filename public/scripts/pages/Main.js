import Component from "../classes/Component.js";
import urls from "../constants/routes.js";
import apiService from "../services/ApiService.js";

export default class Main extends Component {
  constructor() {
    super();

    const template = `
      <div class="flex flex-center container-p-in container-p-bl">
        <div id="card-list" class="flex flex-wr flex-sp-a card-list"></div>
      </div>
      <style>
        @import "../../styles/reset.css";
        @import "../../styles/utilities.css";
        @import "../../styles/pages/gallery.css";
      </style>
    `;

    this.init(template);
    this.bindData();
  }

  async bindData() {
    const list = await apiService.getAlbum();
    const cardList = this.shadowRoot.querySelector("#card-list");
    list.forEach((photo) => {
      const card = document.createElement("template");
      card.innerHTML = `
        <js-redirect-card path="${urls.imagePage}/${photo.id}">
          <js-img-card imgurl="${photo.thumbnailUrl}" title="${photo.title}"></js-img-card>
        </js-redirect-card>
      `;
      cardList.append(card.content.cloneNode(true));
    });
  }
}

customElements.define("js-main", Main);