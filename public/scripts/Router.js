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
  const newRoute = routes[route] || routes[404];
  document.querySelector("#router").innerHTML = newRoute;
}

changeRoute("/");
window.onpopstate = routeHandler;
