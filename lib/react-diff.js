import React from 'react';
import PropTypes from 'prop-types';
import jsdiff from 'diff';

const fnMap = {
  'chars': jsdiff.diffChars,
  'words': jsdiff.diffWords,
  'sentences': jsdiff.diffSentences,
  'json': jsdiff.diffJson
};

export default class Diff extends React.Component {

  static defaultProps = {
    inputA: '',
    inputB: '',
    type: 'chars'
  };

  static propTypes = {
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
  };

  render() {
    const diff = fnMap[this.props.type](this.props.inputA, this.props.inputB);
    const result = diff.map((part, index) => {
      const spanClass = part.added ? 'diff-added' : part.removed ? 'diff-removed' : 'diff-default';
      const spanStyle = {
        backgroundColor: part.added ? 'lightgreen' : part.removed ? 'salmon' : 'lightgrey'
      };
      return <span className={spanClass} key={index} style={spanStyle}>{part.value}</span>;
    });
    return (
      <pre className='diff-result'>
        {result}
      </pre>
    );
  }
}
