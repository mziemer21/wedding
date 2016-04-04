/* eslint arrow-body-style: [0] */
import React, { Component } from 'react';
import { Input, ButtonInput } from 'react-bootstrap';
import Invitee from './Invitee';

export default class Rsvp extends Component {

  static propTypes = {
    invitees: React.PropTypes.array
  };

  // TODO: add this method
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    // create form entries for each guest
    const inviteeForms = this.props.invitees.map((person) => {
      return (<Invitee
        key={`${person.firstName}${person.address}${person.lastName}`}
        name={`${person.firstName} ${person.lastName}`}
        plusOneOption={person.plusOneOption}
      />);
    });

    return (
      <div>
        <Input required type="text" label="Email Address" placeholder="Where should we send your confimation email?" />
        { inviteeForms }
        <ButtonInput type="submit" value="Submit Your RSVP" bsStyle="primary" block onClick={(e) => this.handleSubmit(e)} />
      </div>
    );
  }
}
