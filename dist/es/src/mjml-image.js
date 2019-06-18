import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export var MjmlImage = function (_Component) {
  _inherits(MjmlImage, _Component);

  function MjmlImage() {
    _classCallCheck(this, MjmlImage);

    return _possibleConstructorReturn(this, (MjmlImage.__proto__ || _Object$getPrototypeOf(MjmlImage)).apply(this, arguments));
  }

  _createClass(MjmlImage, [{
    key: 'render',
    value: function render() {
      return React.createElement('mj-image', handleMjmlProps(this.props), null);
    }
  }]);

  return MjmlImage;
}(Component);