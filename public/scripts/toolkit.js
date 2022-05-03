export function parseToNodeTree(nodes) {
  return nodes.map((node) => {
    const component = document.createElement(node.component);
    if (!!node.properties) {
      node.properties.forEach((property) => {
        const [type] = Object.keys(property);
        component.setAttribute(type, property[type]);
      });
    }
    if (!!node.classes) {
      node.classes.split(" ").forEach((element) => {
        component.classList.toggle(element);
      });
    }
    if (!!node.text) {
      component.innerText = node.text;
    }
    if (!!node.children) {
      parseToNodeTree(node.children).forEach((child) => {
        component.append(child);
      });
    }
    return component;
  });
}
