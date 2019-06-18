'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MjmlConditionalComment = undefined;

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

var _mjmlComment = require('./mjml-comment');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjmlConditionalComment = exports.MjmlConditionalComment = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(MjmlConditionalComment, _Component);

  function MjmlConditionalComment() {
    (0, _classCallCheck3.default)(this, MjmlConditionalComment);
    return (0, _possibleConstructorReturn3.default)(this, (MjmlConditionalComment.__proto__ || (0, _getPrototypeOf2.default)(MjmlConditionalComment)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjmlConditionalComment, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          condition = _props.condition,
          rest = (0, _objectWithoutProperties3.default)(_props, ['children', 'condition']);

      if (children && children.trim().length) {
        return _react2.default.createElement(
          _mjmlComment.MjmlComment,
          rest,
          '[' + condition + ']>' + children + '<![endif]'
        );
      }
      return null;
    }
  }]);
  return MjmlConditionalComment;
}(_react.Component), _class.propTypes = {
  children: _propTypes.string.isRequired,
  condition: _propTypes.string.isRequired
}, _class.defaultProps = {
  condition: 'if gte mso 9'
}, _temp);