import React, { Component } from 'react';
import { Grid, Row, Col, Input, ButtonInput, Alert } from 'react-bootstrap';
import RsvpForm from './components/RsvpForm';
import _ from 'lodash';
import data from '../data';

export default class Rsvp extends Component {
  constructor() {
    super();
    this.renderRsvpForm = false; // not stored in state because we do not want to cause a re-render when changed
    this.state = {
      invitees: [],
      error: ''
    };
  }

  // correctly submit form if enter is pressed
  onKeyPress(event) {
    if (event.which === 13) {
      event.preventDefault();
      this.handleSubmit(event);
    }
  }

  // find guests from data set, if not found show error
  getInvite(address) {
    const people = _.filter(data, { address: Number(address) });
    if (people.length < 1) {
      this.setState({ error: 'Sorry, we could not find you.  Please check that your street number is correct.' });
    }
    return people;
  }

  /*
  * show error if something other than a number is entered
  * else clear out previous error if there was one showing
  */
  isNumberKey(event) {
    const invalidEntryErrorMessage = 'Please enter only numbers.';
    if (!/^\d*$/.test(event.target.value)) {
      this.setState({ error: invalidEntryErrorMessage });
    } else if (this.state.error === invalidEntryErrorMessage) {
      this.setState({ error: '' });
    }
  }

  /*
  * handler for start button
  * collect address info and try to find guests
  * if guests found set state to render the rsvp form
  * else show error
  */
  handleSubmit(event) {
    event.preventDefault();
    const address = event.target.form.querySelector('input').value;
    if (address) {
      const invitee = this.getInvite(address);
      if (invitee) {
        this.renderRsvpForm = true;
        this.setState({ invitees: invitee });
      }
    } else {
      this.setState({ error: 'Please enter your street number' });
    }
  }

  render() {
    // override browser back buttton with react re-render
    window.onpopstate = () => {
      this.forceUpdate();
    };

    // if there is an error, display it in an alert
    const alertError = this.state.error.length > 0 ? (
         <Alert bsStyle="danger">
           { this.state.error }
         </Alert>
    ) : null;

    /*
    * Couldn't find a way to easily pass props in react-router without exposing them in the url.
    * Instead I am conditinally rendering forms based off renderRsvpForm and passing props normally.
    * if we found guests & we want to show the rsvp form, render the rsvp form
    * else render the find me form
    */
    const form = this.state.invitees.length > 0 && this.renderRsvpForm ? <RsvpForm invitees={this.state.invitees} /> : (
      <div>
          <Input label="Type the street number as it appears on your envelope
            (Ex: 123 Main St = 123)" type="text" placeholder="123" onInput={(e) => this.isNumberKey(e)} onKeyPress={(e) => this.onKeyPress(e)}
          />
          { alertError }
          <ButtonInput bsStyle="primary" block onClick={(e) => this.handleSubmit(e)}>Start</ButtonInput>
      </div>
    );

    /*
    * Work around for browser back button.
    * if we found people and we are rendering the rsvp form
    * set renderRsvpForm to false and add rsvp route to the browser history so
    * if the back button is pressed we will re-render this component and show the find me form
    */
    if (this.state.invitees.length > 0 && this.renderRsvpForm) {
      this.renderRsvpForm = false;
      history.pushState({}, 'RSVP Form', 'rsvp');
    }

    return (
      <Grid>
        <Row>
          <Col xs={12} sm={8} md={4} style={ { float: 'none', margin: '0 auto' } } >
            <form>
              { form }
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
