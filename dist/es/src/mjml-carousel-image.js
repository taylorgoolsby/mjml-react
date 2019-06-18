import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export var MjmlCarouselImage = function (_Component) {
  _inherits(MjmlCarouselImage, _Component);

  function MjmlCarouselImage() {
    _classCallCheck(this, MjmlCarouselImage);

    return _possibleConstructorReturn(this, (MjmlCarouselImage.__proto__ || _Object$getPrototypeOf(MjmlCarouselImage)).apply(this, arguments));
  }

  _createClass(MjmlCarouselImage, [{
    key: 'render',
    value: function render() {
      return React.createElement('mj-carousel-image', handleMjmlProps(this.props), null);
    }
  }]);

  return MjmlCarouselImage;
}(Component);