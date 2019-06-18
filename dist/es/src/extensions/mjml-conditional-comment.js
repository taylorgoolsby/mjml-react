import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component } from 'react';
import { string } from 'prop-types';

import { MjmlComment } from './mjml-comment';

export var MjmlConditionalComment = (_temp = _class = function (_Component) {
  _inherits(MjmlConditionalComment, _Component);

  function MjmlConditionalComment() {
    _classCallCheck(this, MjmlConditionalComment);

    return _possibleConstructorReturn(this, (MjmlConditionalComment.__proto__ || _Object$getPrototypeOf(MjmlConditionalComment)).apply(this, arguments));
  }

  _createClass(MjmlConditionalComment, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          condition = _props.condition,
          rest = _objectWithoutProperties(_props, ['children', 'condition']);

      if (children && children.trim().length) {
        return React.createElement(
          MjmlComment,
          rest,
          '[' + condition + ']>' + children + '<![endif]'
        );
      }
      return null;
    }
  }]);

  return MjmlConditionalComment;
}(Component), _class.propTypes = {
  children: string.isRequired,
  condition: string.isRequired
}, _class.defaultProps = {
  condition: 'if gte mso 9'
}, _temp);