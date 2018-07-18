var React = require('react');
var PropTypes = require('prop-types');
var CreateReactClass = require('create-react-class');
var jsdiff = require('diff');

var fnMap = {
  'chars': jsdiff.diffChars,
  'words': jsdiff.diffWords,
  'sentences': jsdiff.diffSentences,
  'json': jsdiff.diffJson
};

module.exports = CreateReactClass({
  displayName: 'Diff',

  getDefaultProps: function() {
    return {
      inputA: '',
      inputB: '',
      type: 'chars'
    };
  },

  propTypes: {
    inputA: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    inputB: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    type: PropTypes.oneOf([
      'chars',
      'words',
      'sentences',
      'json'
    ])
  },

  render: function () {
    var diff = fnMap[this.props.type](this.props.inputA, this.props.inputB);
    var result = diff.map(function(part, index) {
      var spanClass = part.added ? 'diff-added' : part.removed ? 'diff-removed' : 'diff-default';
      var spanStyle = {
        backgroundColor: part.added ? 'lightgreen' : part.removed ? 'salmon' : 'lightgrey'
      };
      return <span className={spanClass} key={index} style={spanStyle}>{part.value}</span>
    });
    return (
      <pre className='diff-result'>
        {result}
      </pre>
    );
  },
});
