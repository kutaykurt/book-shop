import React, { createContext, useState} from 'react'

const CartContext = createContext()

export function CartProvider({children}) {

    const [items, setItems] = useState([]);

    const addToCart = (kategorie, unterkategorie, bild1, bild2, bild3, name, autor, preis, beschreibung, verkaufsrang, einband, erscheinungsdatum, verlag, seitenzahl, gewicht, auflage, originaltitel, uebersetzer, sprache, isbn) => {
        setItems((prevState) => [...prevState, { kategorie, unterkategorie, bild1, bild2, bild3, name, autor, preis, beschreibung, verkaufsrang, einband, erscheinungsdatum, verlag, seitenzahl, gewicht, auflage, originaltitel, uebersetzer, sprache, isbn }])
    }

    const deleteItem = (kategorie, unterkategorie, bild1, bild2, bild3, name, autor, preis, beschreibung, verkaufsrang, einband, erscheinungsdatum, verlag, seitenzahl, gewicht, auflage, originaltitel, uebersetzer, sprache, isbn) => {
      setItems(items.filter((item) => item.bild1 !== bild1))
    }

  return (
    <CartContext.Provider value={{ items, addToCart, deleteItem}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext;