import React from 'react';

export default class Event extends React.Component {
  static propTypes = {
    eventType: React.PropTypes.string.isRequired,
    eventTitle: React.PropTypes.string.isRequired,
    personTitle: React.PropTypes.string.isRequired,
    eventPerson: React.PropTypes.string,
    eventPhoto: React.PropTypes.object,
    eventMessage: React.PropTypes.string.isRequired,
    eventTime: React.PropTypes.string.isRequired
  };

  render() {
    const eventPerson = this.props.eventPerson ? this.props.eventPerson :
      <span>K<span className="l-inline event-person-sep">&amp;</span>M</span>;

    return (
      <li className={`event l-grid-u text-center ${this.props.eventType}`}>
      <h2 className="event-header l-grid">
      <span className="event-title l-grid-u">{this.props.eventTitle}</span>

      <b className="event-person l-grid-u" title={this.props.personTitle}>
        {eventPerson}
      </b>
      </h2>
        {
          this.props.eventPhoto ?
            <div className="event-photo">
              <img
                src={this.props.eventPhoto.src}
                alt={this.props.eventPhoto.alt}
                className="img-responsive center-block img-rounded"
                style={ { maxHeight: '300px' } }
              /> {/* maybe need 300px/400px both/single*/}
              {this.props.eventPhoto.watermark && <a className="event-photo-credit" href="#">Kirsti Edwards Photography</a>}
            </div>
            : ''
        }
        <p>{this.props.eventMessage}</p>
        <p className="event-time">{this.props.eventTime}</p>
        </li>
      );
  }
}

