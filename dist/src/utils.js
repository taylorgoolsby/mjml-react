'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.handleMjmlProps = handleMjmlProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = {
  'inline': boolToString,
  'full-width': boolToString,
  'width': numberToPx,
  'height': numberToPx,
  'border-radius': numberToPx,
  'border-width': numberToPx,
  'background-size': numberToPx,
  'padding': numberToPx,
  'padding-top': numberToPx,
  'padding-right': numberToPx,
  'padding-bottom': numberToPx,
  'padding-left': numberToPx,
  'font-size': numberToPx,
  'letter-spacing': numberToPx,
  'line-height': numberToPx,
  'icon-padding': numberToPx,
  'text-padding': numberToPx
};

function handleMjmlProps(props) {
  return (0, _keys2.default)(props).reduce(function (acc, curr) {
    var mjmlProp = kebabCase(curr);
    return (0, _extends4.default)({}, acc, (0, _defineProperty3.default)({}, mjmlProp, handleMjmlProp(mjmlProp, props[curr])));
  }, {});
}

function handleMjmlProp(name, value) {
  if (typeof value === 'undefined' || value === null) {
    return undefined;
  }
  var handler = handlers[name] || function (name, value) {
    return value;
  };
  return handler(name, value);
}

function kebabCase(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function boolToString(name, value) {
  return value ? name : undefined;
}

function numberToPx(name, value) {
  if (typeof value === 'number') {
    return value + 'px';
  }
  return value;
}