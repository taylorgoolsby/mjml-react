import React from 'react';

import { Mjml, MjmlBody, MjmlButton, MjmlColumn, MjmlDivider, MjmlFont, MjmlHead, MjmlImage, MjmlPreview, MjmlSection, MjmlSpacer, MjmlStyle, MjmlText, MjmlTitle, MjmlWrapper, render } from '../../src';

var renderEmail = function renderEmail() {
  return render(React.createElement(
    Mjml,
    null,
    React.createElement(
      MjmlHead,
      null,
      React.createElement(
        MjmlTitle,
        null,
        'Do not take life too seriously. You will never get out of it alive.'
      ),
      React.createElement(
        MjmlPreview,
        null,
        'Do not take life too seriously. You will never get out of it alive.'
      ),
      React.createElement(MjmlFont, {
        name: 'Montserrat',
        href: 'https://fonts.googleapis.com/css?family=Montserrat'
      }),
      React.createElement(MjmlFont, {
        name: 'Roboto',
        href: 'https://fonts.googleapis.com/css?family=Roboto'
      }),
      React.createElement(
        MjmlStyle,
        null,
        '\n        * {\n          \'-webkit-font-smoothing\': antialiased;\n        }\n        @media only screen and (max-width:480px) {\n          .font-size-40-in-mobile div {\n            font-size: 40px !important;\n          }\n          .button table {\n            width: 100% !important;\n          }\n        }'
      )
    ),
    React.createElement(
      MjmlBody,
      {
        backgroundColor: '#fff',
        width: 700
      },
      React.createElement(
        MjmlSection,
        {
          backgroundColor: '#ffffff',
          fullWidth: true,
          padding: 15
        },
        React.createElement(
          MjmlColumn,
          null,
          React.createElement(
            MjmlText,
            {
              align: 'center',
              color: '#9a9c9f',
              fontFamily: 'Helvetica,Ubuntu,Arial,sans-serif',
              fontSize: 10,
              lineHeight: 18,
              padding: 0
            },
            'Can\'t see this Message? ',
            React.createElement(
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
      React.createElement(
        MjmlWrapper,
        {
          backgroundColor: '#222C2C',
          backgroundRepeat: 'no-repeat',
          backgroundUrl: 'https://static.wixstatic.com/media/f84110_61c47c7d1fe3468cb8a4fdf46f141c6b~mv2.png',
          fullWidth: true,
          padding: 15
        },
        React.createElement(
          MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          React.createElement(
            MjmlColumn,
            null,
            React.createElement(MjmlImage, {
              height: 64,
              padding: 0,
              src: 'https://static.wixstatic.com/media/a306cb_c61667d7fdba400a8d8371f65e95b704.png',
              width: 64
            })
          )
        ),
        React.createElement(
          MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          React.createElement(
            MjmlColumn,
            null,
            React.createElement(
              MjmlText,
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
        React.createElement(
          MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          React.createElement(
            MjmlColumn,
            null,
            React.createElement(
              MjmlText,
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
        React.createElement(
          MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          React.createElement(
            MjmlColumn,
            null,
            React.createElement(
              MjmlButton,
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
        React.createElement(
          MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 0px 0px 0px'
          },
          React.createElement(
            MjmlColumn,
            null,
            React.createElement(MjmlImage, {
              padding: 0,
              src: 'https://static.wixstatic.com/media/a306cb_3208991023294d7c8412aada717f100f~mv2.png/v1/fit/w_700,h_2000,al_c,q_85/image.jpg'
            })
          )
        ),
        React.createElement(
          MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          React.createElement(
            MjmlColumn,
            null,
            React.createElement(
              MjmlText,
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
        React.createElement(
          MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          React.createElement(
            MjmlColumn,
            null,
            React.createElement(
              MjmlButton,
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
        React.createElement(
          MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          React.createElement(
            MjmlColumn,
            null,
            React.createElement(
              MjmlText,
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
        React.createElement(
          MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          React.createElement(
            MjmlColumn,
            { width: '50%' },
            React.createElement(
              MjmlText,
              {
                align: 'center',
                color: '#4a4a4a',
                fontFamily: 'Helvetica,Ubuntu,Arial,sans-serif',
                fontSize: 16,
                lineHeight: 16 * 1.5
              },
              'Engage your audience. Use lively images and catchy text to grab people\u2019s attention and get them clicking.'
            ),
            React.createElement(MjmlSpacer, { height: 20 }),
            React.createElement(
              MjmlButton,
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
          React.createElement(
            MjmlColumn,
            { width: '50%' },
            React.createElement(MjmlImage, {
              src: 'https://static.wixstatic.com/media/eceb8e_2518dbff872b4241b39884a4817887ac~mv2.jpg/v1/fit/w_700,h_2000,al_c,q_85/image.jpg'
            })
          )
        ),
        React.createElement(
          MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          React.createElement(
            MjmlColumn,
            { width: '50%' },
            React.createElement(MjmlImage, {
              src: 'https://static.wixstatic.com/media/eceb8e_17e61c888e5e470cb518910f7d9992e8~mv2.png/v1/fit/w_700,h_2000,al_c,q_85/image.jpg'
            })
          ),
          React.createElement(
            MjmlColumn,
            { width: '50%' },
            React.createElement(
              MjmlText,
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
            React.createElement(MjmlSpacer, { height: 20 }),
            React.createElement(
              MjmlButton,
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
        React.createElement(
          MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          React.createElement(
            MjmlColumn,
            null,
            React.createElement(MjmlDivider, {
              borderWidth: 1,
              borderColor: '#C9C9C9',
              padding: 0
            })
          )
        ),
        React.createElement(
          MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '40px 40px 0px 40px'
          },
          React.createElement(
            MjmlColumn,
            { width: '33.33%' },
            React.createElement(
              MjmlText,
              {
                align: 'center',
                color: '#838264',
                fontFamily: 'Helvetica,Ubuntu,Arial,sans-serif',
                fontSize: 12,
                lineHeight: 12 * 1.5
              },
              'Vilnius, Lithuania',
              React.createElement('br', null),
              'Phone'
            )
          ),
          React.createElement(
            MjmlColumn,
            { width: '33.33%' },
            React.createElement(
              MjmlText,
              {
                align: 'center',
                color: '#838264',
                fontFamily: 'Helvetica,Ubuntu,Arial,sans-serif',
                fontSize: 12,
                lineHeight: 12 * 1.5
              },
              React.createElement(
                'div',
                null,
                'Share Via:'
              ),
              React.createElement('img', {
                height: '22px',
                hspace: '2',
                src: 'https://static.wixstatic.com/media/f84110_58f23c280d944b558a230a3ce6c0fad9~mv2.png/v1/fit/w_750,h_750/f84110_58f23c280d944b558a230a3ce6c0fad9~mv2.png',
                style: { verticalAlign: 'middle' },
                vspace: '10',
                width: '22px'
              }),
              React.createElement('img', {
                height: '22px',
                hspace: '2',
                src: 'https://static.wixstatic.com/media/f84110_45d5ed6b9b7c42b0930633253e0bae39~mv2.png/v1/fit/w_750,h_750/f84110_45d5ed6b9b7c42b0930633253e0bae39~mv2.png',
                style: { verticalAlign: 'middle' },
                vspace: '10',
                width: '22px'
              }),
              React.createElement('img', {
                height: '22px',
                hspace: '2',
                src: 'https://static.wixstatic.com/media/f84110_858b0def7bea41f698f059382badd416~mv2.png/v1/fit/w_750,h_750/f84110_858b0def7bea41f698f059382badd416~mv2.png',
                style: { verticalAlign: 'middle' },
                vspace: '10',
                width: '22px'
              })
            )
          ),
          React.createElement(
            MjmlColumn,
            { width: '33.33%' },
            React.createElement(
              MjmlText,
              {
                align: 'center',
                color: '#838264',
                fontFamily: 'Helvetica,Ubuntu,Arial,sans-serif',
                fontSize: 12,
                lineHeight: 12 * 1.5
              },
              'Check out my website ',
              React.createElement('img', { src: 'https://static.wixstatic.com/media/f84110_25cd91bb4305479395dc2dedce29b7ce~mv2.png/v1/fit/w_750,h_750/f84110_25cd91bb4305479395dc2dedce29b7ce~mv2.png', width: '22px', height: '22px', style: { verticalAlign: 'middle' } })
            )
          )
        ),
        React.createElement(
          MjmlSection,
          {
            backgroundColor: '#fff',
            padding: '0 40px 40px 40px'
          },
          React.createElement(
            MjmlColumn,
            { backgroundColor: '#393939' },
            React.createElement(
              MjmlText,
              {
                fontFamily: 'Helvetica,Ubuntu,Arial,sans-serif',
                color: '#fff',
                align: 'center',
                lineHeight: 12 * 1.5,
                fontSize: 12
              },
              'Created with Wix.com.',
              React.createElement(
                'strong',
                null,
                'Love It?'
              ),
              ' ',
              React.createElement(
                'a',
                {
                  href: 'https://www.wix.com',
                  style: {
                    color: '#fff',
                    textDecoration: 'underline'
                  }
                },
                React.createElement(
                  'strong',
                  null,
                  'Try It! It\'s Free.'
                )
              )
            )
          )
        )
      ),
      React.createElement(
        MjmlSection,
        {
          backgroundColor: '#ffffff',
          fullWidth: true,
          padding: 15
        },
        React.createElement(
          MjmlColumn,
          null,
          React.createElement(
            MjmlText,
            {
              align: 'center',
              color: '#9a9c9f',
              fontFamily: 'Ubuntu,Helvetica,Arial,sans-serif',
              fontSize: 10,
              lineHeight: 18,
              padding: 0
            },
            'You\'ve received this email because you are a subscriber of ',
            React.createElement(
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
          React.createElement(
            MjmlText,
            {
              align: 'center',
              color: '#9a9c9f',
              fontFamily: 'Ubuntu,Helvetica,Arial,sans-serif',
              fontSize: 10,
              lineHeight: 18,
              padding: 0
            },
            'If you feel you received it by mistake or wish to unsubscribe ',
            React.createElement(
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

export default renderEmail;