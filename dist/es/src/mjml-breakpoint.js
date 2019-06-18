import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export var MjmlBreakpoint = function (_Component) {
  _inherits(MjmlBreakpoint, _Component);

  function MjmlBreakpoint() {
    _classCallCheck(this, MjmlBreakpoint);

    return _possibleConstructorReturn(this, (MjmlBreakpoint.__proto__ || _Object$getPrototypeOf(MjmlBreakpoint)).apply(this, arguments));
  }

  _createClass(MjmlBreakpoint, [{
    key: 'render',
    value: function render() {
      return React.createElement('mj-breakpoint', handleMjmlProps(this.props), null);
    }
  }]);

  return MjmlBreakpoint;
}(Component);