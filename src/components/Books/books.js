import { SingleBook } from './singlebook';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export function Books(props) {
    const [books, setBooks] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('all');

    useEffect(() => {
        fetch('/books.json')  
        .then(response => response.json())
        .then(data => setBooks(data))
    }, []);

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    const filteredBooks = selectedGenre === 'all'
        ? books
        : books.filter(book => book.genre === selectedGenre);

    return (
        // books page content
        <div className="bookpage">
                            <h1 className="books-title">
                    Free Reads
                </h1>

            <section>
                <div className="filter-container">
                    <h2 className="genre-filter">
                        Filter By Genre:
                    </h2>
                    <select id="genreFilter" onChange={handleGenreChange}>
                        <option value="all">All Genres</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Educational">Educational</option>
                        <option value="Fairy Tale">Fairy Tale</option>
                        <option value="Fiction">Fiction</option>
                    </select>
                </div>
            </section>

            <section className="our-books">
                <div className="books-container">
                    {filteredBooks.map(book => (
                        <div className="fav-book" key={book.id}>
                            <img src={book.image} alt={`Cover Art for the Book ${book.title}`} className="book-cover" />
                            <div className="fav-book-desc">
                                <h3>{book.title}</h3>
                                <p>{book.description}</p>
                                <Link to={`/singlebook/${book.id}`}>View this book</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}