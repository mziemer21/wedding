import React, { Component } from 'react';
import { Grid, Row, Col, Modal, Button } from 'react-bootstrap';
// images
import heart from '../assets/img/glyphicons/glyphicons_012_heart_b.png';
import bell from '../assets/img/glyphicons/glyphicons_333_bell_b.png';
import cake from '../assets/img/glyphicons/glyphicons_272_cake_b.png';
import beer from '../assets/img/glyphicons/glyphicons_274_beer_b.png';
import piano from '../assets/img/glyphicons/glyphicons_328_piano_b.png';
import airplane from '../assets/img/glyphicons/glyphicons_038_airplane_b.png';
import sun from '../assets/img/glyphicons/glyphicons_231_sun_b.png';
import fire from '../assets/img/glyphicons/glyphicons_022_fire_b.png';
import suitcase from '../assets/img/glyphicons/glyphicons_357_suitcase_b.png';

export default class Wedding extends Component {

  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <Grid>
			<Row>
				<Col sm={4}>
					<h3>
						<img src={heart} alt="Icon" />
						When & Where
					</h3>
					<p>Our big day is on Friday, August 5th 2016 in Half Moon Bay, California. The ceremony will begin 4pm in the gardens of the Oceano Hotel and Spa, cocktail hour will follow, and the reception will take place in the Gatehouse next to the gardens.</p>
				</Col>
				<Col sm={4}>
					<h3>
						<img src={bell} alt="Icon" />
						Ceremony
					</h3>
					<p>Our ceremony will start promptly at 4:00 pm. Sunglasses and sunscreen are advised as the ceremony will be near the Pacific Ocean.</p>
				</Col>
				<Col sm={4}>
					<h3>
						<img src={cake} alt="Icon" />
						Reception
					</h3>
					<p>The reception will follow cocktail hour. The reception venue is booked until 11pm. We may go to nearby bars following the reception.</p>
				</Col>
			</Row>
			<Row>
				<Col sm={4}>
					<h3>
						<img src={beer} alt="Icon" />
						Food & Drink
					</h3>
					<p>Cocktail hour will follow the ceremony where hors d'oeuvres, beer, and wine will be served. We will have a seated dinner (menus will be sent with the invitations). Cash bar will be provided with a signature bride and groom drink.</p>
				</Col>
				<Col sm={4}>
					<h3>
						<img src={piano} alt="Icon" />
						Live Music
					</h3>
					<p>A String Trio will be performing at the ceremony and cocktail hour. A DJ will be at the reception.</p>
				</Col>
				<Col sm={4}>
					<h3>
						<img src={airplane} alt="Icon" />
						Travel Info
					</h3>
					<p>If you will be flying from out of state, SFO & SJC are the nearest airports.  Once you land there are many<a onClick={() => this.open()}> options</a> to get you to your <a href="https://www.google.com/maps/d/edit?mid=zAvDyE98WIgM.kr-wK2DRr-Fo&usp=sharing" target="_blank">destination</a>. However, if you choose to drive, ample parking is provided at the venue. </p>

					<Modal show={this.state.showModal} onHide={() => this.close()}>
						<Modal.Header closeButton>
							<Modal.Title>Driving Options</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<p>If you would like to get a rental car from <a href="https://www.hertz.com/rentacar/reservation/" target="_blank">Hertz</a>, use CDP #77694 to get 25% off.</p>
							<p>Alternativly if you don't want to drive, <a href="https://www.lyft.com/" target="_blank">Lyft</a> and <a href="https://www.uber.com/" target="_blank">Uber</a> are very popular in the bay area (and cheaper than a taxi).  You can use lyft code MATTHEW930848, or Uber code 8vxu5 for $20.</p>
							<div className="embed-responsive embed-responsive-4by3">
								<iframe src="https://www.google.com/maps/d/embed?mid=zAvDyE98WIgM.kr-wK2DRr-Fo" className="embed-responsive-item"></iframe>
							</div>
						</Modal.Body>
                        <Modal.Footer>
							<Button onClick={() => this.close()}>Close</Button>
                        </Modal.Footer>
                    </Modal>
				</Col>
			</Row>
			<Row>
				<Col sm={4}>
					<h3>
						<img src={sun} alt="Icon" />
						Weather Forcast
					</h3>
					<p>The weather in Half Moon Bay is generally sunny and in the 70s. Please check the <a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?query=pws:KCAHALFM22" target="_blank">local forecast</a> before leaving.</p>
				</Col>
				<Col sm={4}>
					<h3>
						<img src={fire} alt="Icon" />
						Before & After
					</h3>
					<p>We highly recommend exploring Half Moon Bay and Pacifica. If you have time, San Francisco and Napa are great adventures as well. Yosemite is ~3.5 hours away. If enough people show interest, Kaitlin can book a Napa wine tour for everyone. A shuttle would pick us up at the Oceano Hotel. </p>
				</Col>
				<Col sm={4}>
					<h3>
						<img src={suitcase} alt="Icon" />
						Stay With Us
					</h3>
					<p>We will be staying at the hotel and would love for you to join us. We have blocked off many rooms at our venue. Please call the <a href="http://www.oceanohalfmoonbay.com/" target="_blank">Oceano</a> and ask for the Leary Ziemer wedding. You will receive a discount by doing so. Alternatively, there are many <a href="http://www.kayak.com/hotels/Half-Moon-Bay,CA-c12087/2016-08-04/2016-08-07/2guests" target="_blank">hotels</a> and <a href="https://www.airbnb.com/s/Half-Moon-Bay--CA?checkin=08%2F04%2F2016&checkout=08%2F07%2F2016&guests=2&ss_id=80pw7km9" target="_blank">Airbnbs</a> nearby.</p>
				</Col>
			</Row>
		</Grid>
    );
  }
}
