"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _diff = _interopRequireDefault(require("diff"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fnMap = {
  'chars': _diff.default.diffChars,
  'words': _diff.default.diffWords,
  'sentences': _diff.default.diffSentences,
  'json': _diff.default.diffJson
};

var Diff =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Diff, _React$Component);

  function Diff() {
    _classCallCheck(this, Diff);

    return _possibleConstructorReturn(this, _getPrototypeOf(Diff).apply(this, arguments));
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
        return _react.default.createElement("span", {
          className: spanClass,
          key: index,
          style: spanStyle
        }, part.value);
      });
      return _react.default.createElement("pre", {
        className: "diff-result"
      }, result);
    }
  }]);

  return Diff;
}(_react.default.Component);

exports.default = Diff;

_defineProperty(Diff, "defaultProps", {
  inputA: '',
  inputB: '',
  type: 'chars'
});

_defineProperty(Diff, "propTypes", {
  inputA: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  inputB: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  type: _propTypes.default.oneOf(['chars', 'words', 'sentences', 'json'])
});
