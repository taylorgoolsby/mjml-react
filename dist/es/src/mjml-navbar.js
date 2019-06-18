import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component } from 'react';
import { node } from 'prop-types';

import { handleMjmlProps } from './utils';

export var MjmlNavbar = (_temp = _class = function (_Component) {
  _inherits(MjmlNavbar, _Component);

  function MjmlNavbar() {
    _classCallCheck(this, MjmlNavbar);

    return _possibleConstructorReturn(this, (MjmlNavbar.__proto__ || _Object$getPrototypeOf(MjmlNavbar)).apply(this, arguments));
  }

  _createClass(MjmlNavbar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return React.createElement('mj-navbar', handleMjmlProps(rest), children);
    }
  }]);

  return MjmlNavbar;
}(Component), _class.propTypes = {
  children: node.isRequired
}, _temp);