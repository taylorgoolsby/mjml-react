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

export var MjmlButton = (_temp = _class = function (_Component) {
  _inherits(MjmlButton, _Component);

  function MjmlButton() {
    _classCallCheck(this, MjmlButton);

    return _possibleConstructorReturn(this, (MjmlButton.__proto__ || _Object$getPrototypeOf(MjmlButton)).apply(this, arguments));
  }

  _createClass(MjmlButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return React.createElement('mj-button', handleMjmlProps(rest), children);
    }
  }]);

  return MjmlButton;
}(Component), _class.propTypes = {
  children: node.isRequired
}, _temp);