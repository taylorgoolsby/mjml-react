'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MjmlTrackingPixel = undefined;

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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _mjmlRaw = require('../mjml-raw');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjmlTrackingPixel = exports.MjmlTrackingPixel = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(MjmlTrackingPixel, _Component);

  function MjmlTrackingPixel() {
    (0, _classCallCheck3.default)(this, MjmlTrackingPixel);
    return (0, _possibleConstructorReturn3.default)(this, (MjmlTrackingPixel.__proto__ || (0, _getPrototypeOf2.default)(MjmlTrackingPixel)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjmlTrackingPixel, [{
    key: 'render',
    value: function render() {
      var src = this.props.src;

      var trackingPixelStyle = {
        display: 'table',
        height: '1px!important',
        width: '1px!important',
        border: '0!important',
        margin: '0!important',
        padding: '0!important'
      };
      return _react2.default.createElement(
        _mjmlRaw.MjmlRaw,
        null,
        _react2.default.createElement('img', { src: src, style: trackingPixelStyle, width: 1, height: 1, border: 0 })
      );
    }
  }]);
  return MjmlTrackingPixel;
}(_react.Component), _class.propTypes = {
  src: _propTypes.string.isRequired
}, _temp);