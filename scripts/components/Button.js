import Component from "../Component.js";
import { parseToNodeTree } from "../toolkit.js";

export default class Button extends Component {
  props = {
    counter: 0,
  };

  constructor(document) {
    super(document, "js-button");
    this.init();
  }

  init() {
    const template = [
      {
        component: "span",
        properties: [{ "data-name": "counter" }],
      },
      {
        component: "button",
      },
    ];
    parseToNodeTree(template).forEach((element) => {
      this.container.append(element);
    });
    this.binding();
    // const counter = this.document.createElement("span");
    // counter.setAttribute("data-counter", "counter")
    // counter.innerText = props.counter;
    // const button = this.document.createElement("button");
    // const increment = () => {
    //   props.counter++;
    //   console.log(props.counter);
    //   this.document.querySelector("[data-counter='counter']").innerText = props.counter;
    // };
    // button.addEventListener("click", increment);
    // this.container.append(counter);
    // this.container.append(button);
  }

  binding() {
    // console.log(this.container.querySelector("[data-name='counter']"));
    const increment = () => {
      this.props.counter++;
      this.container.querySelector("[data-name='counter']").innerText =
        this.props.counter;
    };
    this.container.querySelector("button").addEventListener("click", increment);
  }
}
