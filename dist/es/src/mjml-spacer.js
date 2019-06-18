import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export var MjmlSpacer = function (_Component) {
  _inherits(MjmlSpacer, _Component);

  function MjmlSpacer() {
    _classCallCheck(this, MjmlSpacer);

    return _possibleConstructorReturn(this, (MjmlSpacer.__proto__ || _Object$getPrototypeOf(MjmlSpacer)).apply(this, arguments));
  }

  _createClass(MjmlSpacer, [{
    key: 'render',
    value: function render() {
      return React.createElement('mj-spacer', handleMjmlProps(this.props), null);
    }
  }]);

  return MjmlSpacer;
}(Component);