import React from 'react';
import { Link } from 'react-router-dom';

export function SingleBook(props) {
    return (
        // books page content
        <div className="bookpage">
            {/* section summarizing Reading Rabbit objectives */}
            <section className="single-books-container">
                <div className="go-back">
                    <Link to="/books" className="btn btn-dark">Back</Link>
                </div>
            </section>

            <section className="single-book">
             
                    <div className="fav-single-book" value="fiction">
                        <div className='one-book'>
                            <img src="/img/dog-on-a-log.png" alt="Cover Art for the Book A Dog On A Log" className="single-book-cover" />
                            <div>
                                <h1>A Dog on a Log 1</h1>
                                <p>A family discovers a dog is floating by the ocean shore.</p>
                                <p>This is a description of the book. The book description goes here.</p>
                                <p>Here stakeholders can read what the book is about.</p>
                            </div>
                        </div>
                    </div>

                    {/* section summarizing Reading Rabbit objectives
                    <div className="description-book"> 
                        <h1>A Dog on a Log 1</h1>
                        <p>A family discovers a dog is floating by the ocean shore.</p>
                        <p>This is a description of the book. The book description goes here.</p>
                        <p>Here stakeholders can read what the book is about.</p>
                    </div> */}
               
            </section>    

            <section class="download-instructions">
                <div className="download">
                    <Link to="/singlebook" className="btn btn-dark">Download PDF</Link>
                </div> 

                <div class="instruction-list">
                    <h2>Download Instructions</h2>
                    <div className="instructions">
                        <p>1. Click the “Download” PDF button above to get redirected to the book download site.</p>
                        <p>2. Follow the directions on the redirected page to download the PDF.</p>
                        <p>3. View the pop-up after download or go to your download files and start reading!</p>
                    </div>
                </div>
            </section>
        </div>
    );
}