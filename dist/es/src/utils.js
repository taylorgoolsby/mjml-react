import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _extends from 'babel-runtime/helpers/extends';
import _Object$keys from 'babel-runtime/core-js/object/keys';
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

export function handleMjmlProps(props) {
  return _Object$keys(props).reduce(function (acc, curr) {
    var mjmlProp = kebabCase(curr);
    return _extends({}, acc, _defineProperty({}, mjmlProp, handleMjmlProp(mjmlProp, props[curr])));
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