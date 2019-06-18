import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export var MjmlDivider = function (_Component) {
  _inherits(MjmlDivider, _Component);

  function MjmlDivider() {
    _classCallCheck(this, MjmlDivider);

    return _possibleConstructorReturn(this, (MjmlDivider.__proto__ || _Object$getPrototypeOf(MjmlDivider)).apply(this, arguments));
  }

  _createClass(MjmlDivider, [{
    key: 'render',
    value: function render() {
      return React.createElement('mj-divider', handleMjmlProps(this.props), null);
    }
  }]);

  return MjmlDivider;
}(Component);