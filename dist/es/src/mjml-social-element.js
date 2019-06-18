import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component } from 'react';
import { node } from 'prop-types';

import { handleMjmlProps } from './utils';

export var MjmlSocialElement = (_temp = _class = function (_Component) {
  _inherits(MjmlSocialElement, _Component);

  function MjmlSocialElement() {
    _classCallCheck(this, MjmlSocialElement);

    return _possibleConstructorReturn(this, (MjmlSocialElement.__proto__ || _Object$getPrototypeOf(MjmlSocialElement)).apply(this, arguments));
  }

  _createClass(MjmlSocialElement, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return React.createElement('mj-social-element', handleMjmlProps(rest), children);
    }
  }]);

  return MjmlSocialElement;
}(Component), _class.propTypes = {
  children: node
}, _temp);