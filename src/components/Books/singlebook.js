import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export function SingleBook() {
    const { bookId } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`/books.json`)
            .then(response => response.json())
            .then(data => {
                const selectedBook = data.find(book => book.id === parseInt(bookId));
                setBook(selectedBook);
            });
    }, [bookId]);

    if (!book) {
        return <div>Loading book to read...</div>;
    }

    return (
        <div className="bookpage">
            <section className="single-books-container">
                <div className="go-back">
                    <Link to="/books" className="btn btn-dark">Back</Link>
                </div>
            </section>

            <section className="single-book">
                <div className="fav-single-book" value={book.genre}>
                    <div className='one-book'>
                        <img src={book.image} alt={`Cover Art for the Book ${book.title}`} className="single-book-cover" />
                        <div className='descriptors'>
                            <h1>{book.title}</h1>
                            <h3>Written By: {book.author}</h3>
                            <h4>Genre: {book.genre}</h4>
                            <p>{book.description}</p>
                            <p>Book provided by {book.provider}.</p>
                        </div>
                    </div>
                    <div className="download">
                        <a href={book.link} className="btn btn-dark" target="_blank" rel="noopener noreferrer">Download PDF</a>
                    </div> 
                </div>
            </section>    

            <section className="download-instructions">
                <div className="instruction-list">
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
