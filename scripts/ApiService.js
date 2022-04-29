export default class ApiService {
  #uri = "https://jsonplaceholder.typicode.com/";
  constructor() {}
  async getAlbum() {
    const res = await fetch(`${this.#uri}photos`);
    const album = await res.json();
    return album.slice(0, 50);
  }
}
