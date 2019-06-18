import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component } from 'react';
import { string } from 'prop-types';

import { handleMjmlProps } from '../utils';

export var MjmlComment = (_temp = _class = function (_Component) {
  _inherits(MjmlComment, _Component);

  function MjmlComment() {
    _classCallCheck(this, MjmlComment);

    return _possibleConstructorReturn(this, (MjmlComment.__proto__ || _Object$getPrototypeOf(MjmlComment)).apply(this, arguments));
  }

  _createClass(MjmlComment, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      if (children && children.trim().length) {
        return React.createElement('mj-raw', _extends({}, handleMjmlProps(rest), {
          dangerouslySetInnerHTML: {
            __html: '<!--' + children + '-->'
          }
        }));
      }
      return null;
    }
  }]);

  return MjmlComment;
}(Component), _class.propTypes = {
  children: string.isRequired
}, _temp);