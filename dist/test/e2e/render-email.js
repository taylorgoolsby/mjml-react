'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _src = require('../../src');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderEmail = function renderEmail() {
  return (0, _src.render)(_react2.default.createElement(
    _src.Mjml,
    null,
    _react2.default.createElement(
      _src.MjmlHead,
      null,
      _react2.default.createElement(
        _src.MjmlTitle,
        null,
        'Do not take life too seriously. You will never get out of it alive.'
      ),
      _react2.default.createElement(
        _src.MjmlPreview,
        null,
        'Do not take life too seriously. You will never get out of it alive.'
      ),
      _react2.default.createElement(_src.MjmlFont, {
        name: 'Montserrat',
        href: 'https://fonts.googleapis.com/css?family=Montserrat'
      }),
      _react2.default.createElement(_src.MjmlFont, {
        name: 'Roboto',
        href: 'https://fonts.googleapis.com/css?family=Roboto'
      }),
      _react2.default.createElement(
        _src.MjmlStyle,
        null,
        '\n        * {\n          \'-webkit-font-smoothing\': antialiased;\n        }\n        @media only screen and (max-width:480px) {\n          .font-size-40-in-mobile div {\n            font-size: 40px !important;\n          }\n          .button table {\n            width: 100% !important;\n          }\n        }'
      )
    ),
    _react2.default.createElement(
      _src.MjmlBody,
      {
        backgroundColor: '#fff',
        width: 700
      },
      _react2.default.createElement(
        _src.MjmlSection,
        {
          backgroundColor: '#ffffff',
          fullWidth: true,
          padding: 15
        },
        _react2.default.createElement(
          _src.MjmlColumn,
          null,
          _react2.default.createElement(
            _src.MjmlText,
            {
              align: 'center',
              color: '#9a9c9f',
              fontFamily: 'Helvetica,Ubuntu,Arial,sans-serif',
              fontSize: 10,
              lineHeight: 18,
              padding: 0
            },
            'Can\'t see this Message? ',
            _react2.default.createElement(
              'a',
              {
                href: 'https://www.wix.com/',
                rel: 'noopener noreferrer',
                target: '_blank',
                style: {
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                  color: '#3899ec'
                }
              },
              'View in browser'
            )
          )
        )
      ),
      _react2.default.createElement(
        _src.MjmlWrapper,
        {
          backgroundColor: '#222C2C',
          backgroundRepeat: 'no-repeat',
          backgroundUrl: 'https://static.wixstatic.com/media/f84110_61c47c7d1fe3468cb8a4fdf46f141c6b~mv2.png',
          fullWidth: true,
          padding: 15
        },
        _react2.default.createElement(
          _src.MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          _react2.default.createElement(
            _src.MjmlColumn,
            null,
            _react2.default.createElement(_src.MjmlImage, {
              height: 64,
              padding: 0,
              src: 'https://static.wixstatic.com/media/a306cb_c61667d7fdba400a8d8371f65e95b704.png',
              width: 64
            })
          )
        ),
        _react2.default.createElement(
          _src.MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          _react2.default.createElement(
            _src.MjmlColumn,
            null,
            _react2.default.createElement(
              _src.MjmlText,
              {
                align: 'center',
                color: '#838264',
                cssClass: 'font-size-40-in-mobile',
                fontFamily: 'Montserrat,Ubuntu,Helvetica,Arial,sans-serif',
                fontSize: 70,
                fontWeight: 700,
                letterSpacing: 5,
                lineHeight: 70 * 1.3,
                padding: 0
              },
              'SPECIAL OFFER'
            )
          )
        ),
        _react2.default.createElement(
          _src.MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          _react2.default.createElement(
            _src.MjmlColumn,
            null,
            _react2.default.createElement(
              _src.MjmlText,
              {
                align: 'center',
                color: '#4a4a4a',
                fontFamily: 'Helvetica,Ubuntu,Arial,sans-serif',
                fontSize: 20,
                lineHeight: 20 * 1.5,
                padding: 0
              },
              'GET YOUR FIRST SESSION FREE'
            )
          )
        ),
        _react2.default.createElement(
          _src.MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          _react2.default.createElement(
            _src.MjmlColumn,
            null,
            _react2.default.createElement(
              _src.MjmlButton,
              {
                backgroundColor: '#fff',
                border: 'solid 1px #4a4a4a',
                color: '#4a4a4a',
                cssClass: 'button',
                fontFamily: 'Helvetica,Ubuntu,Arial,sans-serif',
                fontSize: '16px',
                href: 'https://www.wix.com/',
                innerPadding: '10px 30px',
                padding: 0
              },
              'Sign Up'
            )
          )
        ),
        _react2.default.createElement(
          _src.MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 0px 0px 0px'
          },
          _react2.default.createElement(
            _src.MjmlColumn,
            null,
            _react2.default.createElement(_src.MjmlImage, {
              padding: 0,
              src: 'https://static.wixstatic.com/media/a306cb_3208991023294d7c8412aada717f100f~mv2.png/v1/fit/w_700,h_2000,al_c,q_85/image.jpg'
            })
          )
        ),
        _react2.default.createElement(
          _src.MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          _react2.default.createElement(
            _src.MjmlColumn,
            null,
            _react2.default.createElement(
              _src.MjmlText,
              {
                align: 'center',
                color: '#4a4a4a',
                fontFamily: 'Helvetica,Ubuntu,Arial,sans-serif',
                fontSize: 20,
                lineHeight: 20 * 1.5,
                padding: 0
              },
              'Every Email has a main message. Tell your audience what you want them to know, how to take action and where to reach you.'
            )
          )
        ),
        _react2.default.createElement(
          _src.MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          _react2.default.createElement(
            _src.MjmlColumn,
            null,
            _react2.default.createElement(
              _src.MjmlButton,
              {
                backgroundColor: '#fff',
                border: 'solid 1px #4a4a4a',
                color: '#4a4a4a',
                cssClass: 'button',
                fontFamily: 'Roboto,Ubuntu,Helvetica,Arial,sans-serif',
                fontSize: '16px',
                href: 'https://www.wix.com/',
                innerPadding: '10px 30px',
                padding: 0
              },
              'Read More'
            )
          )
        ),
        _react2.default.createElement(
          _src.MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          _react2.default.createElement(
            _src.MjmlColumn,
            null,
            _react2.default.createElement(
              _src.MjmlText,
              {
                align: 'center',
                color: '#838264',
                fontFamily: 'Helvetica,Ubuntu,Arial,sans-serif',
                fontSize: 30,
                fontWeight: 700,
                lineHeight: 30 * 1.5
              },
              'NEVER STOP TRAINING'
            )
          )
        ),
        _react2.default.createElement(
          _src.MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          _react2.default.createElement(
            _src.MjmlColumn,
            { width: '50%' },
            _react2.default.createElement(
              _src.MjmlText,
              {
                align: 'center',
                color: '#4a4a4a',
                fontFamily: 'Helvetica,Ubuntu,Arial,sans-serif',
                fontSize: 16,
                lineHeight: 16 * 1.5
              },
              'Engage your audience. Use lively images and catchy text to grab people\u2019s attention and get them clicking.'
            ),
            _react2.default.createElement(_src.MjmlSpacer, { height: 20 }),
            _react2.default.createElement(
              _src.MjmlButton,
              {
                backgroundColor: '#fff',
                border: 'solid 1px #4a4a4a',
                color: '#4a4a4a',
                cssClass: 'button',
                fontFamily: 'Roboto,Ubuntu,Helvetica,Arial,sans-serif',
                fontSize: 16,
                innerPadding: '10px 30px',
                padding: 0
              },
              'Book Now'
            )
          ),
          _react2.default.createElement(
            _src.MjmlColumn,
            { width: '50%' },
            _react2.default.createElement(_src.MjmlImage, {
              src: 'https://static.wixstatic.com/media/eceb8e_2518dbff872b4241b39884a4817887ac~mv2.jpg/v1/fit/w_700,h_2000,al_c,q_85/image.jpg'
            })
          )
        ),
        _react2.default.createElement(
          _src.MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          _react2.default.createElement(
            _src.MjmlColumn,
            { width: '50%' },
            _react2.default.createElement(_src.MjmlImage, {
              src: 'https://static.wixstatic.com/media/eceb8e_17e61c888e5e470cb518910f7d9992e8~mv2.png/v1/fit/w_700,h_2000,al_c,q_85/image.jpg'
            })
          ),
          _react2.default.createElement(
            _src.MjmlColumn,
            { width: '50%' },
            _react2.default.createElement(
              _src.MjmlText,
              {
                align: 'center',
                color: '#4a4a4a',
                fontFamily: 'Helvetica,Ubuntu,Arial,sans-serif',
                fontSize: 16,
                lineHeight: 16 * 1.5,
                padding: 0
              },
              'This is a great place to tell your story. Describe what you have to offer and encourage your readers to check it out.'
            ),
            _react2.default.createElement(_src.MjmlSpacer, { height: 20 }),
            _react2.default.createElement(
              _src.MjmlButton,
              {
                backgroundColor: '#fff',
                border: 'solid 1px #4a4a4a',
                color: '#4a4a4a',
                cssClass: 'button',
                fontFamily: 'Helvetica,Ubuntu,Arial,sans-serif',
                fontSize: 16,
                href: 'https://www.wix.com/',
                innerPadding: '10px 30px',
                padding: 0
              },
              'Book Now'
            )
          )
        ),
        _react2.default.createElement(
          _src.MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          _react2.default.createElement(
            _src.MjmlColumn,
            null,
            _react2.default.createElement(_src.MjmlDivider, {
              borderWidth: 1,
              borderColor: '#C9C9C9',
              padding: 0
            })
          )
        ),
        _react2.default.createElement(
          _src.MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          _react2.default.createElement(
            _src.MjmlColumn,
            { width: '33.33%' },
            _react2.default.createElement(
              _src.MjmlText,
              {
                align: 'center',
                color: '#838264',
                fontFamily: 'Helvetica,Ubuntu,Arial,sans-serif',
                fontSize: 12,
                lineHeight: 12 * 1.5
              },
              'Vilnius, Lithuania',
              _react2.default.createElement('br', null),
              'Phone'
            )
          ),
          _react2.default.createElement(
            _src.MjmlColumn,
            { width: '33.33%' },
            _react2.default.createElement(
              _src.MjmlText,
              {
                align: 'center',
                color: '#838264',
                fontFamily: 'Helvetica,Ubuntu,Arial,sans-serif',
                fontSize: 12,
                lineHeight: 12 * 1.5
              },
              _react2.default.createElement(
                'div',
                null,
                'Share Via:'
              ),
              _react2.default.createElement('img', {
                height: '22px',
                hspace: '2',
                src: 'https://static.wixstatic.com/media/f84110_58f23c280d944b558a230a3ce6c0fad9~mv2.png/v1/fit/w_750,h_750/f84110_58f23c280d944b558a230a3ce6c0fad9~mv2.png',
                style: { verticalAlign: 'middle' },
                vspace: '10',
                width: '22px'
              }),
              _react2.default.createElement('img', {
                height: '22px',
                hspace: '2',
                src: 'https://static.wixstatic.com/media/f84110_45d5ed6b9b7c42b0930633253e0bae39~mv2.png/v1/fit/w_750,h_750/f84110_45d5ed6b9b7c42b0930633253e0bae39~mv2.png',
                style: { verticalAlign: 'middle' },
                vspace: '10',
                width: '22px'
              }),
              _react2.default.createElement('img', {
                height: '22px',
                hspace: '2',
                src: 'https://static.wixstatic.com/media/f84110_858b0def7bea41f698f059382badd416~mv2.png/v1/fit/w_750,h_750/f84110_858b0def7bea41f698f059382badd416~mv2.png',
                style: { verticalAlign: 'middle' },
                vspace: '10',
                width: '22px'
              })
            )
          ),
          _react2.default.createElement(
            _src.MjmlColumn,
            { width: '33.33%' },
            _react2.default.createElement(
              _src.MjmlText,
              {
                align: 'center',
                color: '#838264',
                fontFamily: 'Helvetica,Ubuntu,Arial,sans-serif',
                fontSize: 12,
                lineHeight: 12 * 1.5
              },
              'Check out my website ',
              _react2.default.createElement('img', { src: 'https://static.wixstatic.com/media/f84110_25cd91bb4305479395dc2dedce29b7ce~mv2.png/v1/fit/w_750,h_750/f84110_25cd91bb4305479395dc2dedce29b7ce~mv2.png', width: '22px', height: '22px', style: { verticalAlign: 'middle' } })
            )
          )
        ),
        _react2.default.createElement(
          _src.MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '0 40px 40px 40px'
          },
          _react2.default.createElement(
            _src.MjmlColumn,
            { backgroundColor: '#393939' },
            _react2.default.createElement(
              _src.MjmlText,
              {
                fontFamily: 'Helvetica,Ubuntu,Arial,sans-serif',
                color: '#fff',
                align: 'center',
                lineHeight: 12 * 1.5,
                fontSize: 12
              },
              'Created with Wix.com.',
              _react2.default.createElement(
                'strong',
                null,
                'Love It?'
              ),
              ' ',
              _react2.default.createElement(
                'a',
                {
                  href: 'https://www.wix.com',
                  style: {
                    color: '#fff',
                    textDecoration: 'underline'
                  }
                },
                _react2.default.createElement(
                  'strong',
                  null,
                  'Try It! It\'s Free.'
                )
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        _src.MjmlSection,
        {
          backgroundColor: '#ffffff',
          fullWidth: true,
          padding: 15
        },
        _react2.default.createElement(
          _src.MjmlColumn,
          null,
          _react2.default.createElement(
            _src.MjmlText,
            {
              align: 'center',
              color: '#9a9c9f',
              fontFamily: 'Ubuntu,Helvetica,Arial,sans-serif',
              fontSize: 10,
              lineHeight: 18,
              padding: 0
            },
            'You\'ve received this email because you are a subscriber of ',
            _react2.default.createElement(
              'a',
              {
                href: 'https://www.wix.com/',
                rel: 'noopener noreferrer',
                target: '_blank',
                style: {
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                  color: '#3899ec'
                }
              },
              'this site'
            )
          ),
          _react2.default.createElement(
            _src.MjmlText,
            {
              align: 'center',
              color: '#9a9c9f',
              fontFamily: 'Ubuntu,Helvetica,Arial,sans-serif',
              fontSize: 10,
              lineHeight: 18,
              padding: 0
            },
            'If you feel you received it by mistake or wish to unsubscribe ',
            _react2.default.createElement(
              'a',
              {
                href: 'https://www.wix.com/',
                rel: 'noopener noreferrer',
                target: '_blank',
                style: {
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                  color: '#3899ec'
                }
              },
              'click here'
            )
          )
        )
      )
    )
  ), { validationLevel: 'soft' });
};

exports.default = renderEmail;