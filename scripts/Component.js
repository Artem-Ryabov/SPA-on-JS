export default class Component {
  container;
  document;

  constructor(document, name) {
    this.document = document;
    this.container = document.createElement(name);
  }

  init() {}

  render() {
    this.document.body.append(this.container);
  }
  
  derender() {
    this.document.body.remove(this.container);
  }
}
