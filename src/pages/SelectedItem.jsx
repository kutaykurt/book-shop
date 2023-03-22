import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import bookapi from '../books.json';
import './SelectedItem.css';
import CartContext from '../components/CartContext';

export default function SelectedItem({
  kategorie,
  unterkategorie,
  bild1,
  bild2,
  bild3,
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
  const { name } = useParams();
  const { items, deleteItem } = useContext(CartContext);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchBooks = async () => {
      const showProduct = bookapi.find((product) => product.name === name)
      setBooks(showProduct);
    };
    fetchBooks();
  }, []);
  
  console.log(books);
  
  return (
    <div className="selected-item-main-container">
      <div>

        <h3 className='selected-book-title'>{books.name}</h3>
        <span>Autor: <Link className='selected-book-autor-name' to="/">{books.autor}</Link></span>

        <p className='selected-book-beschreibung'>{books.beschreibung}</p>


        <button className='add-to-cart-button' onClick={() =>
                            addToCart(
                              books.kategorie,
                              books.unterkategorie,
                              books.bild1,
                              books.bild2,
                              books.bild3,
                              books.name,
                              books.autor,
                              books.preis,
                              books.beschreibung,
                              books.verkaufsrang,
                              books.einband,
                              books.erscheinungsdatum,
                              books.verlag,
                              books.seitenzahl,
                              books.gewicht,
                              books.auflage,
                              books.originaltitel,
                              books.uebersetzer,
                              books.sprache,
                              books.isbn,
                            )
                          }>In den Warenkorb</button>
      </div>
      <div className="picture-container">
        <img src={books.bild1} alt="" />
      </div>
    </div>
  );
}
