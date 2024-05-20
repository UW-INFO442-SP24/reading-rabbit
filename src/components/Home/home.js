import React from 'react';
import { Link } from 'react-router-dom';

export function Home(props) {
    return (
        // homepage contents
        <div className="homepage">
            {/* section summarizing Reading Rabbit objectives */}
            <section className="about-container">
                <h1 className="homepage-title">
                    Affordability & Awareness
                </h1>
                <img src="/img/home-rabbit.jpeg" alt="Blue rabbit reading a red book with a thought bubble" />
                <p className="homepage-description">
                    <br/> Find free PDF books, local libraries, and events here! <br/><br/>
                    Reading Rabbit is dedicated to improving accessibility to reading materials for children grades K-5 in Seattle, Washington.
                </p>
            </section>

            {/* section displaying a small set of books we recommend to download */}
            <section className="our-fav-books">
                <h2 className="fav-books-title">
                    Popular Reads
                </h2>
                <div className="fav-books-container">
                    <div className="fav-book">
                        <img src="/img/dog-on-a-log.png" alt="Cover Art for the Book A Dog On A Log" className="book-cover" />
                        <div className="fav-book-desc">
                            <h3>A Dog on a Log</h3>
                            <p>A family discovers a dog is floating by the ocean shore.</p>
                            <a href="/books">View this book</a>
                        </div>
                    </div>
                    <div className="fav-book">
                        <img src="/img/three-little-pigs.png" alt="The Three Little Pigs Book Cover" className="book-cover" />
                        <div className="fav-book-desc">
                            <h3>The Three Little Pigs</h3>
                            <p>A classic story about a family of pigs and a mean wolf</p>
                            <a href="/books">View this book</a>
                        </div>
                    </div>
                    <div className="fav-book">
                        <img src="/img/the-hike.png" alt="The Hike Book Cover" className="book-cover" />
                        <div className="fav-book-desc">
                            <h3>The Hike</h3>
                            <p>Mandy explores nature with her Grandpa.</p>
                            <a href="/books">View this book</a>
                        </div>
                    </div>
                </div>
                <div className="keep-browsing-btn">
                    <Link to="/books" className="btn btn-dark">Keep Browsing</Link>
                </div>
            </section>

            {/* section previewing a small set of upcoming events to attend */}
            <section className="local-events">
                <div className="event-section-labels">
                    <h2 className="local-events-title">
                        Local Events
                    </h2>
                    <p className="local-event-desc">Find book events like book drives and library hosted events happening around the Seattle area!</p>
                </div>

                <div className="events-container">
                    <div className="preview-event">
                        
                        <div className="event-cover">
                            <img src="/img/king-county-library-system-logo.png" alt="King County Library System Logo" />
                        </div>

                        <div className="event-desc-preview">
                            <h3>Family Story Time</h3>
                            <p>Stories, music, and more will be provided to support early literacy. This event will be housted on Boulevard park for children up to 7 years old. Accomodations provided upon request.</p>
                            <a href="/events">View this event</a>
                        </div>
                    </div>
                    
                    <div className="preview-event">
                        
                        <div className="event-cover">
                            <img src="/img/the-seattle-public-library.png" alt="The Seattle Public Library Logo" />
                        </div>

                        <div className="event-desc-preview">
                            <h3>Arabic Story Time</h3>
                            <p>At storytime, children from birth through elementary school and their families can enjoy stories, songs, and fun learning activities. Event in English and Arabic.</p>
                            <a href="/events">View this event</a>
                        </div>
                    </div>

                    <div className="keep-browsing-btn">
                        <Link to="/events" className="btn btn-dark">View More</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}