import React, { useEffect, useState } from 'react';
import Fachbuecher from '../components/kategorien/Fachbuecher';
import bookapi from '../books.json';
import { Route, Routes } from 'react-router-dom';
import CartProvider from '../components/CartContext';
import Einkaufskorb from './Einkaufskorb';
import CarouselComponent from '../components/CarouselComponent';
import { ButtonGroup, Dropdown, DropdownButton, SplitButton } from 'react-bootstrap';

export default function Homepage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      setBooks(bookapi);
    };
    fetchBooks();
  }, []);

  const getFachbuecher = books.filter((elem) => {
    return elem.kategorie === 'Fachbücher';
  });

  const filterPaedagogik = getFachbuecher.filter((elem) => {
    if (elem.unterkategorie === 'Pädagogik') {
      return elem;
    }
  });

  const firstScrollLeft = () => {
    document.getElementById("content").scrollLeft -= 800;
  };

  const firstScrollRight = () => {
    document.getElementById("content").scrollLeft += 800;
  };

  return (
    <div className="main-books-container">
      <div>
        <CarouselComponent />
      </div>

      <div className='carousel-render-container'/>
      <h1 className='empfehlungen-titel'>Unsere Empfehlungen:</h1>
      <div>
      <button
              onClick={firstScrollLeft}
              className="scroll-button"
            >
              Left
            </button>
            <button
              onClick={firstScrollRight}
              className="scroll-button"
            >
              Right
            </button>
      <div id="content" className=" carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide" >
              {filterPaedagogik.map(
                ({ kategorie, unterkategorie, bild1, bild2, bild3, name, autor, preis, beschreibung, verkaufsrang, einband, erscheinungsdatum, verlag, seitenzahl, gewicht, auflage, originaltitel, uebersetzer, sprache, isbn,
                }) => {
                  return (
                    <div className="book-detail">
                      <div className='book-container'>
                        <img
                          className="book-cover"
                          src={bild1}
                          alt=""
                        />
                      </div>
                      <h3 className="book-name make-ellipsis">{name}</h3>
                    </div>
                  );
                }
              )}
          </div>
      </div>
    </div>
  );
}
