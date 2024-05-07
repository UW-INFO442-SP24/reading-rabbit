import React from 'react';
import { Link } from 'react-router-dom';

export function Events(props) {
    return (
        // Events page contents
        <div className="eventpage">
            {/* section introducing the events page */}
            <section className="about-container">
                <h1 className="local-events-title">
                    Find events near you!
                </h1>
                <div className="event">
                    <img src="/img/books.png" alt="Books stacked in boxes" className="book-cover" />
                </div>
            </section>

            {/* upcoming events to attend */}
            <section className="local-events">
                <div className="event-section-labels">
                    <h2 className="local-events-title">
                        Local Events
                    </h2>
                    <p className="local-event-desc">Find book events like book drives and library hosted events happening around the Seattle area!</p>
                </div>
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
                                <Link to="/find-your-library" className="btn btn-dark">Find Local Library</Link>
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
                            <h3>Free Books!</h3>
                            <p>We will be giving away free books between 10am till 3pm or when we runout. Be sure to mark your calendar we hope to see you there! There will not be a limit on how many books can be taken, take as much as you need</p>
                            <div className="keep-browsing-btn">
                                <Link to="/find-your-library" className="btn btn-dark">Library Location Here!</Link>
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
                            <h3>Community Reading</h3>
                            <p>Our community librarians will be reading to children K-5 snacks and drinks will be provided! Parents are more than welcome to checkout our free books. Bring a book and take a book for best practices</p>
                            <div className="keep-browsing-btn">
                                <Link to="/find-your-library" className="btn btn-dark">Library Location Here!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}