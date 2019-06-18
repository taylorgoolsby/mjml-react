"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fixConditionalComment = fixConditionalComment;
function fixConditionalComment(html, havingContent, newCondition) {
  var comments = /<!(--([^-]|[\r\n]|-[^-])*--[ \r\n\t]*)>/g;
  var conditionals = /<!--\[if.+?\]/;
  return html.replace(comments, function (match) {
    if (match.includes(havingContent)) {
      return match.replace(conditionals, "<!--[" + newCondition + "]");
    }
    return match;
  });
}