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

export var MjmlSection = (_temp = _class = function (_Component) {
  _inherits(MjmlSection, _Component);

  function MjmlSection() {
    _classCallCheck(this, MjmlSection);

    return _possibleConstructorReturn(this, (MjmlSection.__proto__ || _Object$getPrototypeOf(MjmlSection)).apply(this, arguments));
  }

  _createClass(MjmlSection, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return React.createElement('mj-section', handleMjmlProps(rest), children);
    }
  }]);

  return MjmlSection;
}(Component), _class.propTypes = {
  children: node
}, _temp);