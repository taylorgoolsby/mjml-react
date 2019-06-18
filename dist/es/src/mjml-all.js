import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export var MjmlAll = function (_Component) {
  _inherits(MjmlAll, _Component);

  function MjmlAll() {
    _classCallCheck(this, MjmlAll);

    return _possibleConstructorReturn(this, (MjmlAll.__proto__ || _Object$getPrototypeOf(MjmlAll)).apply(this, arguments));
  }

  _createClass(MjmlAll, [{
    key: 'render',
    value: function render() {
      return React.createElement('mj-all', handleMjmlProps(this.props), null);
    }
  }]);

  return MjmlAll;
}(Component);