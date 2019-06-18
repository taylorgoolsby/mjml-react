'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.addQueryParams = addQueryParams;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addQueryParams(url, params) {
  var query = (0, _keys2.default)(params).reduce(function (acc, curr) {
    return acc.concat(curr + '=' + encodeURIComponent(params[curr]));
  }, []).join('&');
  if (url.indexOf('?') !== -1) {
    return url + '&' + query;
  }
  return url + '?' + query;
}