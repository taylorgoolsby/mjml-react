import React from 'react';
import { expect } from 'chai';

import { renderToMjml } from '../src';

import { MjmlComment, MjmlConditionalComment, MjmlYahooStyle, MjmlTrackingPixel } from '../src/extensions';

describe('extensions', function () {

  describe('simple comment', function () {
    it('should render', function () {
      var comment = React.createElement(
        MjmlComment,
        null,
        'First, solve the problem. Then, write the code.'
      );
      var markup = renderToMjml(comment);
      expect(markup).to.equal('<mj-raw><!--First, solve the problem. Then, write the code.--></mj-raw>');
    });
    it('should not render if comment is empty', function () {
      expect(renderToMjml(React.createElement(MjmlComment, null))).to.equal('');
      expect(renderToMjml(React.createElement(
        MjmlComment,
        null,
        ''
      ))).to.equal('');
      expect(renderToMjml(React.createElement(
        MjmlComment,
        null,
        ' '
      ))).to.equal('');
    });
  });

  describe('conditional comment', function () {
    it('should render', function () {
      var comment = React.createElement(
        MjmlConditionalComment,
        null,
        'First, solve the problem. Then, write the code.'
      );
      var markup = renderToMjml(comment);
      expect(markup).to.equal('<mj-raw><!--[if gte mso 9]>First, solve the problem. Then, write the code.<![endif]--></mj-raw>');
    });
    it('should allow changing condition', function () {
      var comment = React.createElement(
        MjmlConditionalComment,
        { condition: 'if IE' },
        'First, solve the problem. Then, write the code.'
      );
      var markup = renderToMjml(comment);
      expect(markup).to.equal('<mj-raw><!--[if IE]>First, solve the problem. Then, write the code.<![endif]--></mj-raw>');
    });
    it('should not render if comment is empty', function () {
      expect(renderToMjml(React.createElement(MjmlConditionalComment, null))).to.equal('');
      expect(renderToMjml(React.createElement(
        MjmlConditionalComment,
        null,
        ''
      ))).to.equal('');
      expect(renderToMjml(React.createElement(
        MjmlConditionalComment,
        null,
        ' '
      ))).to.equal('');
    });
  });

  describe('yahoo style', function () {
    it('should render', function () {
      var markup = renderToMjml(React.createElement(
        MjmlYahooStyle,
        null,
        'a { color: blue; }'
      ));
      expect(markup).to.equal('<mj-raw><style>@media screen yahoo {a { color: blue; }}</style></mj-raw>');
    });
  });

  describe('tracking pixel', function () {
    it('should render 1x1 raw image with provided src', function () {
      var markup = renderToMjml(React.createElement(MjmlTrackingPixel, { src: 'tracking-pixel' }));
      expect(markup).to.equal('<mj-raw><img src="tracking-pixel" style="display:table;height:1px!important;width:1px!important;border:0!important;margin:0!important;padding:0!important" width="1" height="1" border="0"/></mj-raw>');
    });
  });
});