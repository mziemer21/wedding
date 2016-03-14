import React, { Component } from 'react';
// components
import Timeline from './components/Timeline';
import Event from './components/Event';
import SubTimeline from './components/SubTimeline';
// styles
import '../assets/styles/ourStory.css';
// images
import mainImage from '../assets/img/frontPage/collage.jpg';
import wedding from '../assets/img/frontPage/weddinggarden.jpg';
import napa from '../assets/img/frontPage/napa.jpg';
import engagementCollage from '../assets/img/frontPage/engagmentCollage.jpg';
import mGrad from '../assets/img/frontPage/mGrad.jpg';
import kGrad from '../assets/img/frontPage/kGrad.jpg';
import walter from '../assets/img/frontPage/walter.jpg';
import weLikeEachOther from '../assets/img/frontPage/whenWeLikeEachOther.jpg';
import snowboarding from '../assets/img/frontPage/snowboarding.jpg';
import concert from '../assets/img/frontPage/concert.jpg';
import meeting from '../assets/img/frontPage/meeting.jpg';

export default class OurStory extends Component {
  render() {
    return (
      <div>
        <img src={mainImage} className="img-responsive center-block" id="mainPic" alt="Beach Proposal" />
        <Timeline>
          <Event
            eventType="both"
            eventTitle="Getting Married"
            personTitle="Kaitlin & Matt"
            eventPhoto={ { src: wedding, alt: '', watermark: false } }
            eventMessage="Kaitlin and Matt are getting married next Summer in Half Moon Bay, California."
            eventTime="August 5, 2016"
          />

          <Event
            eventType="both"
            eventTitle="Celebrated Engagement"
            personTitle="Kaitlin & Matt"
            eventPhoto={ { src: napa, alt: 'Napa, CA', watermark: false } }
            eventMessage="After getting engaged in San Francisco, Kaitlin and Matt headed north to Napa Valley. They celebrated their engagement by spending a day touring wineries and vineyards."
            eventTime="October 3, 2015"
          />

          <Event
            eventType="both"
            eventTitle="Got Engaged"
            personTitle="Kaitlin & Matt"
            eventPhoto={ { src: engagementCollage, alt: 'Engagement Collage', watermark: false } }
            eventMessage="Matt proposed to Kaitlin at Baker Beach in San Francisco. Their best friend James shot the photo and brought along champagne."
            eventTime="September 26, 2015"
          />

          <Event
            eventType="both"
            eventTitle="CA Move #2"
            personTitle="Kaitlin & Matt"
            eventMessage="Kaitlin and Matt moved to Mountain View, CA to be closer to their work."
            eventTime="August 2015"
          />

          <Event
            eventType="both"
            eventTitle="Moved to Redwood City, CA"
            personTitle="Kaitlin & Matt"
            eventMessage="Kaitlin and Matt moved to Redwood City, CA in the Bay Area of San Francisco for Matt’s job as a Software Engineer at Intuit (yay Global Payroll)."
            eventTime="January 2015"
          />

          <SubTimeline>

            <Event
              eventPerson="MZ"
              eventType="event-matt"
              eventTitle="Graduation #2"
              personTitle="Matt"
              eventPhoto={ { src: mGrad, alt: 'Matt’s Graduation', watermark: false } }
              eventMessage="Matt graduated from the University of Wisconsin with a degree in Computer Science."
              eventTime="January 2015"
            />

            <Event
              eventPerson="KL"
              eventType="event-kaitlin"
              eventTitle="Graduation #1"
              personTitle="Kaitlin"
              eventPhoto={ { src: kGrad, alt: 'Kaitlin’s Graduation', watermark: false } }
              eventMessage="Kaitlin graduated from the University of Wisconsin with a degree in Nutritional Sciences."
              eventTime="January 2015"
            />

          </SubTimeline>

          <Event
            eventType="both"
            eventTitle="Adoption"
            personTitle="Kaitlin & Matt"
            eventPhoto={ { src: walter, alt: 'Walter!', watermark: false } }
            eventMessage="Kaitlin and Matt are getting married next Summer in Half Moon Bay, California."
            eventTime="January 26, 2014"
          />

          <Event
            eventType="both"
            eventTitle="Started Dating"
            personTitle="Kaitlin & Matt"
            eventPhoto={ { src: weLikeEachOther, alt: 'Started Dating', watermark: false } }
            eventMessage="After a few months of friendship, Kaitlin and Matt realized their feelings for eachother. After months of internal debate on whether or not she should share her feelings with him, Kaitlin finally told Matt. If Kaitlin would not have spoken up, who knows where they would be today."
            eventTime="September 27, 2014"
          />

          <Event
            eventType="both"
            eventTitle="Became Snowboarding Buddies"
            personTitle="Kaitlin & Matt"
            eventPhoto={ { src: snowboarding, alt: 'Matt & Kaitlin Snowboarding', watermark: false } }
            eventMessage="In 2013, Kaitlin and Matt started snowboarding with a group of friends on day trips to Tyrol Basin. The following spring, they took a trip to Colorado with a group of friends. Kaitlin and Matt have snowboarded in Colorado, Wyoming, Utah, Idaho, and California and have hopes of traveling the world to snowboard."
            eventTime="Winter 2013-2014"
          />

          <Event
            eventType="both"
            eventTitle="Became Concert Buddies"
            personTitle="Kaitlin & Matt"
            eventPhoto={ { src: concert, alt: 'Matt & Kaitlin at a concert', watermark: false } }
            eventMessage="Kaitlin and Matt discovered that they had a similar taste in music. Kaitlin and Matt have been to many concerts together such as A Day to Remember, Bring me the Horizon, Of Mice and Men, The Story So Far, Twenty-one Pilots, Skrillex, and many more."
            eventTime="April 2013"
          />

          <Event
            eventType="both"
            eventTitle="Met for the First Time"
            personTitle="Kaitlin & Matt"
            eventPhoto={ { src: meeting, alt: 'Matt & Kaitlin’s first picture together', watermark: false } }
            eventMessage="In August 2012, Kaitlin’s friend invited her to a party, which happened to be Matt’s Grand Central Apartment. Kaitlin and Matt met at this party and became very close friends from the start. This is the first picture they took together."
            eventTime="August 2012"
          />

          <SubTimeline>

            <Event
              eventPerson="MZ"
              eventType="event-matt"
              eventTitle="Moved to Madison, WI"
              personTitle="Matt"
              eventMessage="Matt transferred schools from UW-Fox Valley to UW-Madison. He chose to live with Jake, Zac, and Jon because of a Craigslist Ad. If Matt had not moved into this apartment, he would have never met Kaitlin."
              eventTime="June 2012"
            />

            <Event
              eventPerson="KL"
              eventType="event-kaitlin"
              eventTitle="Moved to Madison, WI"
              personTitle="Kaitlin"
              eventMessage="After graduating from Bradford High School, Kaitlin attended the University of Wisconsin."
              eventTime="August 2010"
            />

          </SubTimeline>
        </Timeline>
      </div>
    );
  }
}
