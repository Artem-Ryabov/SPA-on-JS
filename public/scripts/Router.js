// const route = (event) => {
//   event = event || window.event;
//   event.preventDefault();
//   console.log(event);
//   window.history.pushState({}, "", event.target.href);
// }

const routes = {
  404: `<js-error></js-error>`,
  "/": `<js-main></js-main>`,
  "/image-info": `<js-img-info></js-img-info>`,
};


export function changeRoute(route) {
  window.history.pushState({}, "", route);
  routeHandler(route);
}

function routeHandler(route) {
  const path = window.location.pathname;
  console.log(path, route);
  const newRoute = routes[path] || route[404];
  document.querySelector("#router").innerHTML = newRoute;
}
//
// changeRoute("/");
//
//
// // window.history.pushState({}, "", "/");
// window.onpopstate = routeHandler;
// window.route = route;
