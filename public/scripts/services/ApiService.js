import config from "../constants/config.js";

class ApiService {
  #uri;

  constructor(uri) {
    this.#uri = uri;
  }

  async getPhotos() {
    const res = await fetch(`${this.#uri}/photos`, {method: "GET"});
    const album = await res.json();
    return album.slice(0, 50);
  }

  async getPhotoById(id) {
    const res = await fetch(`${this.#uri}/photos/${id}`, {method: "GET"});
    return res.json();
  }

  async getAlbumById(id) {
    const res = await fetch(`${this.#uri}/albums/${id}`, {method: "GET"});
    return res.json();
  }
}

const apiService = new ApiService(config.uri);

export default apiService;
