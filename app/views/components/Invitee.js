import React, { Component } from 'react';
import { Collapse, Well, Input } from 'react-bootstrap';

export default class Rsvp extends Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    plusOneOption: React.PropTypes.bool.isRequired
  };

  constructor() {
    super();
    this.state = {
      plusOne: false,
      disabled: true
    };
  }

  render() {
    // if guest is allowed a plus one, show this this additional form
    const plusOneComponent = this.props.plusOneOption ? (
      <div>
        <Input type="checkbox" label="I am bringing a +1" onChange={ () => this.setState({ plusOne: !this.state.plusOne }) } disabled={this.state.disabled} />
        <Collapse in={!this.state.disabled && this.state.plusOne}>
          <Well>
            <Input required type="text" placeholder="Guest's First Name" disabled={this.state.disabled && this.state.plusOne} />
            <Input required type="text" placeholder="Guest's Last Name" disabled={this.state.disabled && this.state.plusOne} />
            <Input required type="select" defaultValue="" disabled={this.state.disabled && this.state.plusOne}>
              <option disabled value="">Guest's Meal Option</option>
              <option value="beef">Beef</option>
              <option value="chicken">Chicken</option>
              <option value="veggie">Veggie</option>
            </Input>
          </Well>
        </Collapse>
      </div>
    ) : null;

    return (
      <div>
        <hr style={ { borderTop: '2px solid #ccc' } } />
        <Input required label={this.props.name} type="select" defaultValue="" onChange={ (event) => this.setState({ disabled: event.target.value !== 'yes' }) }>
          <option disabled value="">Will you attend?</option>
          <option value="yes">Wouldn't miss it!</option>
          <option value="no">I will be there in spirit</option>
        </Input>
        <Collapse in={!this.state.disabled}>
          <div>
            <Input required type="select" defaultValue="" disabled={this.state.disabled}>
              <option disabled value="">Meal Option</option>
              <option value="beef">Beef</option>
              <option value="chicken">Chicken</option>
              <option value="veggie">Veggie</option>
            </Input>
            {plusOneComponent}
          </div>
        </Collapse>
      </div>
    );
  }
}
