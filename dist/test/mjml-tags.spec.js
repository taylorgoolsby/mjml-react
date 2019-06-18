'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _src = require('../src');

var tags = _interopRequireWildcard(_src);

var _extensions = require('../src/extensions');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderToMjml = tags.renderToMjml;

describe('mjml tags', function () {

  it('should render <Mjml/> with content', function () {
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(
      tags.Mjml,
      null,
      'Content'
    ))).to.equal('<mjml>Content</mjml>');
  });

  describe('<MjmlTitle/>', function () {
    it('should render string', function () {
      (0, _chai.expect)(renderToMjml(_react2.default.createElement(
        tags.MjmlTitle,
        null,
        'Content'
      ))).to.equal('<mj-title>Content</mj-title>');
    });

    it('should render an expression', function () {
      var variable = 'Nice';
      (0, _chai.expect)(renderToMjml(_react2.default.createElement(
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
      (0, _chai.expect)(renderToMjml(_react2.default.createElement(
        tags.MjmlTitle,
        null,
        _react2.default.createElement(HelloWorld, null)
      ))).to.equal('<mj-title>Hello World!</mj-title>');
    });

    it('should render component', function () {
      var HelloWorld = function (_React$Component) {
        (0, _inherits3.default)(HelloWorld, _React$Component);

        function HelloWorld() {
          (0, _classCallCheck3.default)(this, HelloWorld);
          return (0, _possibleConstructorReturn3.default)(this, (HelloWorld.__proto__ || (0, _getPrototypeOf2.default)(HelloWorld)).apply(this, arguments));
        }

        (0, _createClass3.default)(HelloWorld, [{
          key: 'render',
          value: function render() {
            return 'Hello World!';
          }
        }]);
        return HelloWorld;
      }(_react2.default.Component);

      (0, _chai.expect)(renderToMjml(_react2.default.createElement(
        tags.MjmlTitle,
        null,
        _react2.default.createElement(HelloWorld, null)
      ))).to.equal('<mj-title>Hello World!</mj-title>');
    });
  });

  it('should render <MjmlStyle/> with content', function () {
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(
      tags.MjmlStyle,
      null,
      '.button{}'
    ))).to.equal('<mj-style>.button{}</mj-style>');
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(
      tags.MjmlStyle,
      { inline: true },
      '.button{}'
    ))).to.equal('<mj-style inline="inline">.button{}</mj-style>');
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(
      tags.MjmlStyle,
      null,
      'body > div {}'
    ))).to.equal('<mj-style>body > div {}</mj-style>');
  });

  it('should render <MjmlRaw/> with content', function () {
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(
      tags.MjmlRaw,
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Hello World!'
      )
    ))).to.equal('<mj-raw><h1>Hello World!</h1></mj-raw>');
  });

  it('should render <MjmlPreview/> with content', function () {
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(
      tags.MjmlPreview,
      null,
      'Hello World!'
    ))).to.equal('<mj-preview>Hello World!</mj-preview>');
  });

  it('should render <MjmlHead/> with content', function () {
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(
      tags.MjmlHead,
      null,
      'I am the head'
    ))).to.equal('<mj-head>I am the head</mj-head>');
  });

  it('should render <MjmlFont/>', function () {
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(tags.MjmlFont, {
      name: 'Roboto',
      href: 'https://fonts.googleapis.com/css?family=Roboto'
    }))).to.equal('<mj-font name="Roboto" href="https://fonts.googleapis.com/css?family=Roboto"></mj-font>');
  });

  it('should render <MjmlBreakpoint/>', function () {
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(tags.MjmlBreakpoint, { width: 400 }))).to.equal('<mj-breakpoint width="400px"></mj-breakpoint>');
  });

  it('should render <MjmlBody/> with content', function () {
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(
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
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(
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
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(
      tags.MjmlColumn,
      {
        borderRadius: 10,
        width: 20
      },
      'Content'
    ))).to.equal('<mj-column border-radius="10px" width="20px">Content</mj-column>');
  });

  it('should render <MjmlButton/> with content', function () {
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(
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
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(
      tags.MjmlButton,
      null,
      'First Line',
      'Second Line'
    ))).to.equal('<mj-button>First LineSecond Line</mj-button>');
  });

  it('should render <MjmlDivider/>', function () {
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(tags.MjmlDivider, { borderWidth: 2, borderColor: 'red' }))).to.equal('<mj-divider border-width="2px" border-color="red"></mj-divider>');
  });

  it('should render <MjmlImage/>', function () {
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(tags.MjmlImage, { src: 'https://www.wix.com/logo.png' }))).to.equal('<mj-image src="https://www.wix.com/logo.png"></mj-image>');
  });

  it('should render <MjmlSpacer/>', function () {
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(tags.MjmlSpacer, { height: 10 }))).to.equal('<mj-spacer height="10px"></mj-spacer>');
  });

  it('should render <MjmlText/>', function () {
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(
      tags.MjmlText,
      { fontWeight: 20, letterSpacing: 2 },
      _react2.default.createElement(
        'span',
        null,
        'Hello World!'
      )
    ))).to.equal('<mj-text font-weight="20" letter-spacing="2px"><span>Hello World!</span></mj-text>');
  });

  it('should render <MjmlWrapper/>', function () {
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(
      tags.MjmlWrapper,
      { padding: 20, fullWidth: true },
      _react2.default.createElement(
        'span',
        null,
        'Hello World!'
      )
    ))).to.equal('<mj-wrapper padding="20px" full-width="full-width"><span>Hello World!</span></mj-wrapper>');
  });

  it('should render <MjmlAttributes/>', function () {
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(
      tags.MjmlAttributes,
      null,
      _react2.default.createElement(
        tags.MjmlText,
        { padding: 0 },
        'Line Of Text'
      ),
      _react2.default.createElement(tags.MjmlClass, { name: 'white', color: 'white' }),
      _react2.default.createElement(tags.MjmlAll, { padding: 0 })
    ))).to.equal('<mj-attributes><mj-text padding="0px">Line Of Text</mj-text><mj-class name="white" color="white"></mj-class><mj-all padding="0px"></mj-all></mj-attributes>');
  });

  it('should render <MjmlHero/>', function () {
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(
      tags.MjmlHero,
      { backgroundUrl: 'https://www.wix.com/logo.png' },
      _react2.default.createElement(tags.MjmlImage, { src: 'https://www.wix.com/logo.png' })
    ))).to.equal('<mj-hero background-url="https://www.wix.com/logo.png"><mj-image src="https://www.wix.com/logo.png"></mj-image></mj-hero>');
  });

  it('should render <MjmlComment/>', function () {
    (0, _chai.expect)(renderToMjml(_react2.default.createElement(
      _extensions.MjmlComment,
      null,
      'Hello World!'
    ))).to.equal('<mj-raw><!--Hello World!--></mj-raw>');
  });
});