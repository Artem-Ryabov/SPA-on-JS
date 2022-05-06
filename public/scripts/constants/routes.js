const urls = {
  imagePage: "/image",
  main: "/",
  error: "404",
};

export const routes = {
  [urls.imagePage]: `<js-img-info></js-img-info>`,
  [urls.main]: `<js-main></js-main>`,
  [urls.error]: `<js-error></js-error>`,
};

export default urls;
