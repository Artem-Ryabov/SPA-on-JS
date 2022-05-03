import Component from "../classes/Component.js";
import { parseToNodeTree } from "../toolkit.js";
import Button from "./Button.js";

export default class Header extends Component {
  apiService;
  constructor(document, apiService) {
    super(document, "js-header");
    this.apiService = apiService;
    this.init();
  }
  init() {
    const template = [
      {
        component: "header",
        text: "tasdfkajsdkfljaklsdfjas;kld4fj",
        classes: "bruh bruh_hhh",
        children: [
          {
            component: "span",
            properties: [{"id": "55"}]
          },
        ],
      },
    ];
    parseToNodeTree(template).forEach((element) => {
      this.container.append(element);
    });
    const button = new Button(this.document);
    this.container.append(button.container);
    this.binding();
  }
  binding() {
    this.apiService.getAlbum().then((res) => console.log(res))
    // console.log(this.apiService.getAlbum());
  }
}
