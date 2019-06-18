'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MjmlDivider = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjmlDivider = exports.MjmlDivider = function (_Component) {
  (0, _inherits3.default)(MjmlDivider, _Component);

  function MjmlDivider() {
    (0, _classCallCheck3.default)(this, MjmlDivider);
    return (0, _possibleConstructorReturn3.default)(this, (MjmlDivider.__proto__ || (0, _getPrototypeOf2.default)(MjmlDivider)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjmlDivider, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('mj-divider', (0, _utils.handleMjmlProps)(this.props), null);
    }
  }]);
  return MjmlDivider;
}(_react.Component);