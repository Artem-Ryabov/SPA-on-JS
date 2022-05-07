export function paramParser(values) {
  const url = new URL(window.location.host);
  Object.keys(values).forEach(key => url.searchParams.set(key, values[key]));
  return url.search;
}

export function valueParser(location) {
  const urlSearchParams = (new URL(location)).searchParams;
  const values = {};
  for (const param of urlSearchParams.keys()) {
    values[param] = urlSearchParams.get(param);
  }
  return values;
}