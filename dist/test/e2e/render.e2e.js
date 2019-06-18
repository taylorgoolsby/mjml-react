'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env.WITH_EYES_TIMEOUT = 120000;

var _require = require('chai'),
    expect = _require.expect;

var puppeteer = require('puppeteer');

var _require2 = require('with-eyes'),
    eyes = _require2.eyes;

var renderEmail = require('./render-email').default;

describe('mjml-react', function () {
  var browser = void 0;
  var page = void 0;

  before((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return puppeteer.launch({
              args: ['--no-sandbox', '--disable-setuid-sandbox'],
              devtools: false,
              headless: false
            });

          case 2:
            browser = _context.sent;

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));

  after(function () {
    return browser.close();
  });
  afterEach(function () {
    return eyes.abortIfNotClosed();
  });

  var renderInBrowser = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(viewPortOptions) {
      var _renderEmail, html, errors;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return browser.newPage();

            case 2:
              page = _context2.sent;
              _context2.next = 5;
              return page.setViewport(viewPortOptions);

            case 5:
              _renderEmail = renderEmail(), html = _renderEmail.html, errors = _renderEmail.errors;

              expect(errors).to.deep.equal([]);

              _context2.next = 9;
              return page.goto(htmlToDataUri(html), { waitUntil: 'networkidle0' });

            case 9:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function renderInBrowser(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  describe('desktop', function () {
    eyes.it('should have no render errors', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return renderInBrowser({ width: 1280, height: 600 });

            case 2:
              _context3.t0 = eyes;
              _context3.next = 5;
              return page.screenshot({ fullPage: true });

            case 5:
              _context3.t1 = _context3.sent;
              _context3.next = 8;
              return _context3.t0.checkImage.call(_context3.t0, _context3.t1, 'desktop');

            case 8:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    })));
  });

  describe('mobile', function () {
    eyes.it('should have no render errors', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return renderInBrowser({ width: 480, height: 600, isMobile: true });

            case 2:
              _context4.t0 = eyes;
              _context4.next = 5;
              return page.screenshot({ fullPage: true });

            case 5:
              _context4.t1 = _context4.sent;
              _context4.next = 8;
              return _context4.t0.checkImage.call(_context4.t0, _context4.t1, 'mobile');

            case 8:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    })));
  });
});

function htmlToDataUri(html) {
  return 'data:text/html,' + html.replace(/#/g, '%23');
}