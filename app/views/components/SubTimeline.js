import React from 'react';
export default class SubTimeline extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
      React.PropTypes.node.isRequired
    ])
  };

  render() {
    return (
      <li className="timeline-events text-center">
        <ol className="l-grid">
          {this.props.children}
        </ol>
      </li>
    );
  }
}

