import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export var MjmlClass = function (_Component) {
  _inherits(MjmlClass, _Component);

  function MjmlClass() {
    _classCallCheck(this, MjmlClass);

    return _possibleConstructorReturn(this, (MjmlClass.__proto__ || _Object$getPrototypeOf(MjmlClass)).apply(this, arguments));
  }

  _createClass(MjmlClass, [{
    key: 'render',
    value: function render() {
      return React.createElement('mj-class', handleMjmlProps(this.props), null);
    }
  }]);

  return MjmlClass;
}(Component);