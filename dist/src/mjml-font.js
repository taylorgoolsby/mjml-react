'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MjmlFont = undefined;

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

var MjmlFont = exports.MjmlFont = function (_Component) {
  (0, _inherits3.default)(MjmlFont, _Component);

  function MjmlFont() {
    (0, _classCallCheck3.default)(this, MjmlFont);
    return (0, _possibleConstructorReturn3.default)(this, (MjmlFont.__proto__ || (0, _getPrototypeOf2.default)(MjmlFont)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjmlFont, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('mj-font', (0, _utils.handleMjmlProps)(this.props), null);
    }
  }]);
  return MjmlFont;
}(_react.Component);