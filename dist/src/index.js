'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MjmlWrapper = exports.MjmlTitle = exports.MjmlText = exports.MjmlTable = exports.MjmlStyle = exports.MjmlSpacer = exports.MjmlSocialElement = exports.MjmlSocial = exports.MjmlSection = exports.MjmlRaw = exports.MjmlPreview = exports.MjmlNavbarLink = exports.MjmlNavbar = exports.MjmlImage = exports.MjmlHero = exports.MjmlHead = exports.MjmlGroup = exports.MjmlFont = exports.MjmlDivider = exports.MjmlColumn = exports.MjmlClass = exports.MjmlCarouselImage = exports.MjmlCarousel = exports.MjmlButton = exports.MjmlBreakpoint = exports.MjmlBody = exports.MjmlAttributes = exports.MjmlAll = exports.MjmlAccordionTitle = exports.MjmlAccordionText = exports.MjmlAccordionElement = exports.MjmlAccordion = exports.Mjml = exports.renderToMjml = exports.render = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _mjml = require('./mjml');

Object.defineProperty(exports, 'Mjml', {
  enumerable: true,
  get: function get() {
    return _mjml.Mjml;
  }
});

var _mjmlAccordion = require('./mjml-accordion');

Object.defineProperty(exports, 'MjmlAccordion', {
  enumerable: true,
  get: function get() {
    return _mjmlAccordion.MjmlAccordion;
  }
});

var _mjmlAccordionElement = require('./mjml-accordion-element');

Object.defineProperty(exports, 'MjmlAccordionElement', {
  enumerable: true,
  get: function get() {
    return _mjmlAccordionElement.MjmlAccordionElement;
  }
});

var _mjmlAccordionText = require('./mjml-accordion-text');

Object.defineProperty(exports, 'MjmlAccordionText', {
  enumerable: true,
  get: function get() {
    return _mjmlAccordionText.MjmlAccordionText;
  }
});

var _mjmlAccordionTitle = require('./mjml-accordion-title');

Object.defineProperty(exports, 'MjmlAccordionTitle', {
  enumerable: true,
  get: function get() {
    return _mjmlAccordionTitle.MjmlAccordionTitle;
  }
});

var _mjmlAll = require('./mjml-all');

Object.defineProperty(exports, 'MjmlAll', {
  enumerable: true,
  get: function get() {
    return _mjmlAll.MjmlAll;
  }
});

var _mjmlAttributes = require('./mjml-attributes');

Object.defineProperty(exports, 'MjmlAttributes', {
  enumerable: true,
  get: function get() {
    return _mjmlAttributes.MjmlAttributes;
  }
});

var _mjmlBody = require('./mjml-body');

Object.defineProperty(exports, 'MjmlBody', {
  enumerable: true,
  get: function get() {
    return _mjmlBody.MjmlBody;
  }
});

var _mjmlBreakpoint = require('./mjml-breakpoint');

Object.defineProperty(exports, 'MjmlBreakpoint', {
  enumerable: true,
  get: function get() {
    return _mjmlBreakpoint.MjmlBreakpoint;
  }
});

var _mjmlButton = require('./mjml-button');

Object.defineProperty(exports, 'MjmlButton', {
  enumerable: true,
  get: function get() {
    return _mjmlButton.MjmlButton;
  }
});

var _mjmlCarousel = require('./mjml-carousel');

Object.defineProperty(exports, 'MjmlCarousel', {
  enumerable: true,
  get: function get() {
    return _mjmlCarousel.MjmlCarousel;
  }
});

var _mjmlCarouselImage = require('./mjml-carousel-image');

Object.defineProperty(exports, 'MjmlCarouselImage', {
  enumerable: true,
  get: function get() {
    return _mjmlCarouselImage.MjmlCarouselImage;
  }
});

var _mjmlClass = require('./mjml-class');

Object.defineProperty(exports, 'MjmlClass', {
  enumerable: true,
  get: function get() {
    return _mjmlClass.MjmlClass;
  }
});

var _mjmlColumn = require('./mjml-column');

Object.defineProperty(exports, 'MjmlColumn', {
  enumerable: true,
  get: function get() {
    return _mjmlColumn.MjmlColumn;
  }
});

var _mjmlDivider = require('./mjml-divider');

Object.defineProperty(exports, 'MjmlDivider', {
  enumerable: true,
  get: function get() {
    return _mjmlDivider.MjmlDivider;
  }
});

var _mjmlFont = require('./mjml-font');

Object.defineProperty(exports, 'MjmlFont', {
  enumerable: true,
  get: function get() {
    return _mjmlFont.MjmlFont;
  }
});

var _mjmlGroup = require('./mjml-group');

Object.defineProperty(exports, 'MjmlGroup', {
  enumerable: true,
  get: function get() {
    return _mjmlGroup.MjmlGroup;
  }
});

var _mjmlHead = require('./mjml-head');

Object.defineProperty(exports, 'MjmlHead', {
  enumerable: true,
  get: function get() {
    return _mjmlHead.MjmlHead;
  }
});

var _mjmlHero = require('./mjml-hero');

Object.defineProperty(exports, 'MjmlHero', {
  enumerable: true,
  get: function get() {
    return _mjmlHero.MjmlHero;
  }
});

var _mjmlImage = require('./mjml-image');

Object.defineProperty(exports, 'MjmlImage', {
  enumerable: true,
  get: function get() {
    return _mjmlImage.MjmlImage;
  }
});

var _mjmlNavbar = require('./mjml-navbar');

Object.defineProperty(exports, 'MjmlNavbar', {
  enumerable: true,
  get: function get() {
    return _mjmlNavbar.MjmlNavbar;
  }
});

var _mjmlNavbarLink = require('./mjml-navbar-link');

Object.defineProperty(exports, 'MjmlNavbarLink', {
  enumerable: true,
  get: function get() {
    return _mjmlNavbarLink.MjmlNavbarLink;
  }
});

var _mjmlPreview = require('./mjml-preview');

Object.defineProperty(exports, 'MjmlPreview', {
  enumerable: true,
  get: function get() {
    return _mjmlPreview.MjmlPreview;
  }
});

var _mjmlRaw = require('./mjml-raw');

Object.defineProperty(exports, 'MjmlRaw', {
  enumerable: true,
  get: function get() {
    return _mjmlRaw.MjmlRaw;
  }
});

var _mjmlSection = require('./mjml-section');

Object.defineProperty(exports, 'MjmlSection', {
  enumerable: true,
  get: function get() {
    return _mjmlSection.MjmlSection;
  }
});

var _mjmlSocial = require('./mjml-social');

Object.defineProperty(exports, 'MjmlSocial', {
  enumerable: true,
  get: function get() {
    return _mjmlSocial.MjmlSocial;
  }
});

var _mjmlSocialElement = require('./mjml-social-element');

Object.defineProperty(exports, 'MjmlSocialElement', {
  enumerable: true,
  get: function get() {
    return _mjmlSocialElement.MjmlSocialElement;
  }
});

var _mjmlSpacer = require('./mjml-spacer');

Object.defineProperty(exports, 'MjmlSpacer', {
  enumerable: true,
  get: function get() {
    return _mjmlSpacer.MjmlSpacer;
  }
});

var _mjmlStyle = require('./mjml-style');

Object.defineProperty(exports, 'MjmlStyle', {
  enumerable: true,
  get: function get() {
    return _mjmlStyle.MjmlStyle;
  }
});

var _mjmlTable = require('./mjml-table');

Object.defineProperty(exports, 'MjmlTable', {
  enumerable: true,
  get: function get() {
    return _mjmlTable.MjmlTable;
  }
});

var _mjmlText = require('./mjml-text');

Object.defineProperty(exports, 'MjmlText', {
  enumerable: true,
  get: function get() {
    return _mjmlText.MjmlText;
  }
});

var _mjmlTitle = require('./mjml-title');

Object.defineProperty(exports, 'MjmlTitle', {
  enumerable: true,
  get: function get() {
    return _mjmlTitle.MjmlTitle;
  }
});

var _mjmlWrapper = require('./mjml-wrapper');

Object.defineProperty(exports, 'MjmlWrapper', {
  enumerable: true,
  get: function get() {
    return _mjmlWrapper.MjmlWrapper;
  }
});

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _mjml2 = require('mjml');

var _mjml3 = _interopRequireDefault(_mjml2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.render = render;
exports.renderToMjml = renderToMjml;


function render(email) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var defaults = {
    keepComments: false,
    beautify: false,
    minify: true,
    validationLevel: 'strict'
  };
  return (0, _mjml3.default)(renderToMjml(email), (0, _extends3.default)({}, defaults, options));
}

function renderToMjml(email) {
  return _server2.default.renderToStaticMarkup(email);
}