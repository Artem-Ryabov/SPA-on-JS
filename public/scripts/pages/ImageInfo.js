import Component from "../classes/Component.js";
import apiService from "../services/ApiService.js";
import { valueParser } from "../toolkit.js";

export default class ImageInfo extends Component {
  constructor() {
    super();

    const template = `
      <div class="flex flex-center container-p-in container-p-bl photo">
        <img id="img" src="" alt="photo">
        <div class="flex flex-v flex-start flex-align-str photo__info">
          <h1 id="title">Title: </h1>
          <h2 id="album">Album: </h2>
        </div>
      </div>
      <style>
        @import "../../styles/reset.css";
        @import "../../styles/utilities.css";
        @import "../../styles/pages/photo.css";
      </style>
    `;

    this.init(template);
    this.bindData();
  }

  async bindData() {
    const {id} = valueParser(window.location);
    const photo = await apiService.getPhotoById(id);
    const album = await apiService.getAlbumById(photo.albumId);
    this.shadowRoot.querySelector("#img").src = photo.url;
    this.shadowRoot.querySelector("#album").append(album.title);
    this.shadowRoot.querySelector("#title").append(photo.title);
  }
}

customElements.define("js-img-info", ImageInfo);