import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export var MjmlFont = function (_Component) {
  _inherits(MjmlFont, _Component);

  function MjmlFont() {
    _classCallCheck(this, MjmlFont);

    return _possibleConstructorReturn(this, (MjmlFont.__proto__ || _Object$getPrototypeOf(MjmlFont)).apply(this, arguments));
  }

  _createClass(MjmlFont, [{
    key: 'render',
    value: function render() {
      return React.createElement('mj-font', handleMjmlProps(this.props), null);
    }
  }]);

  return MjmlFont;
}(Component);