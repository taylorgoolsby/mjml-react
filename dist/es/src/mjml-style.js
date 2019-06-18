import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component } from 'react';
import { string } from 'prop-types';

import { handleMjmlProps } from './utils';

export var MjmlStyle = (_temp = _class = function (_Component) {
  _inherits(MjmlStyle, _Component);

  function MjmlStyle() {
    _classCallCheck(this, MjmlStyle);

    return _possibleConstructorReturn(this, (MjmlStyle.__proto__ || _Object$getPrototypeOf(MjmlStyle)).apply(this, arguments));
  }

  _createClass(MjmlStyle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return React.createElement('mj-style', _extends({}, handleMjmlProps(rest), {
        dangerouslySetInnerHTML: { __html: children }
      }));
    }
  }]);

  return MjmlStyle;
}(Component), _class.propTypes = {
  children: string.isRequired
}, _temp);