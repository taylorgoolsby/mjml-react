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

export var MjmlAccordion = (_temp = _class = function (_Component) {
  _inherits(MjmlAccordion, _Component);

  function MjmlAccordion() {
    _classCallCheck(this, MjmlAccordion);

    return _possibleConstructorReturn(this, (MjmlAccordion.__proto__ || _Object$getPrototypeOf(MjmlAccordion)).apply(this, arguments));
  }

  _createClass(MjmlAccordion, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return React.createElement('mj-accordion', handleMjmlProps(rest), children);
    }
  }]);

  return MjmlAccordion;
}(Component), _class.propTypes = {
  children: node.isRequired
}, _temp);