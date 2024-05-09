import React from 'react';
import { SingleBook } from './singlebook';
import { Link } from 'react-router-dom';

export function Books(props) {
    return (
        // books page content
        <div className="bookpage">
            {/* section summarizing Reading Rabbit objectives */}
            <section className="books-container">
                <h1 className="books-title">
                    Free Reads
                </h1>
            </section>


            <section>
                <div class="filter-container">
                    <h2 class="genre-filter">
                        Filter By Genre:
                    </h2>
                    <select id="genreFilter">
                        <option value="all">All Genres</option>
                        <option value="fiction">Fiction</option>
                        <option value="nonfiction">Non-Fiction</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="mystery">Mystery</option>
                    </select>
                </div>
            </section>

            <section className="our-books">
                <div className="books-container">
                    <div className="fav-book" value="fiction">
                        <img src="/img/dog-on-a-log.png" alt="Cover Art for the Book A Dog On A Log" className="book-cover" />
                        <div className="fav-book-desc" value="fiction">
                            <h3>A Dog on a Log 1</h3>
                            <p>A family discovers a dog is floating by the ocean shore.</p>
                            <a href="/singlebook">View this book</a>
                        </div>
                    </div>
                    <div className="fav-book" value="nonfiction">
                        <img src="/img/dog-on-a-log.png" alt="Dog On A Log Book Cover" className="book-cover" />
                        <div className="fav-book-desc">
                            <h3>A Dog on a Log 2</h3>
                            <p>A family discovers a dog is floating by the ocean shore.</p>
                            <a href="/singlebook">View this book</a>
                        </div>
                    </div>
                    <div className="fav-book" value="fantasy">
                        <img src="/img/dog-on-a-log.png" alt="Dog On A Log Book Cover" className="book-cover" />
                        <div className="fav-book-desc">
                            <h3>A Dog on a Log 3</h3>
                            <p>A family discovers a dog is floating by the ocean shore.</p>
                            <a href="/singlebook">View this book</a>
                        </div>
                    </div>
                    <div className="fav-book" value="fiction">
                        <img src="/img/dog-on-a-log.png" alt="Cover Art for the Book A Dog On A Log" className="book-cover" />
                        <div className="fav-book-desc">
                            <h3>A Dog on a Log 4</h3>
                            <p>A family discovers a dog is floating by the ocean shore.</p>
                            <a href="/singlebook">View this book</a>
                        </div>
                    </div>
                    <div className="fav-book" value="mystery">
                        <img src="/img/dog-on-a-log.png" alt="Cover Art for the Book A Dog On A Log" className="book-cover" />
                        <div className="fav-book-desc">
                            <h3>A Dog on a Log 5</h3>
                            <p>A family discovers a dog is floating by the ocean shore.</p>
                            <a href="/singlebook">View this book</a>
                        </div>
                    </div>
                    <div className="fav-book" value="nonfiction">
                        <img src="/img/dog-on-a-log.png" alt="Cover Art for the Book A Dog On A Log" className="book-cover" />
                        <div className="fav-book-desc">
                            <h3>A Dog on a Log 6</h3>
                            <p>A family discovers a dog is floating by the ocean shore.</p>
                            <a href="/singlebook">View this book</a>
                        </div>
                    </div>
                    <div className="fav-book" value="fantasy">
                        <img src="/img/dog-on-a-log.png" alt="Cover Art for the Book A Dog On A Log" className="book-cover" />
                        <div className="fav-book-desc">
                            <h3>A Dog on a Log 7</h3>
                            <p>A family discovers a dog is floating by the ocean shore.</p>
                            <a href="/singlebook">View this book</a>
                        </div>
                    </div>
                    <div className="fav-book" value="fiction">
                        <img src="/img/dog-on-a-log.png" alt="Cover Art for the Book A Dog On A Log" className="book-cover" />
                        <div className="fav-book-desc">
                            <h3>A Dog on a Log 8</h3>
                            <p>A family discovers a dog is floating by the ocean shore.</p>
                            <a href="/singlebook">View this book</a>
                        </div>
                    </div>
                    <div className="fav-book" value="nonfiction">
                        <img src="/img/dog-on-a-log.png" alt="Cover Art for the Book A Dog On A Log" className="book-cover" />
                        <div className="fav-book-desc">
                            <h3>A Dog on a Log 9</h3>
                            <p>A family discovers a dog is floating by the ocean shore.</p>
                            <a href="/singlebook">View this book</a>
                        </div>
                    </div>
                </div>
            </section>

            <section>
            </section>            
        </div>
    );
}