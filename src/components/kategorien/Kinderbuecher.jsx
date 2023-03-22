import React, { useEffect, useState } from 'react';
import bookapi from '../../books.json';
import './kategorien.css';
import { useContext } from 'react';
import CartContext from '../CartContext';

import '../../App.css';
import CarouselComponent from '../CarouselComponent';
import { Link } from 'react-router-dom';

export default function Kinderbuecher ({
  kategorie,
  unterkategorie,
  bild1,
  bild2,
  bild3,
  name,
  autor,
  preis,
  beschreibung,
  verkaufsrang,
  einband,
  erscheinungsdatum,
  verlag,
  seitenzahl,
  gewicht,
  auflage,
  originaltitel,
  uebersetzer,
  sprache,
  isbn,
}) {
  const [books, setBooks] = useState([]);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchBooks = async () => {
      setBooks(bookapi);
    };
    fetchBooks();
  }, []);

  const firstScrollLeft = () => {
    document.getElementById("content").scrollLeft -= 800;
  };

  const firstScrollRight = () => {
    document.getElementById("content").scrollLeft += 800;
  };

  const getKinderbuecher = books.filter((elem) => {
    return elem.kategorie === 'Kinderbücher';
  });

  const filterEmpfehlungen = getKinderbuecher.filter((elem) => {
    if (elem.unterkategorie === 'Empfehlungen') {
      return elem;
    }
  });

  return (
    <div className="Fachbuecher kategorien relative">
      <div>
        <CarouselComponent />
      </div>
      <div className='carousel-render-container'/>
      <div className="fachbuecher-main-container">
        <div>
          <h1 className='kategorie-titel'>Neuheiten</h1>

          <h2 className="unterkategorie-name">Empfehlungen</h2>
          <div className="absolute right-0 top-5 ">
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
          </div>
            <div id="content" className=" carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide" >
              {filterEmpfehlungen.map(
                ({ kategorie, unterkategorie, bild1, bild2, bild3, name, autor, preis, beschreibung, verkaufsrang, einband, erscheinungsdatum, verlag, seitenzahl, gewicht, auflage, originaltitel, uebersetzer, sprache, isbn,
                }) => {
                  return (
                    <div className="book-detail">
                      <div className='book-container'>
                        <Link to={`${name}`}><img
                          className="book-cover"
                          src={bild1}
                          alt=""
                        /></Link>
                      </div>

                      <h3 className="book-name make-ellipsis">{name}</h3>
                    </div>
                  );
                }
              )}
          </div>
        </div>
        <div></div>
        <div className="load-more-button-container"></div>
      </div>
    </div>
  );
}
