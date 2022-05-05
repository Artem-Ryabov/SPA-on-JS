import { uri } from "../constants/config.json";

class ApiService {
  #uri;

  constructor(uri) {
    this.#uri = uri;
  }

  async getAlbum() {
    const res = await fetch(`${this.#uri}/photos`, {method: "GET"});
    const album = await res.json();
    return album.slice(0, 50);
  }
}

const apiService = new ApiService(uri);

export default apiService;
