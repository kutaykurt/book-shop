import React, { useEffect, useState } from 'react'
import bookapi from '../books.json';

export default function SelectedBook() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
          setBooks(bookapi);
        };
        fetchBooks();
      }, []);

  return (
    <div>
        {}
    </div>
  )
}
