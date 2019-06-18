'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MjmlPreview = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjmlPreview = exports.MjmlPreview = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(MjmlPreview, _Component);

  function MjmlPreview() {
    (0, _classCallCheck3.default)(this, MjmlPreview);
    return (0, _possibleConstructorReturn3.default)(this, (MjmlPreview.__proto__ || (0, _getPrototypeOf2.default)(MjmlPreview)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjmlPreview, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = (0, _objectWithoutProperties3.default)(_props, ['children']);

      return _react2.default.createElement('mj-preview', (0, _utils.handleMjmlProps)(rest), children);
    }
  }]);
  return MjmlPreview;
}(_react.Component), _class.propTypes = {
  children: _propTypes.string.isRequired
}, _temp);