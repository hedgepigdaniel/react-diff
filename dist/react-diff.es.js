function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import jsdiff from 'diff';
var fnMap = {
  'chars': jsdiff.diffChars,
  'words': jsdiff.diffWords,
  'sentences': jsdiff.diffSentences,
  'json': jsdiff.diffJson
};

var Diff =
/*#__PURE__*/
function () {
  function Diff() {
    _classCallCheck(this, Diff);
  }

  _createClass(Diff, [{
    key: "render",
    value: function render() {
      var diff = fnMap[this.props.type](this.props.inputA, this.props.inputB);
      var result = diff.map(function (part, index) {
        var spanClass = part.added ? 'diff-added' : part.removed ? 'diff-removed' : 'diff-default';
        var spanStyle = {
          backgroundColor: part.added ? 'lightgreen' : part.removed ? 'salmon' : 'lightgrey'
        };
        return React.createElement("span", {
          className: spanClass,
          key: index,
          style: spanStyle
        }, part.value);
      });
      return React.createElement("pre", {
        className: "diff-result"
      }, result);
    }
  }]);

  return Diff;
}();

_defineProperty(Diff, "defaultProps", {
  inputA: '',
  inputB: '',
  type: 'chars'
});

_defineProperty(Diff, "propTypes", {
  inputA: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  inputB: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.oneOf(['chars', 'words', 'sentences', 'json'])
});

export { Diff as default };
