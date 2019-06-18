import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component } from 'react';
import { string } from 'prop-types';

import { MjmlRaw } from '../mjml-raw';

export var MjmlTrackingPixel = (_temp = _class = function (_Component) {
  _inherits(MjmlTrackingPixel, _Component);

  function MjmlTrackingPixel() {
    _classCallCheck(this, MjmlTrackingPixel);

    return _possibleConstructorReturn(this, (MjmlTrackingPixel.__proto__ || _Object$getPrototypeOf(MjmlTrackingPixel)).apply(this, arguments));
  }

  _createClass(MjmlTrackingPixel, [{
    key: 'render',
    value: function render() {
      var src = this.props.src;

      var trackingPixelStyle = {
        display: 'table',
        height: '1px!important',
        width: '1px!important',
        border: '0!important',
        margin: '0!important',
        padding: '0!important'
      };
      return React.createElement(
        MjmlRaw,
        null,
        React.createElement('img', { src: src, style: trackingPixelStyle, width: 1, height: 1, border: 0 })
      );
    }
  }]);

  return MjmlTrackingPixel;
}(Component), _class.propTypes = {
  src: string.isRequired
}, _temp);