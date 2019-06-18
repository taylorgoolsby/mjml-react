import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { expect } from 'chai';

import * as tags from '../src';
import { MjmlComment } from '../src/extensions';

var renderToMjml = tags.renderToMjml;

describe('mjml tags', function () {

  it('should render <Mjml/> with content', function () {
    expect(renderToMjml(React.createElement(
      tags.Mjml,
      null,
      'Content'
    ))).to.equal('<mjml>Content</mjml>');
  });

  describe('<MjmlTitle/>', function () {
    it('should render string', function () {
      expect(renderToMjml(React.createElement(
        tags.MjmlTitle,
        null,
        'Content'
      ))).to.equal('<mj-title>Content</mj-title>');
    });

    it('should render an expression', function () {
      var variable = 'Nice';
      expect(renderToMjml(React.createElement(
        tags.MjmlTitle,
        null,
        variable,
        ' Content'
      ))).to.equal('<mj-title>Nice Content</mj-title>');
    });

    it('should render functional component', function () {
      var HelloWorld = function HelloWorld() {
        return 'Hello World!';
      };
      expect(renderToMjml(React.createElement(
        tags.MjmlTitle,
        null,
        React.createElement(HelloWorld, null)
      ))).to.equal('<mj-title>Hello World!</mj-title>');
    });

    it('should render component', function () {
      var HelloWorld = function (_React$Component) {
        _inherits(HelloWorld, _React$Component);

        function HelloWorld() {
          _classCallCheck(this, HelloWorld);

          return _possibleConstructorReturn(this, (HelloWorld.__proto__ || _Object$getPrototypeOf(HelloWorld)).apply(this, arguments));
        }

        _createClass(HelloWorld, [{
          key: 'render',
          value: function render() {
            return 'Hello World!';
          }
        }]);

        return HelloWorld;
      }(React.Component);

      expect(renderToMjml(React.createElement(
        tags.MjmlTitle,
        null,
        React.createElement(HelloWorld, null)
      ))).to.equal('<mj-title>Hello World!</mj-title>');
    });
  });

  it('should render <MjmlStyle/> with content', function () {
    expect(renderToMjml(React.createElement(
      tags.MjmlStyle,
      null,
      '.button{}'
    ))).to.equal('<mj-style>.button{}</mj-style>');
    expect(renderToMjml(React.createElement(
      tags.MjmlStyle,
      { inline: true },
      '.button{}'
    ))).to.equal('<mj-style inline="inline">.button{}</mj-style>');
    expect(renderToMjml(React.createElement(
      tags.MjmlStyle,
      null,
      'body > div {}'
    ))).to.equal('<mj-style>body > div {}</mj-style>');
  });

  it('should render <MjmlRaw/> with content', function () {
    expect(renderToMjml(React.createElement(
      tags.MjmlRaw,
      null,
      React.createElement(
        'h1',
        null,
        'Hello World!'
      )
    ))).to.equal('<mj-raw><h1>Hello World!</h1></mj-raw>');
  });

  it('should render <MjmlPreview/> with content', function () {
    expect(renderToMjml(React.createElement(
      tags.MjmlPreview,
      null,
      'Hello World!'
    ))).to.equal('<mj-preview>Hello World!</mj-preview>');
  });

  it('should render <MjmlHead/> with content', function () {
    expect(renderToMjml(React.createElement(
      tags.MjmlHead,
      null,
      'I am the head'
    ))).to.equal('<mj-head>I am the head</mj-head>');
  });

  it('should render <MjmlFont/>', function () {
    expect(renderToMjml(React.createElement(tags.MjmlFont, {
      name: 'Roboto',
      href: 'https://fonts.googleapis.com/css?family=Roboto'
    }))).to.equal('<mj-font name="Roboto" href="https://fonts.googleapis.com/css?family=Roboto"></mj-font>');
  });

  it('should render <MjmlBreakpoint/>', function () {
    expect(renderToMjml(React.createElement(tags.MjmlBreakpoint, { width: 400 }))).to.equal('<mj-breakpoint width="400px"></mj-breakpoint>');
  });

  it('should render <MjmlBody/> with content', function () {
    expect(renderToMjml(React.createElement(
      tags.MjmlBody,
      {
        width: 100,
        backgroundColor: 'blue',
        cssClass: 'body'
      },
      'Hello World!'
    ))).to.equal('<mj-body width="100px" background-color="blue" css-class="body">Hello World!</mj-body>');
  });

  it('should render <MjmlSection/> with content', function () {
    expect(renderToMjml(React.createElement(
      tags.MjmlSection,
      {
        fullWidth: true,
        paddingTop: 10,
        cssClass: 'first-section'
      },
      'Content'
    ))).to.equal('<mj-section full-width="full-width" padding-top="10px" css-class="first-section">Content</mj-section>');
  });

  it('should render <MjmlColumn/> with content', function () {
    expect(renderToMjml(React.createElement(
      tags.MjmlColumn,
      {
        borderRadius: 10,
        width: 20
      },
      'Content'
    ))).to.equal('<mj-column border-radius="10px" width="20px">Content</mj-column>');
  });

  it('should render <MjmlButton/> with content', function () {
    expect(renderToMjml(React.createElement(
      tags.MjmlButton,
      {
        height: 20,
        fontSize: 22,
        lineHeight: 22 * 1.5
      },
      'Click Me'
    ))).to.equal('<mj-button height="20px" font-size="22px" line-height="33px">Click Me</mj-button>');
  });

  it('should allow passing array as content of <MjmlButton>', function () {
    expect(renderToMjml(React.createElement(
      tags.MjmlButton,
      null,
      'First Line',
      'Second Line'
    ))).to.equal('<mj-button>First LineSecond Line</mj-button>');
  });

  it('should render <MjmlDivider/>', function () {
    expect(renderToMjml(React.createElement(tags.MjmlDivider, { borderWidth: 2, borderColor: 'red' }))).to.equal('<mj-divider border-width="2px" border-color="red"></mj-divider>');
  });

  it('should render <MjmlImage/>', function () {
    expect(renderToMjml(React.createElement(tags.MjmlImage, { src: 'https://www.wix.com/logo.png' }))).to.equal('<mj-image src="https://www.wix.com/logo.png"></mj-image>');
  });

  it('should render <MjmlSpacer/>', function () {
    expect(renderToMjml(React.createElement(tags.MjmlSpacer, { height: 10 }))).to.equal('<mj-spacer height="10px"></mj-spacer>');
  });

  it('should render <MjmlText/>', function () {
    expect(renderToMjml(React.createElement(
      tags.MjmlText,
      { fontWeight: 20, letterSpacing: 2 },
      React.createElement(
        'span',
        null,
        'Hello World!'
      )
    ))).to.equal('<mj-text font-weight="20" letter-spacing="2px"><span>Hello World!</span></mj-text>');
  });

  it('should render <MjmlWrapper/>', function () {
    expect(renderToMjml(React.createElement(
      tags.MjmlWrapper,
      { padding: 20, fullWidth: true },
      React.createElement(
        'span',
        null,
        'Hello World!'
      )
    ))).to.equal('<mj-wrapper padding="20px" full-width="full-width"><span>Hello World!</span></mj-wrapper>');
  });

  it('should render <MjmlAttributes/>', function () {
    expect(renderToMjml(React.createElement(
      tags.MjmlAttributes,
      null,
      React.createElement(
        tags.MjmlText,
        { padding: 0 },
        'Line Of Text'
      ),
      React.createElement(tags.MjmlClass, { name: 'white', color: 'white' }),
      React.createElement(tags.MjmlAll, { padding: 0 })
    ))).to.equal('<mj-attributes><mj-text padding="0px">Line Of Text</mj-text><mj-class name="white" color="white"></mj-class><mj-all padding="0px"></mj-all></mj-attributes>');
  });

  it('should render <MjmlHero/>', function () {
    expect(renderToMjml(React.createElement(
      tags.MjmlHero,
      { backgroundUrl: 'https://www.wix.com/logo.png' },
      React.createElement(tags.MjmlImage, { src: 'https://www.wix.com/logo.png' })
    ))).to.equal('<mj-hero background-url="https://www.wix.com/logo.png"><mj-image src="https://www.wix.com/logo.png"></mj-image></mj-hero>');
  });

  it('should render <MjmlComment/>', function () {
    expect(renderToMjml(React.createElement(
      MjmlComment,
      null,
      'Hello World!'
    ))).to.equal('<mj-raw><!--Hello World!--></mj-raw>');
  });
});