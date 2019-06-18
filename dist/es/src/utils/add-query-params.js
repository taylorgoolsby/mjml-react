import _Object$keys from 'babel-runtime/core-js/object/keys';
export function addQueryParams(url, params) {
  var query = _Object$keys(params).reduce(function (acc, curr) {
    return acc.concat(curr + '=' + encodeURIComponent(params[curr]));
  }, []).join('&');
  if (url.indexOf('?') !== -1) {
    return url + '&' + query;
  }
  return url + '?' + query;
}