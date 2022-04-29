import Component from "../Component.js";
import { changeRoute } from "../Router.js";
import { parseToNodeTree } from "../toolkit.js";

export default class Main extends Component {
  constructor(document) {
    super(document, "js-main");
    this.init();
  }
  init() {
    const template = [
      {
        component: "div",
        children: [
          {
            component: "span",
            text: "This is a main page",
          },
          {
            component: "input",
            properties: [{ type: "button" }, { value: "redirect to" }],
          },
        ],
      },
    ];
    parseToNodeTree(template).forEach((element) => {
      this.container.append(element);
    });
    this.binding();
  }

  binding() {
    const redirectTo = () => {
      changeRoute("/header");
    };
    this.container.querySelector("input").addEventListener("click", redirectTo);
  }
}
