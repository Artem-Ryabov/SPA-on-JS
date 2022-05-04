import ApiService from "./ApiService.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

const service = new ApiService();

const routes = {
  "/": new Main(document),
  "/header": new Header(document, service),
};

export function changeRoute(route) {
  routeHandler(route);
  window.history.pushState({}, "", route);
}

function routeHandler(route) {
  const path = window.location.pathname;
  console.log(path, route);
  routes[path].derender();
  routes[route].render();
}

// window.onpopstate = routeHandler("/");

routeHandler("/");
