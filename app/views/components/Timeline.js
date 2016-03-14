import React from 'react';
export default class Timeline extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
      React.PropTypes.node.isRequired
    ])
  };

  render() {
    return (
      <ol className="timeline l-grid">
        {this.props.children}
      </ol>
    );
  }
}

