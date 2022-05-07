import urls, { routes } from "./constants/routes.js";

export default function changeRoute(route) {
  window.history.pushState({}, "", route);
  routeHandler();
}

function routeHandler() {
  const path = window.location.pathname;
  let page = routes[urls.error];
  if (path === urls.main) {
    page = routes[urls.main];
  } else {
    for (const url of Object.keys(routes)) {
      if (path.includes(url) && url.length > 1) {
        page = routes[url];
        break;
      }
    }
  }
  document.querySelector("#router").innerHTML = page;
}

window.onpopstate = routeHandler;
routeHandler();
