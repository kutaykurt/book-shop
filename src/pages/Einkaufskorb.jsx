import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import CartContext from '../components/CartContext';
import './einkaufskorb.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Einkaufskorb() {
  const { items, deleteItem } = useContext(CartContext);
  console.log("--------------------------------------------------");

  const leererEinkaufskorb = items.length === 0;

  /* const concatArrays = Object.keys(items).;

  console.log(concatArrays); */

  
  const amountItems = Object.values(items).map((elem) => elem);
  console.log(amountItems);
  const amountItemsTwo = amountItems.map((elem) => elem.name);
  console.log(amountItemsTwo);

  const filterDublicates = () => amountItemsTwo.filter((item, index) => amountItemsTwo.indexOf(item) !== index);
  const dublicateElement = filterDublicates(amountItemsTwo);
  console.log(dublicateElement.length);
   
  const removeDublicates = items.map(JSON.stringify);

  const uniqueSet = new Set(removeDublicates);
  const uniqueArray = Array.from(uniqueSet).map(JSON.parse);
  console.log(uniqueArray);
  
  /* const counts = {};
  const amount = amountItemsTwo.forEach((x) => {counts[x] = (counts[x] || 0) + 1}); */

  /* const amount = amountItemsTwo.reduce((map, val) => {map[val] = (map[val] || 0) + 1; return map}, []) */

  /* const amount = amountItemsTwo.reduce((a, c) => a.set(c, (a.get(c) || 0) + 1), new Map()) */

  const amount = amountItemsTwo.reduce((acc, value) => {
    return {...acc, [value]: (acc[value] || 0) + 1};
  }, []);

  
  console.log(Object.keys(amount));
  
  
  
  console.log("--------------------------------------------------");
  
  return (
    <div className='Einkaufskorb'>
      {leererEinkaufskorb
      ? <div>
          <h3>Dein Einkaufkorb ist leer!</h3>

          <div>
            <h3>Empfehlungen:</h3>
            
          </div>
        </div>
      : 
      <div>
        {uniqueArray.map(({ kategorie, unterkategorie, bild1, bild2, bild3, name, autor, preis, beschreibung, verkaufsrang, einband, erscheinungsdatum, verlag, seitenzahl, gewicht, auflage, originaltitel, uebersetzer, sprache, isbn}) => (
          <div className='einkaufskorb-container'>
            <div>
              <img className='einkaufskorb-img' src={bild1} alt="" />
            </div>

            <div>
              <h3>{name}</h3>
              <span>{}</span>
              <DeleteOutlineIcon className='remove-button' onClick={() => deleteItem(kategorie, unterkategorie, bild1, bild2, bild3, name, autor, preis, beschreibung, verkaufsrang, einband, erscheinungsdatum, verlag, seitenzahl, gewicht, auflage, originaltitel, uebersetzer, sprache, isbn)}/>
            </div>
          </div>
        ))}
      </div>
      }

    </div>
  )
}