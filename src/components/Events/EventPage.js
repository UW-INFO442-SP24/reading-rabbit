import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './EventPage.css'; 

const eventDetails = {
  familyStoryTime: {
    title: "Family Story Time",
    description: "Join us for a fun family story time at the library! Enjoy a selection of books perfect for kids.",
    address: "1234 Family Lane, Seattle, WA 98101",
    time: "10:00 AM - 11:30 AM"
  },
  freeBooks: {
    title: "Free Books Distribution",
    description: "Stop by to pick up free books for all age groups! Donations welcome.",
    address: "5678 Book Blvd, Seattle, WA 98101",
    time: "1:00 PM - 5:00 PM"
  },
  communityReading: {
    title: "Community Reading Event",
    description: "Gather with community members for an afternoon of reading and discussion.",
    address: "91011 Community Rd, Seattle, WA 98101",
    time: "3:00 PM - 6:00 PM"
  }
};

function EventPage() {
  const { eventType } = useParams();
  const event = eventDetails[eventType] || eventDetails.familyStoryTime;

  return (
    <div className="back-event-btn"><Link to="/events" className="btn btn-dark">Back to Events</Link>
    <div className="event-page">
    

      <img src="../img/library.jpg" alt="Event" className="event-image"/>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p><strong>Address:</strong> {event.address}</p>
      <p><strong>When:</strong> {event.time}</p>
    </div></div>
  );
}

export default EventPage;
