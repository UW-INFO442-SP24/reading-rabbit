import React from 'react';
import { Link } from 'react-router-dom';
import EventPage from './EventPage';
export function Events(props) {
    return (
        // Events page contents
        <div className="eventpage">
            {/* section introducing the events page */}
            <section className="events-title">
                <h1> Find events near you!</h1>
            </section>

            <h2 className="event-on-page-desc">Find book events like book drives and library hosted events happening around the Seattle area!</h2>

            {/* upcoming events to attend */}
            <section className="local-events">

                {/* Event 1*/}
                <div className="events-container">
                    <div className="preview-event">

                        <div className="event-cover">
                            <img src="/img/king-county-library-system-logo.png" alt="King County Library System Logo" />
                        </div>

                        <div className="event-desc-preview">
                            <h3>Family Story Time</h3>
                            <p>Stories, music, and more will be provided to support early literacy. This event will be housted on Boulevard park for children up to 7 years old. Accomodations provided upon request.</p>
                            <div className="keep-browsing-btn">
                                <Link to="/event/familyStoryTime" className="btn btn-dark">Family Story Time</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Event 2*/}
                <div className="events-container">
                    <div className="preview-event">

                        <div className="event-cover">
                            <img src="/img/stacked-books.png" alt="Animated books" />
                        </div>
                        <div className="event-desc-preview">
                            <h3>Pajama Story Time!</h3>
                            <p>Enjoy bedtime stories and songs. Wear your pajamas, bring a favorite stuffie and get snuggly at the library. </p>
                            <div className="keep-browsing-btn">
                                <Link to="/event/freeBooks" className="btn btn-dark">Free Books</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Event 2 */}
                <div className="events-container">
                    <div className="preview-event">

                        <div className="event-cover">
                            <img src="/img/girl-reading.png" alt="girl reading a purple book" />
                        </div>

                        <div className="event-desc-preview">
                            <h3>Arabic Storytime @ Lake City Branch </h3>
                            <p>At storytime, children from birth through elementary school and their families can enjoy stories, songs, and fun learning activities. Event in English and Arabic.</p>
                            <div className="keep-browsing-btn">
                                <Link to="/event/communityReading" className="btn btn-dark">Community Reading</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}