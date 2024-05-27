import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './EventPage.css';

const eventDetails = {
  familyStoryTime: {
    title: "Family Story Time",
    description: "Stories, music, and more will be provided to support early literacy. This event will be hosted at the Boulevard Park library for children up to 7 years old. Accomodations provided upon request.",
    address: "12015 Roseberg Avenue S 98168",
    time: "Saturday June 1st 2024 11am-11:45am"
  },
  freeBooks: {
    title: "Pajama Story Time",
    description: "Enjoy bedtime stories and songs. Wear your pajamas, bring a favorite stuffie and get snuggly at the library. ",
    address: "1409 SW 107th Street, Seattle WA 98146",
    time: "Wednesday June 12th 7pm-7:30pm"
  },
  communityReading: {
    title: "Preschool Storytime",
    description: "At storytime, children from birth through elementary school and their families can enjoy stories, songs, and fun learning activities. Event in English and Arabic.",
    address: "15009 Roosevelt Way NE, Seattle, WA 98105",
    time: "Saturday June 6th 11am-11:30am"
  }
};

function EventPage() {
  const { eventType } = useParams();
  const event = eventDetails[eventType] || eventDetails.familyStoryTime;

  return (
    <div className="back-event-btn"><Link to="/events" className="btn btn-dark">Back to Events</Link>
      <div className="event-page">


        <img src="../img/family-story-time.png" alt="Event" className="event-image" />
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        <p><strong>Address:</strong> {event.address}</p>
        <p><strong>When:</strong> {event.time}</p>
      </div></div>
  );
}

export default EventPage;
