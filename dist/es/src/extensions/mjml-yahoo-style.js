import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component } from 'react';
import { string } from 'prop-types';

import { MjmlRaw } from '../mjml-raw';

export var MjmlYahooStyle = (_temp = _class = function (_Component) {
  _inherits(MjmlYahooStyle, _Component);

  function MjmlYahooStyle() {
    _classCallCheck(this, MjmlYahooStyle);

    return _possibleConstructorReturn(this, (MjmlYahooStyle.__proto__ || _Object$getPrototypeOf(MjmlYahooStyle)).apply(this, arguments));
  }

  _createClass(MjmlYahooStyle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      if (children && children.trim().length) {
        return React.createElement(
          MjmlRaw,
          rest,
          React.createElement(
            'style',
            null,
            '@media screen yahoo {' + children + '}'
          )
        );
      }
      return null;
    }
  }]);

  return MjmlYahooStyle;
}(Component), _class.propTypes = {
  children: string.isRequired
}, _temp);