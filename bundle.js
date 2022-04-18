'use strict';

var marked = require('marked');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var marked__default = /*#__PURE__*/_interopDefaultLegacy(marked);

const mdToJs = str => {
  const content = JSON.stringify(marked__default["default"](str));
  return `export default ${content}`
};
const fileRegex = /\.md$/;
function md() {
  return {
    transform(raw, id) {
      if(fileRegex.test(id)) {
        return mdToJs(raw)
      }
    },
  }
}

module.exports = md;
